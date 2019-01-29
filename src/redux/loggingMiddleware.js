export const loggingMiddleware = (state) => (next) => (action) => {
  console.log('reducx log:', action)
  next(action);
}