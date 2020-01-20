import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  TodosURL: string = 'https://jsonplaceholder.typicode.com/todos';
  TodosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) { }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.TodosURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  onDelete(todo: Todo): Observable<any> {
    const url = `${this.TodosURL}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  GetTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.TodosURL + this.TodosLimit);
  }
}
