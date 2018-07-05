import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DataFilterActionTypes, LoadAllPrograms, LoadDataElements, LoadProgramStageAction } from '../actions';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class DataFilterEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  loadEventDataValuesMetadata$: Observable<Action> = this.actions$
    .ofType(DataFilterActionTypes.EVENT_DATA_VALUE)
    .pipe(switchMap(() => [new LoadAllPrograms(), new LoadDataElements(), new LoadProgramStageAction()]));
}
