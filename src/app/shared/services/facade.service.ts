import {Injectable, Injector} from '@angular/core';
import {ConverterService} from './converter.service';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store';
import * as converterSeletors from '../store/converter.selectors';
import * as converterActions from '../store/converter.actions';

@Injectable()
export class FacadeService {
  private _converterService: ConverterService;
  userInput$: Observable<string>;
  transferedOutput$: Observable<string>;
  get converterService(): ConverterService {
    if (!this._converterService) {
      this._converterService = this.injector.get(ConverterService);
    }
    return this._converterService;
  }
  constructor(private injector: Injector, private store: Store<AppState>) {
    this.userInput$ = this.store.pipe(select(converterSeletors.selectUserInput));
    this.transferedOutput$ = this.store.pipe(select(converterSeletors.selectConvertedOutput));
  }

  convertUserInput(input: string): Observable<string> {
    return this.converterService.convertUserInput(input);
  }
  addInput(key): void {
    this.store.dispatch(converterActions.addUserInput({data: key}));
  }
  removeInput(): void {
    this.store.dispatch(converterActions.removeUserInput());
  }
}
