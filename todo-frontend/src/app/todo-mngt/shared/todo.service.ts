import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Todo } from "./todo";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

const host = '';

@Injectable()
export class TodoService {

  todos: Todo[];

  constructor(private http: HttpClient) {
    this.todos = [
      {
        id: '1',
        done: true,
        text: 'sdfadsfadsfadsfa'
      },
      {
        id: '2',
        done: false,
        text: 'sdfasdfadsf'
      }
    ];
  }

  getTodos(): Observable<Todo[]> {
    return Observable.of(this.todos);
    /*
    return this.http.get<any>(host)
      .map(v =>
        v.documents.map(d => {
          return {
            id: this.resolveId(d.name),
            done: d.fields.done.booleanValue,
            text: d.fields.text.stringValue
          }
        })
      )
      .do(console.log)
      */
  }

  addTodo(text: string): Observable<Todo[]> {
    this.todos.push({
        id: this.resolveId(text),
        done: false,
        text: text
      }
    );
    return Observable.of(this.todos);
    /*
    return this.http.post(host, {
      fields: {
        done: {
          booleanValue: false
        },
        text: {
          stringValue: text
        }
      }
    });*/
  }

  private resolveId(v: string): string {
    const idxSlash = v.lastIndexOf('/');
    return v.substr(idxSlash + 1);
  }

}
