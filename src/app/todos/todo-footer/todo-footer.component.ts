import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { setFilter, validFilter } from 'src/app/filter/filter.actions';
import { clearToDoCompleted } from '../storage/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: validFilter = 'All';
  filters: validFilter[] = ['All','completed', 'pending'];
  countPendingToCompleted: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.countPendingToCompleted = state.todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filterToChange: validFilter) {
    if(this.actualFilter === filterToChange){return;}
    this.actualFilter= filterToChange;
    this.store.dispatch(setFilter({filter: filterToChange}));
  }

  clearCompleted() {
    this.store.dispatch(clearToDoCompleted());
  }

}
