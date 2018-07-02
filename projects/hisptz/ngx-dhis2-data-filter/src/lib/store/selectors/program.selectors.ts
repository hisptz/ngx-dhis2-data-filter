import { createSelector } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { getProgramState } from '../reducers';
import { selectProgramEntities, selectProgramLoaded, selectProgramLoading } from '../reducers/program.reducers';

export const getAllProgramEntities: MemoizedSelector<any, any> = createSelector(getProgramState, selectProgramEntities);
export const getProgramLoading: MemoizedSelector<any, any> = createSelector(getProgramState, selectProgramLoading);
export const getProgramLoaded: MemoizedSelector<any, any> = createSelector(getProgramState, selectProgramLoaded);

export const getAllPrograms: MemoizedSelector<any, any> = createSelector(getAllProgramEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});
