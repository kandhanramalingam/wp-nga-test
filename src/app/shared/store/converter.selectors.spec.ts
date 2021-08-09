import * as converterSelectors from './converter.selectors';

describe('Converter Selector', () => {
  const state = {
    input: '0#1',
    output: 'AB'
  };
  it('should select Input', () => {
    const selectedInput = converterSelectors.selectUserInput.projector(state);
    expect(selectedInput).toEqual('0#1');
  });
  it('should select Output', () => {
    const selectedInput = converterSelectors.selectConvertedOutput.projector(state);
    expect(selectedInput).toEqual('AB');
  });
});
