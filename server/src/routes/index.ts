import { Router } from 'express';
import tasksRouter from './tasks.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ message: 'API is running!' });
});

routes.use('/tasks', tasksRouter);

export default routes;
