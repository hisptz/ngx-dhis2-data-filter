import { createSelector } from '@ngrx/store';

import {
  getDataFilterState,
  State as DataFilterState
} from '../reducers/data-filter.reducer';
import { adapter, State } from '../reducers/function-rule.reducer';

export const getFunctionRuleState = createSelector(
  getDataFilterState,
  (state: DataFilterState) => state.functionRule
);

export const {
  selectEntities: getFunctionRuleEntities,
  selectAll: getAllFunctionRules
} = adapter.getSelectors(getFunctionRuleState);

export const getActiveFunctionRuleId = createSelector(
  getFunctionRuleState,
  (functionRuleState: State) => functionRuleState.activeFunctionRuleId
);

export const getActiveFunctionRule = createSelector(
  getFunctionRuleEntities,
  getActiveFunctionRuleId,
  (functionRuleEntities: any, activeFunctionRuleId: string) =>
    functionRuleEntities[activeFunctionRuleId]
);

export const getFunctionRuleById = functionRuleId =>
  createSelector(
    getFunctionRuleEntities,
    (functionRuleEntities: any) => functionRuleEntities[functionRuleId]
  );
