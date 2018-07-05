import { createSelector } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { getDataElemetState } from '../reducers';
import {
  selectDataElementEntities,
  selectDataElementLoaded,
  selectDataElementLoading
} from '../reducers/dataElement.reducers';

export const getAllDataElementEntities: MemoizedSelector<any, any> = createSelector(
  getDataElemetState,
  selectDataElementEntities
);
export const getDataElementLoading: MemoizedSelector<any, any> = createSelector(
  getDataElemetState,
  selectDataElementLoading
);
export const getDataElementLoaded: MemoizedSelector<any, any> = createSelector(
  getDataElemetState,
  selectDataElementLoaded
);

export const getAllDataElements: MemoizedSelector<any, any> = createSelector(getAllDataElementEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});
