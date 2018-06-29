import { Action } from '@ngrx/store';
import { TrackedEntityAttribute } from '../../models/programs.model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AttributeActionTypes {
  ADD_ATTRIBUTES = '[TrackedEntityAttribute] Add attributes'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddAttributesAction implements Action {
  readonly type = AttributeActionTypes.ADD_ATTRIBUTES;
  constructor(public payload: { [id: number]: TrackedEntityAttribute }) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AttributeActions = AddAttributesAction;
