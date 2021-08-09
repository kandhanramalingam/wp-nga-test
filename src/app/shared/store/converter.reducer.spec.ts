import * as converterActions from './converter.actions';
import {reducer} from './converter.reducer';

describe('Converter Reducer', () => {
  const initialState = {
    input: '', output: ''
  };
  beforeEach(() => {
    initialState.input = '';
    initialState.output = '';
  });
  it('should add userInput', () => {
    const action = converterActions.addUserInput({data: '1'});
    const state = reducer(initialState, action);
    expect(state).toEqual({input: '1', output: ''});
  });

  it('should remove userInput', () => {
    initialState.input = '21';
    const action = converterActions.removeUserInput();
    const state = reducer(initialState, action);
    expect(state).toEqual({input: '2', output: ''});
  });

  // Doesn't call the effect, so output will be same as Input.
  it('should update Output', () => {
    initialState.input = '1';
    const action = converterActions.outputUserInput({data: initialState.input});
    const state = reducer(initialState, action);
    expect(state).toEqual({input: '1', output: '1'});
  });
});
