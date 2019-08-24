import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as _ from 'lodash';

import {
  DataFilterActions,
  DataFilterActionTypes
} from '../actions/data-filter.actions';

import { functionReducer, FunctionState } from './function.reducer';

import {
  reducer as functionRuleReducer,
  State as FunctionRuleState
} from './function-rule.reducer';

import {
  indicatorGroupReducer,
  IndicatorGroupState
} from './indicator-group.reducer';

import { indicatorReducer, IndicatorState } from './indicator.reducer';

import {
  dataElementGroupReducer,
  DataElementGroupState
} from './data-element-group.reducer';

import { dataElementReducer, DataElementState } from './data-element.reducer';

export interface DataFilterState {
  activeDataFilterSelections: string[];
  currentDataFilterGroupId: string;
}

const initialFilterState: DataFilterState = {
  activeDataFilterSelections: ['all'],
  currentDataFilterGroupId: 'all'
};

export function configReducer(
  state = initialFilterState,
  action: DataFilterActions
): DataFilterState {
  switch (action.type) {
    case DataFilterActionTypes.UpdateActiveDataFilterSelections: {
      return {
        ...state,
        activeDataFilterSelections: _.map(
          _.filter(
            action.dataFilterSelections,
            (dataSelection: any) => dataSelection.selected
          ),
          (dataSelection: any) => dataSelection.prefix
        )
      };
    }

    case DataFilterActionTypes.SetCurrentDataFilterGroup: {
      return { ...state, currentDataFilterGroupId: action.dataFilterGroupId };
    }

    default:
      return state;
  }
}

export interface State {
  filterConfig: DataFilterState;
  function: FunctionState;
  functionRule: FunctionRuleState;
  indicatorGroup: IndicatorGroupState;
  indicator: IndicatorState;
  dataElementGroup: DataElementGroupState;
  dataElement: DataElementState;
}

export const dataFilterReducer: ActionReducerMap<State> = {
  filterConfig: configReducer,
  function: functionReducer,
  functionRule: functionRuleReducer,
  indicatorGroup: indicatorGroupReducer,
  indicator: indicatorReducer,
  dataElementGroup: dataElementGroupReducer,
  dataElement: dataElementReducer
};

export const getDataFilterState = createFeatureSelector<State>('dataFilter');
