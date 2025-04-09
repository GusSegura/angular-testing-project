import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent],
})
export class AppComponent {
  title = 'angular-testing-project';
  mensajerecibido :string[] = [];
  constructor(){}

  addTask(task: string) {
    this.mensajerecibido=this.getTasks();
  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}
