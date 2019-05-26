import { createSelector } from '@ngrx/store';
import {
  getDataFilterState,
  State as DataFilterState
} from '../reducers/data-filter.reducer';
import { adapter, State } from '../reducers/data-element.reducer';

export const getDataElementState = createSelector(
  getDataFilterState,
  (state: DataFilterState) => state.dataElement
);

export const {
  selectEntities: getDataElementEntities,
  selectAll: getDataElements
} = adapter.getSelectors(getDataElementState);

export const getDataElementsInitiatedStatus = createSelector(
  getDataElementState,
  (state: State) => state.loadInitiated
);

export const getDataElementsLoadingStatus = createSelector(
  getDataElementState,
  (state: State) => state.loading
);
