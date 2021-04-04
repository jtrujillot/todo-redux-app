import { ActionReducerMap } from '@ngrx/store';
import { validFilter } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducers';
import {Todo} from './todos/models/todo.model';
import { todoReducer } from './todos/storage/todo.reducers';

export interface AppState {
  todos: Todo[],
  filter: validFilter
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
