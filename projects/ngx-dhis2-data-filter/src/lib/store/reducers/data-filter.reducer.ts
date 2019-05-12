import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as _ from 'lodash';

import {
  DataFilterActions,
  DataFilterActionTypes
} from '../actions/data-filter.actions';

import {
  reducer as functionReducer,
  State as FunctionState
} from './function.reducer';

import {
  reducer as functionRuleReducer,
  State as FunctionRuleState
} from './function-rule.reducer';

import {
  reducer as indicatorGroupReducer,
  State as IndicatorGroupState
} from './indicator-group.reducer';

import {
  reducer as indicatorReducer,
  State as IndicatorState
} from './indicator.reducer';

export interface DataFilterConfig {
  activeDataFilterSelections: string[];
  currentDataFilterGroupId: string;
}

const initialConfig: DataFilterConfig = {
  activeDataFilterSelections: ['all'],
  currentDataFilterGroupId: 'all'
};

export function configReducer(
  state = initialConfig,
  action: DataFilterActions
): DataFilterConfig {
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
  filterConfig: DataFilterConfig;
  function: FunctionState;
  functionRule: FunctionRuleState;
  indicatorGroup: IndicatorGroupState;
  indicator: IndicatorState;
}

export const dataFilterReducer: ActionReducerMap<State> = {
  filterConfig: configReducer,
  function: functionReducer,
  functionRule: functionRuleReducer,
  indicatorGroup: indicatorGroupReducer,
  indicator: indicatorReducer
};

export const getDataFilterState = createFeatureSelector<State>('dataFilter');
