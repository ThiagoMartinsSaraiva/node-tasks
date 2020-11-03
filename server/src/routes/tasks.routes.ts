import { Router } from 'express';

import TasksRepository from '../repositories/TasksRepository';
import CreateTaskService from '../services/CreateTaskService';

const tasksRouter = Router();

const tasksRepository = new TasksRepository();

tasksRouter.get('/', async (request, response) => {
  const tasks = tasksRepository.all();

  return response.json({ tasks });
});

tasksRouter.post('/', async (request, response) => {
  try {
    const { name, description, date } = request.body;
    const createTaskService = new CreateTaskService(tasksRepository);

    const task = createTaskService.execute({
      name,
      description,
      date,
    });

    return response.json({ task });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

tasksRouter.put('/:id', async (request, response) => {
  try {
    const { name, description, done, date } = request.body;
    const { id } = request.params;

    const task = tasksRepository.update(id, {
      name,
      description,
      done,
      date,
    });
    return response.json({ task });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

tasksRouter.delete('/:id', async (request, response) => {
  try {
    const task = tasksRepository.delete(request.params.id);
    return response.json({ message: 'task deleted', task });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default tasksRouter;
