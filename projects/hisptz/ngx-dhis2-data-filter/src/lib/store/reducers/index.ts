import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { reducer as programReducer, ProgramState } from './program.reducers';

import { MemoizedSelector } from '@ngrx/store/src/selector';

export interface DataFilterState {
  programs: ProgramState;
}

export const reducers: ActionReducerMap<DataFilterState> = {
  programs: programReducer
};

export const getRootState = (state: DataFilterState) => state;
export const getProgramState: MemoizedSelector<any, any> = createSelector(
  getRootState,
  (state: DataFilterState) => state.programs
);
