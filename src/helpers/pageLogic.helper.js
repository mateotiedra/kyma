import { useContext, useEffect, useRef, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  UNSAFE_NavigationContext,
} from 'react-router-dom';

import axios from 'axios';

import AppConfig from '../config/app.config';
import AxiosHelper from './axios.helper';

const PageLogic = () => {
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios);

  const navigate = useNavigate();

  /* let navWithBase = useCallback(
    (path) => {
      if (path == '0') {
        navigate(0);
      }

      navigate(import.meta.env.BASE_URL.slice(0, -1) + path);
    },
    [navigate]
  ); */

  let { pathname, ...location } = useLocation();

  let params = useParams();

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  const useLoadPage = (actionIn, options) => {
    useEffect(() => {
      const { actionOut, allowedRoles, setUserData, authNeeded } =
        options || {};

      // First time the page is loaded
      if (!hasFetchedData.current) {
        hasFetchedData.current = true;
        if (allowedRoles || setUserData || authNeeded)
          fetchUserData(allowedRoles, setUserData, authNeeded).then(
            (userData) => {
              actionIn && actionIn(userData);
            }
          );
        else actionIn && actionIn();
      }

      // When leaving the page
      return () => {
        if (actionOut) return actionOut;
      };
    }, [actionIn, options]);
  };

  const useNavigationInterceptor = (onIntercept) => {
    const navigator = useContext(UNSAFE_NavigationContext).navigator;

    useEffect(() => {
      const listener = ({ location, action }) => {
        onIntercept && onIntercept({ location, action });
      };

      const unlisten = navigator.listen(listener);
      return unlisten;
    }, [onIntercept, navigator]);
  };

  const fetchUserData = (allowedRoles, setUserData, authNeeded) =>
    new Promise((resolve, reject) => {
      if (localStorage.getItem('accessToken')) {
        axios
          .get(API_ORIGIN + '/user/u', {
            headers: {
              'x-access-token': localStorage.getItem('accessToken'),
            },
          })
          .then(({ data }) => {
            const user = data;
            if (allowedRoles) {
              if (
                allowedRoles.includes(user.role) &&
                user.status === 'active'
              ) {
                setUserData && setUserData(user);
              } else {
                navigate('/', { replace: true });
                reject();
              }
            } else {
              setUserData && setUserData(user);
            }
            resolve(user);
          })
          .catch((err) => {
            if (
              allowedRoles &&
              (getStatusCode(err) === 401 || getStatusCode(err) === 403)
            ) {
              localStorage.removeItem('accessToken');
              navigate('/login', {
                replace: true,
                state: { destination: pathname },
              });
              reject();
            }
          });
      } else if (allowedRoles || authNeeded) {
        navigate('/login', { replace: true, state: { destination: pathname } });
      } else {
        resolve();
      }
    });

  const baseUrl = import.meta.env.BASE_URL || '/';

  return {
    API_ORIGIN,
    getStatusCode,
    pageStatus,
    setPageStatus,
    axios,
    navigate,
    useLoadPage,
    params,
    useNavigationInterceptor,
    pathname,
    location,
    baseUrl,
  };
};

export default PageLogic;
