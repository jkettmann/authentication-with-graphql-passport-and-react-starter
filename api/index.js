import express from 'express';

const PORT = 4000;

const app = express();

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});