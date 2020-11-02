import { Router } from 'express';

import Tasks from '../models/Task';

const tasksRouter = Router();

tasksRouter.get('/', async (request, response) => {
  const tasks: Tasks[] = [];

  return response.json({ tasks });
});

tasksRouter.post('/', async (request, response) => {
  return response.json({ message: 'task created' });
});

tasksRouter.put('/:id', async (request, response) => {
  return response.json({ message: 'task updated' });
});

tasksRouter.delete('/:id', async (request, response) => {
  return response.json({ message: 'task deleted' });
});

export default tasksRouter;
