import { Task } from './../../interfaces/task.model';
import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks : Task[] = []
  constructor(public taskservice : TaskService) { }


  ngOnInit() {
    this.tasks = this.taskservice.getAllTasks();
  }

  onToggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
    console.log(`Task with id ${id} toggled. New status: ${task?.completed}`);
  }

  onDeleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    console.log(`Task with id ${id} deleted.`);
  }
}
