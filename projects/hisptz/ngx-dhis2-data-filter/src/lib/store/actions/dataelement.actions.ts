import { Action } from '@ngrx/store';
import { DataElement } from '../../models/programs.model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum DataElementActionTypes {
  ADD_DATAELEMENTS = '[Dataelements] Add DataElements'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddDataElements implements Action {
  readonly type = DataElementActionTypes.ADD_DATAELEMENTS;

  constructor(public payload: { [id: string]: DataElement }) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DataElementActions = AddDataElements;
