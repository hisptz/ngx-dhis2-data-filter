import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { LoadFunctions } from '../actions/function.actions';
import { LoadIndicatorGroups } from '../actions/indicator-group.actions';
import { LoadIndicators } from '../actions/indicator.actions';
import {
  DataFilterActionTypes,
  LoadDataFilters
} from '../actions/data-filter.actions';
import { LoadDataElementGroups } from '../actions/data-element-group.actions';
import { LoadDataElements } from '../actions/data-element.actions';

@Injectable()
export class DataFilterEffects {
  @Effect()
  loadDataFilters$: Observable<any> = this.actions$.pipe(
    ofType(DataFilterActionTypes.LoadDataFilters),
    switchMap((action: LoadDataFilters) => [
      new LoadFunctions(action.currentUser),
      new LoadIndicatorGroups(),
      new LoadIndicators(),
      new LoadDataElementGroups(),
      new LoadDataElements()
    ])
  );
  constructor(private actions$: Actions) {}
}
