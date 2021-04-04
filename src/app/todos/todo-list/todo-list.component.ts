import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { validFilter } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[]= [];
  actualFilter: validFilter;
  constructor(private store: Store<AppState>) {
    store.subscribe(state => {
      this.actualFilter = state.filter;
      this.todos = state.todos
    });
  }

  ngOnInit() {
  }

}
