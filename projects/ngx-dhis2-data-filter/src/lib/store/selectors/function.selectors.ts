import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { FunctionObject } from '../../models/function.model';
import {
  getDataFilterState,
  State as DataFilterState
} from '../reducers/data-filter.reducer';
import { adapter, FunctionState } from '../reducers/function.reducer';
import {
  getFunctionRuleEntities,
  getActiveFunctionRuleId
} from './function-rule.selectors';
import { FunctionRule } from '../../models/function-rule.model';

export const getFunctionState = createSelector(
  getDataFilterState,
  (state: DataFilterState) => state.function
);

export const {
  selectEntities: getFunctionEntities,
  selectAll: getAllFunctions
} = adapter.getSelectors(getFunctionState);

export const getFunctionInitiatedStatus = createSelector(
  getFunctionState,
  (functionState: FunctionState) => functionState.loadInitiated
);

export const getFunctionLoadingStatus = createSelector(
  getFunctionState,
  (functionState: FunctionState) => functionState.loading
);

export const getFunctionLoadedStatus = createSelector(
  getFunctionState,
  (functionState: FunctionState) => functionState.loaded
);

export const getActiveFunctionId = createSelector(
  getFunctionState,
  (functionState: FunctionState) => functionState.activeFunctionId
);
export const getActiveFunction = createSelector(
  getFunctionEntities,
  getActiveFunctionId,
  (functionEntities: any, activeFunctionId: string) =>
    functionEntities[activeFunctionId]
);

export const getFunctions = (
  onlyRuleIds: boolean = false,
  ruleKeyName?: string
) =>
  createSelector(
    getAllFunctions,
    getFunctionRuleEntities,
    getActiveFunctionId,
    (
      functionList: FunctionObject[],
      functionRuleEntities: any,
      activeFunctionId: string
    ) =>
      _.map(functionList, (functionObject: FunctionObject) => {
        return functionObject
          ? {
              id: functionObject.id,
              name: functionObject.name,
              active: functionObject.id === activeFunctionId,
              [ruleKeyName || 'items']: onlyRuleIds
                ? functionObject.rules
                : _.filter(
                    _.map(functionObject.rules || [], ruleId => {
                      const functionRule = functionRuleEntities[ruleId];
                      return functionRule
                        ? {
                            id: functionRule.id,
                            name: functionRule.name,
                            ruleDefinition: functionRule,
                            functionObject: {
                              id: functionObject.id,
                              functionString: functionObject.function
                            },
                            type: 'FUNCTION_RULE'
                          }
                        : null;
                    }),
                    functionRule => functionRule
                  )
            }
          : null;
      })
  );

export const getFunctionById = functionId =>
  createSelector(
    getFunctionEntities,
    getFunctionRuleEntities,
    (functionEntities: any, functionRuleEntities: any) => {
      const functionObject = functionEntities[functionId];
      return functionObject && functionRuleEntities
        ? {
            ...functionObject,
            rules: (functionObject.rules || []).map(
              (ruleId: string) => functionRuleEntities[ruleId]
            )
          }
        : null;
    }
  );

export const getSelectedFunctions = createSelector(
  getAllFunctions,
  getFunctionRuleEntities,
  getFunctionLoadedStatus,
  (
    functionList: FunctionObject[],
    functionRuleEntities: any,
    functionLoaded: boolean
  ) => {
    if (!functionLoaded) {
      return [];
    }

    return functionList.length > 0 && _.keys(functionRuleEntities).length > 0
      ? _.filter(
          _.map(
            _.filter(
              functionList,
              (functionObject: FunctionObject) => functionObject.selected
            ),
            (selectedFunction: FunctionObject) => {
              return selectedFunction
                ? {
                    ...selectedFunction,
                    rules: _.filter(
                      _.map(
                        selectedFunction.rules || [],
                        ruleId => functionRuleEntities[ruleId]
                      ),
                      functionRule => functionRule && functionRule.selected
                    )
                  }
                : null;
            }
          ),
          functionObject => functionObject
        )
      : [];
  }
);

export const getFunctionRulesForActiveFunction = createSelector(
  getFunctionRuleEntities,
  getActiveFunction,
  getActiveFunctionRuleId,
  (
    functionRuleEntities: any,
    activeFunction: FunctionObject,
    activeRuleId: string
  ) =>
    _.filter(
      _.map(activeFunction ? activeFunction.rules : [], (ruleId: string) => {
        const functionRule: FunctionRule = functionRuleEntities[ruleId];
        return functionRule
          ? {
              ...functionRule,
              active: functionRule.id === activeRuleId
            }
          : null;
      }),
      functionRule => functionRule !== null
    )
);
