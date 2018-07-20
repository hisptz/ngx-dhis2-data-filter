import { createSelector } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { getProgramStageLoaded } from './program-stage.selectors';
import { getProgramLoaded } from './program.selectors';

export const getDataValueIsLoaded: MemoizedSelector<any, any> = createSelector(
  getProgramStageLoaded,
  getProgramLoaded,
  (prStageLoaded: boolean, prLoaded: boolean) => prStageLoaded && prLoaded
);
