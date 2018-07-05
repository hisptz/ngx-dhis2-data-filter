import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DataElementActionTypes, AddDataElements, LoadDataElementsFail, toAction as _toAction } from '../actions';
import { switchMap } from 'rxjs/operators';
import { DataElementService } from '../services';
const toAction = _toAction();

@Injectable()
export class DataElementEffects {
  constructor(private actions$: Actions, private dataElementService: DataElementService) {}

  @Effect()
  loadAllPrograms$: Observable<Action> = this.actions$
    .ofType(DataElementActionTypes.LOAD_DATAELEMENTS)
    .pipe(switchMap(() => toAction(this.dataElementService.getAll(), AddDataElements, LoadDataElementsFail)));
}
