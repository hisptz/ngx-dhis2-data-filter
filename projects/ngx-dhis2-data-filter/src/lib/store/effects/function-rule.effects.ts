import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromFunctionRuleActions from '../actions/function-rule.actions';
import { addFunctions } from '../actions/function.actions';

@Injectable()
export class FunctionRuleEffects {
  @Effect()
  addFunctions$: Observable<any> = this.actions$.pipe(
    ofType(addFunctions),
    map(
      ({ functionRules }) =>
        new fromFunctionRuleActions.AddFunctionRules(functionRules)
    )
  );
  constructor(private actions$: Actions) {}
}
