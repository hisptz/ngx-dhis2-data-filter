import { Component, Input } from '@angular/core';
import {
  LoadEventDataValues,
  DataFilterState,
  getAllPrograms,
  getAllProgramStages,
  getDataValueIsLoaded
} from '../store';
import { Observable } from 'rxjs';
import { ProgramStage, Program } from '../models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'hisptz-ngx-dhis2-data-filter',
  templateUrl: './ngx-dhis2-data-filter.component.html',
  styles: []
})
export class NgxDhis2DataFilterComponent {
  @Input() dataFilterOptions: any = [];
  public programStages$: Observable<ProgramStage[]>;
  public isDataValueLoaded$: Observable<boolean>;
  public programs$: Observable<Program[]>;

  constructor(private store: Store<DataFilterState>) {
    this.store.dispatch(new LoadEventDataValues());
    this.programs$ = this.store.select(getAllPrograms);
    this.programStages$ = this.store.select(getAllProgramStages);
    this.isDataValueLoaded$ = this.store.select(getDataValueIsLoaded);
  }
}
