export default () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: parseInt(process.env.PORT) || 3001,
  defaultLimit: parseInt(process.env.DEFAULT_LIMIT) || 11,
});
