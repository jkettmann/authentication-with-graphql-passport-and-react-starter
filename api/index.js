import express from 'express';
import session from 'express-session';
import uuid from 'uuid/v4';

const PORT = 4000;
const SESSION_SECRECT = 'bad secret';

const app = express();

app.use(session({
  genid: (req) => uuid(),
  secret: SESSION_SECRECT,
  resave: false,
  saveUninitialized: false,
}));

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});