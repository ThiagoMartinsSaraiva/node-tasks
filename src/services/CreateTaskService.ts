import Task from '../models/Task';
import TasksRepository from '../repositories/TasksRepository';

interface Request {
  name: string;
  description: string;
  date: Date;
}

export default class CreateTaskService {
  public taskRepository;

  constructor(tasksRepository: TasksRepository) {
    this.taskRepository = tasksRepository;
  }

  public execute({ name, description, date }: Request): Task {
    const task = this.taskRepository.create({
      name,
      description,
      date,
      done: false,
    });

    return task;
  }
}
