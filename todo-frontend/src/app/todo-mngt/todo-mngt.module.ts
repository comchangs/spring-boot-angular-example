import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { TodoService } from "./shared/todo.service";
import { TodoComponent } from "./todos/todo/todo.component";
import { TodosComponent } from "./todos/todos.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    TodoService
  ],
  declarations: [TodosComponent, TodoComponent, AddTodoComponent],
  exports: [TodosComponent]
})
export class TodoMngtModule { }
