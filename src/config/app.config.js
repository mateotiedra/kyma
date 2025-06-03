export default function AppConfig() {
  return {
    API_ORIGIN:
      import.meta.env.MODE === 'production' ||
      import.meta.env.VITE_API_FORCE_REMOTE_API === 'true'
        ? import.meta.env.VITE_API_URL_PRODUCTION
        : import.meta.env.VITE_API_URL_DEVELOPMENT,

    WS_ORIGIN:
      import.meta.env.MODE === 'production' ||
      import.meta.env.VITE_API_FORCE_REMOTE_API === 'true'
        ? import.meta.env.VITE_API_URL_PRODUCTION.replace('https', 'wss')
        : import.meta.env.VITE_API_URL_DEVELOPMENT.replace('http', 'ws'),
  };
}
