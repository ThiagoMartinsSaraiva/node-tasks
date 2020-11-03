import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('app running on port 3000');
});
