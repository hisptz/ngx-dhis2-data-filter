import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { DataElementService } from '../../services/data-element.service';
import { State } from '../reducers/data-element.reducer';
import {
  DataElementActionTypes,
  LoadDataElements,
  LoadDataElementsInitiated,
  AddDataElements,
  LoadDataElementsFail
} from '../actions/data-element.actions';
import { getDataElementsInitiatedStatus } from '../selectors/data-element.selectors';

@Injectable()
export class DataElementEffects {
  @Effect({ dispatch: false })
  loadDataElements$: Observable<any> = this.actions$.pipe(
    ofType(DataElementActionTypes.LoadDataElements),
    withLatestFrom(
      this.dataElementStore.select(getDataElementsInitiatedStatus)
    ),
    tap(([action, dataElementInitiated]: [LoadDataElements, boolean]) => {
      if (!dataElementInitiated) {
        this.dataElementStore.dispatch(new LoadDataElementsInitiated());
        this.dataElementService.loadAll().subscribe(
          (dataElements: any[]) => {
            this.dataElementStore.dispatch(new AddDataElements(dataElements));
          },
          (error: any) => {
            this.dataElementStore.dispatch(new LoadDataElementsFail(error));
          }
        );
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataElementService: DataElementService,
    private dataElementStore: Store<State>
  ) {}
}
