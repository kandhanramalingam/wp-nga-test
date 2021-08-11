import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {KeyboardComponent} from './keyboard.component';
import {provideMockStore} from '@ngrx/store/testing';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';

describe('KeyBoard Component', () => {
  let spectator: Spectator<KeyboardComponent>;
  const initialState = {
    input: '',
    output: ''
  };
  const createComponent = createComponentFactory({
    component: KeyboardComponent,
    providers: [
      provideMockStore({
        initialState
      })
    ]
  });
  beforeEach(() => {
    spectator = createComponent();
  });
  it('Check UserInput Emitor', () => {
    let output;
    spectator.output('add').subscribe(result => (output = result));
    spectator.component.addValue('a');
    expect(output).toEqual('a');
  });
  it('Check remove has been called', () => {
    const removeValueSpy = spyOn(spectator.component, 'removeValue');
    spectator.component.removeValue();
    expect(removeValueSpy).toHaveBeenCalledTimes(1);
  });
});

