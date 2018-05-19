import { Component, OnInit } from '@angular/core';
import { Todo } from "../shared/todo";
import { TodoService } from "../shared/todo.service";
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'todo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  today: Date = new Date();

  constructor(private todoService: TodoService) {
    todoService.getTodos().subscribe(v => this.todos = v);
  }

  ngOnInit() {
  }

  leftCount() {
    return this.todos.reduce((p, v) => p + ((v.done) ? 1 : 0), 0);
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo.text)
      .mergeMap(v => this.todoService.getTodos())
      .subscribe(v => this.todos = v);
  }

}
