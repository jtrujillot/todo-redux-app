import {createAction, props} from '@ngrx/store';

export const addToDo = createAction('[TODO] Add ToDo',
                                    props<{text: string}>());

export const toggle = createAction('[TODO] Toggle ToDo',
                                    props<{id: number}>());

export const editToDo = createAction('[TODO] Edit ToDo',
                                    props<{id: number, text: string}>());

export const deleteToDo = createAction('[TODO] Delete ToDo',
                                    props<{id: number}>());

export const toggleAll = createAction('[TODO] ToggleAll ToDo',
                                    props<{completed: boolean}>());

export const clearToDoCompleted = createAction('[TODO] ClearCompleted ToDo');
