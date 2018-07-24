import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { reducer as programReducer, ProgramState } from './program.reducers';
import { reducer as dataElementReducer, DataElementState } from './dataElement.reducers';
import { reducer as programStageReducer, ProgramStageState } from './program-stage.reducers';
import { reducer as dataFilterReducer, DataFilterState as DataFilterReducerState } from './data-filter.reducers';

import { MemoizedSelector } from '@ngrx/store/src/selector';

export interface DataFilterState {
  programs: ProgramState;
  dataFilter: DataFilterReducerState;
  dataElements: DataElementState;
  programStages: ProgramStageState;
}

export const reducers: ActionReducerMap<DataFilterState> = {
  programs: programReducer,
  dataFilter: dataFilterReducer,
  dataElements: dataElementReducer,
  programStages: programStageReducer
};

export const getRootState = createFeatureSelector<DataFilterState>('data-filter');

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

export const getDataFilterState: MemoizedSelector<any, any> = createSelector(
  getRootState,
  (state: DataFilterState) => state.dataFilter
);
