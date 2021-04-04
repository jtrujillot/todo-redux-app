import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilter } from './filter.actions';

export const initialState: validFilter = 'All';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, {filter}) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
