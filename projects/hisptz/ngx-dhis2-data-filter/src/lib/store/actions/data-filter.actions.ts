import { Action } from '@ngrx/store';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */

export enum DataFilterActionTypes {
  EVENT_DATA_VALUE = '[DataFilters] Load Event datavalues',
  LOADED_GROUP = '[DataFilters] Load group successfully',
  SELECT_GROUP = '[DataFilters] Select group',
  SELECT_DATAITEMS = '[DataFilters] Select Data Items'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadEventDataValues implements Action {
  readonly type = DataFilterActionTypes.EVENT_DATA_VALUE;
}

export class SelectDataFilterGroup implements Action {
  readonly type = DataFilterActionTypes.SELECT_GROUP;
  constructor(public group: any) {}
}

export class SelectDataFilterItems implements Action {
  readonly type = DataFilterActionTypes.SELECT_DATAITEMS;
  constructor(public dataItems: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DataFilterActions = LoadEventDataValues | SelectDataFilterGroup | SelectDataFilterItems;
