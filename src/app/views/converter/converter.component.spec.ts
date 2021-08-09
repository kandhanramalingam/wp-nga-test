import {ConverterComponent} from './converter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {KeyboardComponent} from '../../components/keyboard/keyboard.component';
import {OutputComponent} from '../../components/output/output.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState} from '../../shared/store';
import {selectConvertedOutput, selectUserInput} from '../../shared/store/converter.selectors';
import * as converterActions from '../../shared/store/converter.actions';

describe('Converter Component', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;
  let store: MockStore<AppState>;
  const initialState = {
    input: '',
    output: ''
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterComponent, KeyboardComponent, OutputComponent ],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: selectUserInput,
              value: ''
            },
            {
              selector: selectConvertedOutput,
              value: ''
            }
          ]
        })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callFake(() => {});
  });
  it('should create Converter Component', () => {
    expect(component).toBeTruthy();
  });
  it('Converted should dispatch addUserInput', () => {
    const userInput = '1';
    component.addInput(userInput);
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(converterActions.addUserInput({data: userInput}));
  });
  it('Converted should dispatch removeInput', () => {
    component.removeInput();
    expect(store.dispatch).toHaveBeenCalledWith(converterActions.removeUserInput());
  });
});
