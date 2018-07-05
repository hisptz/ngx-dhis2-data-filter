import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import {
  ProgramStageActionTypes,
  AddProgramStageAction,
  LoadProgramStageFailAction,
  toAction as _toAction
} from '../actions';
import { switchMap } from 'rxjs/operators';
import { ProgramStageService } from '../services';
const toAction = _toAction();

@Injectable()
export class ProgramStageEffects {
  constructor(private actions$: Actions, private programStageService: ProgramStageService) {}

  @Effect()
  loadAllPrograms$: Observable<Action> = this.actions$
    .ofType(ProgramStageActionTypes.LOAD_PROGRAM_STAGES)
    .pipe(
      switchMap(() => toAction(this.programStageService.getAll(), AddProgramStageAction, LoadProgramStageFailAction))
    );
}
