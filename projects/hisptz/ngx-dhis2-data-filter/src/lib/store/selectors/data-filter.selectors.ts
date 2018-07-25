import { createSelector } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { getDataFilterState } from '../reducers';
import { selectSelectedGroup, selectSelectedItems } from '../reducers/data-filter.reducers';

export const getSelectedGroup: MemoizedSelector<any, any> = createSelector(getDataFilterState, selectSelectedGroup);
export const getSelectedItems: MemoizedSelector<any, any> = createSelector(getDataFilterState, selectSelectedItems);
