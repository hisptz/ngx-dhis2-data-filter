import { Action } from '@ngrx/store';
import { Program } from '../../models/programs.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ProgramActionTypes {
  LOAD_PROGRAMS = '[Programs] Load all programs',
  LOAD_PROGRAMS_SUCCESS = '[Programs] Load all programs Success',
  LOAD_PROGRAMS_FAIL = '[Programs] Load all programs Fail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadPrograms implements Action {
  readonly type = ProgramActionTypes.LOAD_PROGRAMS;
}

export class LoadProgramSuccess implements Action {
  readonly type = ProgramActionTypes.LOAD_PROGRAMS_SUCCESS;

  constructor(public payload: { [id: string]: Program }) {}
}

export class LoadProgramFail implements Action {
  readonly type = ProgramActionTypes.LOAD_PROGRAMS_FAIL;

  constructor(public error: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ProgramActions = LoadPrograms | LoadProgramSuccess | LoadProgramFail;
