import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from 'src/tasks/task.model';
import { v4 as generateUUID } from 'uuid';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: generateUUID(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
