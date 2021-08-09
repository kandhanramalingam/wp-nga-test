import { Spectator, createComponentFactory } from '@ngneat/spectator';
import {ConverterComponent} from './converter.component';

describe('Converter Component', () => {
  let spectator: Spectator<ConverterComponent>;
  const createComponent = createComponentFactory(ConverterComponent);
  beforeEach(() => spectator = createComponent());
  it('should Do nothing', () => {
    pending();
  });
});
