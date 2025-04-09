import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() mensaje:string[]=[];
  @Output() nuevoMensaje=new EventEmitter<string>

  tarea!: string;
  tasks: string[] = [];

  constructor() {
    console.log('TaskListComponent initialized');
    
    }
  

  addTask(task: string) {
    console.log('Adding task:', task);
    // this.nuevoMensaje.emit(this.msg);
  
  }

  updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    console.log('Deleting task:', task);
  }
  showtask(tarea: string){
    console.log(tarea);
  }
}
