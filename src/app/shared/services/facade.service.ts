import {Injectable, Injector} from '@angular/core';
import {ConverterService} from './converter.service';
import {Observable} from 'rxjs';

@Injectable()
export class FacadeService {
  private _converterService: ConverterService;
  get converterService(): ConverterService {
    if (!this._converterService) {
      this._converterService = this.injector.get(ConverterService);
    }
    return this._converterService;
  }
  constructor(private injector: Injector) {}

  convertUserInput(input: string): Observable<string> {
    return this.converterService.convertUserInput(input);
  }
}
