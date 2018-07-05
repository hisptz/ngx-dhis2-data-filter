import { createSelector } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { getProgramStageState } from '../reducers';
import {
  selectProgramStageEntities,
  selectProgramStageLoaded,
  selectProgramStageLoading
} from '../reducers/program-stage.reducers';

export const getAllProgramStageEntities: MemoizedSelector<any, any> = createSelector(
  getProgramStageState,
  selectProgramStageEntities
);
export const getProgramStageLoading: MemoizedSelector<any, any> = createSelector(
  getProgramStageState,
  selectProgramStageLoading
);
export const getProgramStageLoaded: MemoizedSelector<any, any> = createSelector(
  getProgramStageState,
  selectProgramStageLoaded
);

export const getAllProgramStages: MemoizedSelector<any, any> = createSelector(getAllProgramStageEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});
