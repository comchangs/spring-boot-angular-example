import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from "../shared/todo";

@Component({
  selector: 'todo-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: [ './add-todo.component.css' ]
})
export class AddTodoComponent implements OnInit {

  @Output()
  newTodo = new EventEmitter<Todo>();

  newText: string;

  constructor() {
  }

  ngOnInit() {
  }

  addTodo(text) {
    this.newTodo.emit({ id: null, done: false, text });
    this.newText = null;
  }

}
