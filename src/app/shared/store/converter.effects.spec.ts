import createSpyObj = jasmine.createSpyObj;
import {Observable, of} from 'rxjs';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {ConverterEffects} from './converter.effects';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {ConverterService} from '../services/converter.service';
import * as converterActions from './converter.actions';
import {TestScheduler} from 'rxjs/testing';
import {Action} from '@ngrx/store';
import {selectConvertedOutput, selectUserInput} from './converter.selectors';

describe('Converter Effect', () => {
  const initialState = {input: '', output: ''};
  let effects: ConverterEffects;
  let actions: Observable<Action>;
  let store: MockStore<any>;
  const converterService = createSpyObj('ConverterService', ['convertUserInput']);
  let testScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConverterEffects,
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: selectUserInput,
              value: '0'
            },
            {
              selector: selectConvertedOutput,
              value: 'A'
            }
          ]
        }),
        provideMockActions(() => actions),
        {provide: ConverterService, useValue: converterService}
      ]
    });
    effects = TestBed.inject(ConverterEffects);
    store = TestBed.inject(MockStore);
    store.setState({input: '', output: ''});
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });
  it('Should be created', () => {
    expect(effects).toBeTruthy();
  });
  describe('convEffect$', () => {
    it('Should handle addUserInput and return outputUserInput', () => {
      const action = converterActions.addUserInput({ data: '0' });
      const outcome = converterActions.outputUserInput({data: 'A'});

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: 'A' });
        converterService.convertUserInput.and.returnValue(response);
        expectObservable(effects.convEffect$).toBe('--c', { c: outcome });
      });
    });
  });
});
