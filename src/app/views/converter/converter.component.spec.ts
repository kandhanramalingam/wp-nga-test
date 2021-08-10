import {Spectator, createComponentFactory, mockProvider, byText} from '@ngneat/spectator';
import {ConverterComponent} from './converter.component';
import {Store, StoreModule} from '@ngrx/store';
import {KeyboardComponent} from '../../components/keyboard/keyboard.component';
import {OutputComponent} from '../../components/output/output.component';
import {selectConvertedOutput, selectUserInput} from '../../shared/store/converter.selectors';
import {userInputReducer} from '../../shared/store/converter.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ConverterEffects} from '../../shared/store/converter.effects';
import {FacadeService} from '../../shared/services/facade.service';
import {provideMockStore} from '@ngrx/store/testing';

describe('Converter Component', () => {
  let spectator: Spectator<ConverterComponent>;
  const initialState = {
    input: '',
    output: ''
  };
  const createComponent = createComponentFactory({
    component: ConverterComponent,
    declarations: [KeyboardComponent, OutputComponent],
    imports: [
      StoreModule.forRoot({converter: userInputReducer}),
      EffectsModule.forRoot([ConverterEffects])
    ],
    providers: [
      FacadeService,
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
  });
  beforeEach(() => {
    spectator = createComponent();
  });
  it('Check for Keyboard', () => {
    expect(spectator.query('.grid-item')).toExist();
  });
  it('Check keyboard', () => {
    const elm = spectator.query('.grid-item') as HTMLElement;
    spectator.click(elm);
    spectator.detectChanges();
  });
});
