import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as actions from './todo.actions';

export const initialState:Todo[] = [ ];

const _todoReducer = createReducer(
  initialState,
  on(actions.addToDo, (state, {text}) =>  [...state, new Todo(text)]),
  on(actions.toggle, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.editToDo, (state, {id, text}) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          text: text
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.deleteToDo, (state, {id}) => {
    return state.filter(todo => todo.id != id);
  }),
  on(actions.toggleAll, (state, {completed}) => {
    return state.map(todo => {
        return {
          ...todo,
          completed: completed
        }
    });
  }),
  on(actions.clearToDoCompleted, (state) => {
    return state.filter(todo => !todo.completed);
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}


