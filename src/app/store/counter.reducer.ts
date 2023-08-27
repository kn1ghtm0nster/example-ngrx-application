import { createReducer, on } from '@ngrx/store';

import { decrement, increment } from './counter.actions';

const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);

// example of previous reducer implementation (often seen in older versions of angular)
// export function oldCounterReducer(state: number = initialState) {
//   return state;
// }
