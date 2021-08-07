import {createAction, props} from '@ngrx/store';

export const addUserInput = createAction(
  '[Converter] add Input',
    props<{data: string}>()
);
export const removeUserInput = createAction(
  '[Converter] remove Input'
);
export const outputUserInput = createAction(
  '[Converter] Output',
  props<{data: string}>()
);



