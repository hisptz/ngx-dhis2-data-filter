import { createSelector } from '@ngrx/store';
import {
  getDataFilterState,
  State as DataFilterState
} from '../reducers/data-filter.reducer';
import { adapter, State } from '../reducers/indicator.reducer';

export const getIndicatorState = createSelector(
  getDataFilterState,
  (state: DataFilterState) => state.indicator
);

export const {
  selectEntities: getIndicatorEntities,
  selectAll: getIndicators
} = adapter.getSelectors(getIndicatorState);

export const getIndicatorsInitiatedStatus = createSelector(
  getIndicatorState,
  (state: State) => state.loadInitiated
);

export const getIndicatorsLoadingStatus = createSelector(
  getIndicatorState,
  (state: State) => state.loading
);
