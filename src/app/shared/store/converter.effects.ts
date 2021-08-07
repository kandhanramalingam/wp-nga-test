import {Injectable} from '@angular/core';
import {ConverterService} from '../services/converter.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as converterActions from './converter.actions';
import {map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from './index';
import * as converterSeletors from './converter.selectors';


@Injectable()
export class ConverterEffects {
  convEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(converterActions.addUserInput, converterActions.removeUserInput),
      withLatestFrom(this.store.select(converterSeletors.selectUserInput)),
      mergeMap(([action, input]) => {
        if (action.type === converterActions.addUserInput.type) {
          console.log(`You Typed ${action.data}`);
        }
        return this.converterService.convertUserInput(input).pipe(
          map(data => {
            return converterActions.outputUserInput({data});
          })
        );
      }),
    );
  });
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private converterService: ConverterService
  ) {}
}
