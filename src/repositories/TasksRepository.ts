import { uuid } from 'uuidv4';
import Task from '../models/Task';

interface TaskDTO {
  name: string;
  description: string;
  date: Date;
}
export default class TasksRepository {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  public all(): Task[] {
    return this.tasks;
  }

  public create({ name, description, date }: TaskDTO): Task {
    const task: Task = {
      id: uuid(),
      name,
      description,
      done: false,
      date,
    };

    this.tasks.push(task);

    return task;
  }

  public delete(id: string): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex > 0) {
      const task = this.tasks.splice(taskIndex, 1)[0];
      return task;
    }

    throw new Error('Task não encontrada.');
  }
}
