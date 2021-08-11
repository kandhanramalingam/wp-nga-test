import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {FacadeService} from './facade.service';
import {ConverterService} from './converter.service';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';

describe('FacadeSerive', () => {
  let spectator: SpectatorService<FacadeService>;
  const createService = createServiceFactory({
    service: FacadeService,
    mocks: [ConverterService, Store]
  });

  beforeEach(() => spectator = createService());

  it('Test transfered User Input', () => {
    const converterService = spectator.inject(ConverterService);
    converterService.convertUserInput.and.returnValue(of('A'));
    spectator.service.convertUserInput('1').subscribe(converted => {
      expect(converted).toEqual('A');
    });
  });
});
