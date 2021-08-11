import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {KeyboardComponent} from './keyboard.component';
import {provideMockStore} from '@ngrx/store/testing';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {Key} from '../../shared/models/common';

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
    const sampleKey: Key = { value: '1', type: 'txt', label: '1'};
    spectator.output('add').subscribe(result => (output = result));
    spectator.component.onKeyPressed(sampleKey);
    expect(output).toEqual('1');
  });
  it('Check remove has been called', () => {
    const removeValueSpy = spyOn(spectator.component, 'onKeyPressed');
    const sampleKey: Key = { value: '', type: 'html', label: '&#8592;'};
    spectator.component.onKeyPressed(sampleKey);
    expect(removeValueSpy).toHaveBeenCalledTimes(1);
  });
});

