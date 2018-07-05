import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ProgramActionTypes, LoadProgramSuccess, LoadProgramFail, toAction as _toAction } from '../actions';
import { switchMap } from 'rxjs/operators';
import { ProgramService } from '../services/program.service';
const toAction = _toAction();

@Injectable()
export class ProgramEffects {
  constructor(private actions$: Actions, private programService: ProgramService) {}

  @Effect()
  loadAllPrograms$: Observable<Action> = this.actions$
    .ofType(ProgramActionTypes.LOAD_PROGRAMS)
    .pipe(switchMap(() => toAction(this.programService.getAll(), LoadProgramSuccess, LoadProgramFail)));
}
