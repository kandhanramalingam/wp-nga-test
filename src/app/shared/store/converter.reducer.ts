import {createReducer, on} from '@ngrx/store';
import * as converterActions from './converter.actions';

export const converterKey = 'converter';
export interface State {
  input: string;
  output: string;
}
export const initialState: State = {
  input: '',
  output: ''
};
export const userInputReducer = createReducer(
  initialState,
  on(converterActions.addUserInput, (state, action) => {
    return {
      ...state,
      input: state.input + action.data
    };
  }),
  on(converterActions.removeUserInput, (state, action) => {
    return {
      ...state,
      input: state.input.substring(0, state.input.length - 1)
    };
  }),
  on(converterActions.outputUserInput, (state, action) => {
    return {...state, output: action.data};
  })
);
