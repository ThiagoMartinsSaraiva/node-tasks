import { v4 } from 'uuid';
import Task from '../models/Task';

interface TaskDTO {
  name: string;
  description: string;
  done: boolean;
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

  public create({ name, description, done, date }: TaskDTO): Task {
    const task: Task = {
      id: v4(),
      name,
      description,
      done,
      date,
    };

    this.tasks.push(task);

    return task;
  }

  public update(id: string, { name, description, done, date }: TaskDTO): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex > -1) {
      const task = {
        id,
        name,
        description,
        done,
        date,
      };

      this.tasks[taskIndex] = task;

      return task;
    }

    throw new Error('Task não encontrada.');
  }

  public delete(id: string): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex > -1) {
      const task = this.tasks.splice(taskIndex, 1)[0];
      return task;
    }

    throw new Error('Task não encontrada.');
  }
}
