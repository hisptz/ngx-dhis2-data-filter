import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { loadDataElementGroups } from '../actions/data-element-group.actions';
import { loadDataElements } from '../actions/data-element.actions';
import {
  DataFilterActionTypes,
  LoadDataFilters
} from '../actions/data-filter.actions';
import { loadFunctions } from '../actions/function.actions';
import { loadIndicatorGroups } from '../actions/indicator-group.actions';
import { loadIndicators } from '../actions/indicator.actions';

@Injectable()
export class DataFilterEffects {
  @Effect()
  loadDataFilters$: Observable<any> = this.actions$.pipe(
    ofType(DataFilterActionTypes.LoadDataFilters),
    switchMap(({ currentUser }: LoadDataFilters) => [
      loadFunctions({ currentUser }),
      loadIndicatorGroups(),
      loadIndicators(),
      loadDataElementGroups(),
      loadDataElements()
    ])
  );
  constructor(private actions$: Actions) {}
}
