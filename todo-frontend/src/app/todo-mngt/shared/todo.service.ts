import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Todo } from "./todo";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

const host = '/api/todos';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<any>(host)
      .do(console.log)
  }

  addTodo(text: string): Observable<any> {
    return this.http.post(host, text);
  }

  private resolveId(v: string): string {
    const idxSlash = v.lastIndexOf('/');
    return v.substr(idxSlash + 1);
  }

}
