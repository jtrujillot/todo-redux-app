import { createAction, props } from '@ngrx/store';


export type validFilter = 'All' | 'completed' | 'pending'

export const setFilter = createAction('[filter] SetFilter',
                            props<{filter: validFilter}>());
