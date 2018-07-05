import { Action } from '@ngrx/store';
import { DataElement } from '../../models/programs.model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum DataElementActionTypes {
  LOAD_DATAELEMENTS = '[Dataelements] Load all DataElements',
  ADD_DATAELEMENTS = '[Dataelements] Add DataElements',
  LOAD_DATAELEMENTS_FAIL = '[Dataelements] Load all DataElements Fail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddDataElements implements Action {
  readonly type = DataElementActionTypes.ADD_DATAELEMENTS;

  constructor(public payload: { [id: string]: DataElement[] }) {}
}

export class LoadDataElements implements Action {
  readonly type = DataElementActionTypes.LOAD_DATAELEMENTS;
}

export class LoadDataElementsFail implements Action {
  readonly type = DataElementActionTypes.LOAD_DATAELEMENTS_FAIL;

  constructor(public error: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DataElementActions = AddDataElements | LoadDataElements | LoadDataElementsFail;
