import { TestBed } from '@angular/core/testing';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterService);
  });

  it('Tesing Convertion Method', () => {
    service.convertUserInput('1').subscribe(
      response => {
        expect(response).toBe('B', 'Invalid Output');
      }
    );
  });
});
