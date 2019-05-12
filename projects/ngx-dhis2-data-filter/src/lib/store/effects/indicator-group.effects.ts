import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';

import { getStandardizedIndicatorGroups } from '../../helpers/get-standardized-indicator-groups.helper';
import { IndicatorGroupService } from '../../services/indicator-group.service';
import {
  AddIndicatorGroups,
  IndicatorGroupActionTypes,
  LoadIndicatorGroups,
  LoadIndicatorGroupsFail,
  LoadIndicatorGroupsInitiated
} from '../actions/indicator-group.actions';
import { State } from '../reducers/indicator-group.reducer';
import * as fromIndicatorGroupSelectors from '../selectors/indicator-group.selectors';

@Injectable()
export class IndicatorGroupEffects {
  @Effect({ dispatch: false })
  loadIndicatorGroups$: Observable<any> = this.actions$.pipe(
    ofType(IndicatorGroupActionTypes.LoadIndicatorGroups),
    withLatestFrom(
      this.indicatorGroupStore.select(
        fromIndicatorGroupSelectors.getIndicatorGroupsInitiatedStatus
      )
    ),
    tap(([action, indicatorGroupInitiated]: [LoadIndicatorGroups, boolean]) => {
      if (!indicatorGroupInitiated) {
        this.indicatorGroupStore.dispatch(new LoadIndicatorGroupsInitiated());
        this.indicatorGroupService.loadAll().subscribe(
          (indicatorGroups: any[]) => {
            this.indicatorGroupStore.dispatch(
              new AddIndicatorGroups(
                getStandardizedIndicatorGroups(indicatorGroups)
              )
            );
          },
          (error: any) => {
            this.indicatorGroupStore.dispatch(
              new LoadIndicatorGroupsFail(error)
            );
          }
        );
      }
    })
  );

  constructor(
    private actions$: Actions,
    private indicatorGroupService: IndicatorGroupService,
    private indicatorGroupStore: Store<State>
  ) {}
}
