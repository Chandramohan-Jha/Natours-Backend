// ./server.js
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1)
})

dotenv.config({ path: './config.env' });

// connect to mongodb
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_LOCAL).then((con) => {
  console.log('Database connected successfully✌️');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port 127.0.0.1:${port}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION 💥 Shutting down...')
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1)
  })
})

