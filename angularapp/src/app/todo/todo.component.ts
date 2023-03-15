import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
 



  
  createTodo(){
    let todo = {
      id : new Date().getTime(),
      title:'Format the data of Firebase'
    }

    this.todoService.create(todo).subscribe((response) =>{
    console.log(`response`, response);
    },
    (error=>{
      console.log(`Error`,error);
    })
    )
  }
}