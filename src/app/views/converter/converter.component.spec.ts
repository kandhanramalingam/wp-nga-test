import {Spectator, createComponentFactory, mockProvider, byText} from '@ngneat/spectator';
import {ConverterComponent} from './converter.component';
import {Store, StoreModule} from '@ngrx/store';
import {KeyboardComponent} from '../../components/keyboard/keyboard.component';
import {OutputComponent} from '../../components/output/output.component';
import {userInputReducer} from '../../shared/store/converter.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ConverterEffects} from '../../shared/store/converter.effects';
import {FacadeService} from '../../shared/services/facade.service';

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
    ]
  });
  beforeEach(() => {
    spectator = createComponent();
  });
  it('Check for Keyboard', () => {
    expect(spectator.query('.grid-item')).toExist();
  });
  it('Check output contains Specific Character', () => {
    const keys = spectator.queryAll('.grid-item') as HTMLElement[];
    const sepratorIndex = 9;
    const removeIndex = 11;
    keys.forEach((key, index) => {
      if (index === sepratorIndex || index === removeIndex) {
        return;
      }
      spectator.click(key);
      spectator.click(keys[sepratorIndex]);
    });
    const textBox = spectator.queryAll('.txt-box');
    expect(textBox[0]).toHaveText('1#2#3#4#5#6#7#8#9#0#');
    expect(textBox[1]).toHaveText('BCDEFGHIJA');
    spectator.click(keys[11]);
    spectator.click(keys[11]);
    expect(textBox[0]).toHaveText('1#2#3#4#5#6#7#8#9#');
    expect(textBox[1]).toHaveText('BCDEFGHIJ');
  });
});
