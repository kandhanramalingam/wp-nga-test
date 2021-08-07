import {createFeatureSelector, createSelector} from '@ngrx/store';
import {converterKey, State} from './converter.reducer';

export const selectUserInputFeature = createFeatureSelector<State>(
  converterKey
);
export const selectUserInput = createSelector(
  selectUserInputFeature,
  (state: State) => state.input
);
export const selectConvertedOutput = createSelector(
  selectUserInputFeature,
  (state: State) => state.output
);
