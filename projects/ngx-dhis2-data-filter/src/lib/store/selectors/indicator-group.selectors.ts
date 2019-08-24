import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { IndicatorGroup } from '../../models/indicator-group.model';
import { Indicator } from '../../models/indicator.model';
import {
  getDataFilterState,
  State as DataFilterState
} from '../reducers/data-filter.reducer';
import {
  adapter,
  IndicatorGroupState
} from '../reducers/indicator-group.reducer';
import { getIndicatorEntities } from './indicator.selectors';

const getIndicatorGroupState = createSelector(
  getDataFilterState,
  (state: DataFilterState) => state.indicatorGroup
);

export const { selectAll: getAllIndicatorGroups } = adapter.getSelectors(
  getIndicatorGroupState
);

export const getIndicatorGroupsInitiatedStatus = createSelector(
  getIndicatorGroupState,
  (state: IndicatorGroupState) => state.loadInitiated
);

export const getIndicatorGroupsLoadingStatus = createSelector(
  getIndicatorGroupState,
  (state: IndicatorGroupState) => state.loading
);

export const getIndicatorGroups = createSelector(
  getAllIndicatorGroups,
  getIndicatorEntities,
  (
    indicatorGroups: IndicatorGroup[],
    indicatorEntities: { [id: string]: Indicator }
  ) => {
    return _.map(indicatorGroups, (indicatorGroup: IndicatorGroup) => {
      return {
        id: indicatorGroup.id,
        name: indicatorGroup.name,
        items: _.filter(
          _.map(
            indicatorGroup.indicators || [],
            (indicatorId: string) => indicatorEntities[indicatorId]
          ),
          indicator => indicator
        )
      };
    });
  }
);
