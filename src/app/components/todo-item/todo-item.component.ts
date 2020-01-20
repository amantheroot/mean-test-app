import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  SetClasses() {
    const classes = {
      todo: true,
      'is-completed': this.todo.completed
    };

    return classes;
  }

  OnToggle(todo) {
    // Toggle in UI
    todo.completed = !(todo.completed);

    // Toggle in the server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }
  OnDelete(todo) {
    this.todoService.onDelete(todo).subscribe();
  }

}
