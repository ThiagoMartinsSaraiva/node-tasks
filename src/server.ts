import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'API is running!' });
});

app.listen(3000, () => {
  console.log('app running on port 3000');
});
