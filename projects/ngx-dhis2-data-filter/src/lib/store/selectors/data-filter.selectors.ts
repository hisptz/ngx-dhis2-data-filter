import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { DataFilterSelection } from '../../models/data-filter-selection.model';
import {
  DataFilterState,
  getDataFilterState
} from '../reducers/data-filter.reducer';
import { getFunctionLoadingStatus } from './function.selectors';
import { getIndicatorGroupsLoadingStatus } from './indicator-group.selectors';
import { getIndicatorsLoadingStatus } from './indicator.selectors';
import { DataFilterConfigState } from '../reducers/data-filter-config.reducer';

const getDataFilterConfig = createSelector(
  getDataFilterState,
  (state: DataFilterState) => state.filterConfig
);

const getActiveDataFilterSelections = createSelector(
  getDataFilterConfig,
  (state: DataFilterConfigState) => state.activeDataFilterSelections
);

const getCurrentDataFilterGroupId = createSelector(
  getDataFilterConfig,
  (state: DataFilterConfigState) => state.currentDataFilterGroupId
);

const getDataFilterGroupEntities = (
  dataFilterSelections: DataFilterSelection[]
) =>
  createSelector(
    getDataFilterState,
    (dataFilterState: DataFilterState) => {
      const dataFilterGroupEntities = {};
      dataFilterSelections.forEach(
        (dataFilterSelection: DataFilterSelection) => {
          const dataSelection = dataFilterState[dataFilterSelection.key];
          if (dataSelection) {
            dataFilterGroupEntities[dataFilterSelection.prefix] = (
              dataSelection.ids || []
            ).map((id: string) => {
              const dataSelectionEntity = dataSelection.entities[id];
              return {
                ..._.omit(
                  dataSelectionEntity,
                  dataFilterSelection.itemsReference
                    ? dataFilterSelection.itemsReference.key
                    : ''
                ),
                items: (
                  dataSelectionEntity[
                    dataFilterSelection.itemsReference
                      ? dataFilterSelection.itemsReference.key
                      : ''
                  ] || []
                )
                  .map((itemId: string) => {
                    const itemState =
                      dataFilterState[
                        dataFilterSelection.itemsReference
                          ? dataFilterSelection.itemsReference.reference
                          : ''
                      ];
                    if (!itemState) {
                      return null;
                    }

                    return (itemState.entities || {})[itemId];
                  })
                  .filter(item => item)
              };
            });
          }
        }
      );

      return dataFilterGroupEntities;
    }
  );

const getDataFilterGroupsWithItems = (
  dataFilterSelections: DataFilterSelection[]
) =>
  createSelector(
    getActiveDataFilterSelections,
    getDataFilterGroupEntities(dataFilterSelections),
    (activeDataFilterSelections: string[], dataFilterGroupEntities: any) => {
      const selectionKeys =
        activeDataFilterSelections[0] === 'all'
          ? _.keys(dataFilterGroupEntities)
          : activeDataFilterSelections;

      return _.flatten(
        _.map(
          selectionKeys,
          (selectionKey: string) => dataFilterGroupEntities[selectionKey]
        )
      );
    }
  );

export const getDataFilterLoadingStatus = createSelector(
  getFunctionLoadingStatus,
  getIndicatorGroupsLoadingStatus,
  getIndicatorsLoadingStatus,
  (
    functionLoading: boolean,
    indicatorGroupsLoading: boolean,
    indicatorsLoading: boolean
  ) => functionLoading && indicatorGroupsLoading && indicatorsLoading
);

export const getDataFilterGroups = (
  dataFilterSelections: DataFilterSelection[]
) =>
  createSelector(
    getDataFilterGroupsWithItems(dataFilterSelections),
    getCurrentDataFilterGroupId,
    (dataFilterGroupWithItems: any[], currentDataFilterGroupId: string) => {
      return [
        {
          id: 'all',
          name: '[ All ]',
          selected: currentDataFilterGroupId === 'all'
        },
        ..._.sortBy(
          _.map(dataFilterGroupWithItems, (dataFilterGroup: any) =>
            _.omit(
              {
                ...dataFilterGroup,
                selected: dataFilterGroup.id === currentDataFilterGroupId
              },
              ['items']
            )
          ),
          'name'
        )
      ];
    }
  );

export const getCurrentDataFilterGroup = (
  dataFilterSelections: DataFilterSelection[]
) =>
  createSelector(
    getDataFilterGroups(dataFilterSelections),
    getCurrentDataFilterGroupId,
    (dataFilterGroups: any[], currentDataFilterGroupId: string) =>
      _.find(dataFilterGroups, ['id', currentDataFilterGroupId]) ||
      _.find(dataFilterGroups, ['id', 'all'])
  );

export const getDataFilterItems = (
  dataFilterSelections: DataFilterSelection[]
) =>
  createSelector(
    getDataFilterGroupsWithItems(dataFilterSelections),
    getCurrentDataFilterGroup(dataFilterSelections),
    (dataFilterGroups: any[], currentDataFilterGroup: any) => {
      if (!currentDataFilterGroup) {
        return [];
      }

      if (currentDataFilterGroup.id === 'all') {
        return _.sortBy(
          _.uniqBy(
            _.flatten(
              _.map(
                dataFilterGroups,
                (dataFilterGroup: any) => dataFilterGroup.items
              )
            ),
            'id'
          ),
          'name'
        );
      }

      return _.sortBy(
        _.uniqBy(
          _.flatten(
            _.map(
              _.filter(
                dataFilterGroups,
                (dataFilterGroup: any) =>
                  dataFilterGroup.id === currentDataFilterGroup.id
              ),
              (dataFilterGroup: any) => dataFilterGroup.items
            )
          ),
          'id'
        ),
        'name'
      );
    }
  );
