import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {OutputComponent} from './output.component';
import {of} from 'rxjs';

describe('OutputComponent', () => {
  let spectator: Spectator<OutputComponent>;
  const createComponent = createComponentFactory(OutputComponent);
  beforeEach(() => {
    spectator = createComponent();
  });
  it('Check for Received Input from User', () => {
    spectator.setInput('inputValue', of('1'));
    expect(spectator.query('.txt-box')).toHaveText('1');
  });
  it('Check for Received Output', () => {
    spectator.setInput('outputValue', of('B'));
    expect(spectator.queryAll('.txt-box')[1]).toHaveText('B');
  });
});
