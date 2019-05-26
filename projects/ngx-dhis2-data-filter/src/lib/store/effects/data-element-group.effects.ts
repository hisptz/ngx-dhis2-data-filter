import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';
import { DataElementGroupService } from '../../services/data-element-group.service';
import {
  AddDataElementGroups,
  DataElementGroupActionTypes,
  LoadDataElementGroups,
  LoadDataElementGroupsFail,
  LoadDataElementGroupsInitiated
} from '../actions/data-element-group.actions';
import { State } from '../reducers/data-element-group.reducer';
import { getDataElementGroupsInitiatedStatus } from '../selectors/data-element-group.selectors';

@Injectable()
export class DataElementGroupEffects {
  @Effect({ dispatch: false })
  loadDataElementGroups$: Observable<any> = this.actions$.pipe(
    ofType(DataElementGroupActionTypes.LoadDataElementGroups),
    withLatestFrom(
      this.dataElementGroupStore.select(getDataElementGroupsInitiatedStatus)
    ),
    tap(
      ([action, dataElementGroupInitiated]: [
        LoadDataElementGroups,
        boolean
      ]) => {
        if (!dataElementGroupInitiated) {
          this.dataElementGroupStore.dispatch(
            new LoadDataElementGroupsInitiated()
          );
          this.dataElementGroupService.loadAll().subscribe(
            (dataElementGroups: any[]) => {
              this.dataElementGroupStore.dispatch(
                new AddDataElementGroups(dataElementGroups)
              );
            },
            (error: any) => {
              this.dataElementGroupStore.dispatch(
                new LoadDataElementGroupsFail(error)
              );
            }
          );
        }
      }
    )
  );

  constructor(
    private actions$: Actions,
    private dataElementGroupService: DataElementGroupService,
    private dataElementGroupStore: Store<State>
  ) {}
}
