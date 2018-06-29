import { Action } from '@ngrx/store';
import { ProgramStage } from '../../models/programs.model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ProgramStageTypes {
  ADD_PROGRAM_STAGES = '[ProgramStage] Add program Stages'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */

export class AddProgramStageAction implements Action {
  readonly type = ProgramStageTypes.ADD_PROGRAM_STAGES;

  constructor(public payload: { [id: string]: ProgramStage }) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ProgramStageActions = AddProgramStageAction;
