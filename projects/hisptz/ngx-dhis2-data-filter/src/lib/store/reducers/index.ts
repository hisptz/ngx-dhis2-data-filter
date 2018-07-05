import { ActionReducerMap, createSelector } from '@ngrx/store';
import { reducer as programReducer, ProgramState } from './program.reducers';
import { reducer as dataElementReducer, DataElementState } from './dataElement.reducers';
import { reducer as programStageReducer, ProgramStageState } from './program-stage.reducers';

import { MemoizedSelector } from '@ngrx/store/src/selector';

export interface DataFilterState {
  programs: ProgramState;
  dataElements: DataElementState;
  programStages: ProgramStageState;
}

export const reducers: ActionReducerMap<DataFilterState> = {
  programs: programReducer,
  dataElements: dataElementReducer,
  programStages: programStageReducer
};

export const getRootState = (state: DataFilterState) => state;
export const getProgramState: MemoizedSelector<any, any> = createSelector(
  getRootState,
  (state: DataFilterState) => state.programs
);

export const getProgramStageState: MemoizedSelector<any, any> = createSelector(
  getRootState,
  (state: DataFilterState) => state.programStages
);

export const getDataElemetState: MemoizedSelector<any, any> = createSelector(
  getRootState,
  (state: DataFilterState) => state.dataElements
);
