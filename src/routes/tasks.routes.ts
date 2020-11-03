import { Router } from 'express';

import TasksRepository from '../repositories/TasksRepository';

const tasksRouter = Router();

const tasksRepository = new TasksRepository();

tasksRouter.get('/', async (request, response) => {
  const tasks = tasksRepository.all();

  return response.json({ tasks });
});

tasksRouter.post('/', async (request, response) => {
  const { name, description, date } = request.body;

  const task = tasksRepository.create({
    name,
    description,
    date,
  });

  return response.json({ task });
});

tasksRouter.put('/:id', async (request, response) => {
  return response.json({ message: 'task updated' });
});

tasksRouter.delete('/:id', async (request, response) => {
  try {
    const task = tasksRepository.delete(request.params.id);
    return response.json({ message: 'task deleted', task });
  } catch (err) {
    return response.json({ err });
  }
});

export default tasksRouter;
