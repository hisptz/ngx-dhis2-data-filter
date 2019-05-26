import * as _ from 'lodash';
import { FunctionObject } from '../models/function.model';
import { FunctionRule } from '../models/function-rule.model';

export function getInitialFunctionStructure(
  functionObject: FunctionObject,
  contextPath: string
) {
  const date = new Date();
  return {
    ...functionObject,
    lastUpdated: date.toUTCString(),
    displayName: functionObject.name,
    href: contextPath + '?api/dataStore/functions/' + functionObject.id,
    rules: (functionObject.rules || []).map((rule: FunctionRule) =>
      _.omit(rule, ['selected', 'active', 'simulating'])
    )
  };
}
