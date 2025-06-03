import { useCallback, useEffect, useRef } from 'react';
import AppConfig from '../config/app.config';

const useWebsocket = ({ triggerRoomUpdate, navigate }) => {
  const { WS_ORIGIN } = AppConfig();
  const chatInitialized = useRef(false);

  const ws = useRef(null);

  const sendMessage = useCallback(
    (input) => {
      if (!ws.current) return;
      if (input.trim() === '') return;
      ws.current.send(input);
    },
    [ws]
  );

  const joinChat = useCallback(
    (roomUuid) => {
      if (chatInitialized.current) return;

      const url = `${WS_ORIGIN}/ws/${roomUuid}/${localStorage.getItem(
        'nickname'
      )}/${localStorage.getItem('uuid')}`;

      ws.current = new WebSocket(url);

      ws.current.onopen = () => {
        //console.log('Connected to the WebSocket server');
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.room && triggerRoomUpdate) {
          triggerRoomUpdate(data.room);
        } else if (data['new-room-uuid']) {
          navigate(`/r/${data['new-room-uuid']}`);
        }
      };

      chatInitialized.current = true;
    },
    [WS_ORIGIN, chatInitialized, ws, triggerRoomUpdate, navigate]
  );

  useEffect(() => {
    return () => {
      if (ws.current) {
        ws.current.close();
        ws.current = null;
      }
    };
  }, []);

  return { sendMessage, joinChat };
};

export { useWebsocket };
