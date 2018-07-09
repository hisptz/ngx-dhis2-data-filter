import { Component, OnInit } from '@angular/core';
import {
  LoadEventDataValues,
  DataFilterState,
  getAllPrograms,
  getAllProgramStages,
  getProgramStageLoaded,
  getProgramLoaded
} from '../store';
import { Observable } from 'rxjs';
import { ProgramStage, Program } from '../models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'hisptz-ngx-dhis2-data-filter',
  templateUrl: './ngx-dhis2-data-filter.component.html',
  styles: []
})
export class NgxDhis2DataFilterComponent implements OnInit {
  public programStages$: Observable<ProgramStage[]>;
  public isLoaded$: Observable<boolean>;
  public isProgramLoaded$: Observable<boolean>;
  public isProgramStageLoaded$: Observable<boolean>;
  public programs$: Observable<Program[]>;

  constructor(private store: Store<DataFilterState>) {
    this.store.dispatch(new LoadEventDataValues());
    this.programs$ = this.store.select(getAllPrograms);
    this.programStages$ = this.store.select(getAllProgramStages);
    this.isProgramLoaded$ = this.store.select(getProgramLoaded);
    this.isProgramStageLoaded$ = this.store.select(getProgramStageLoaded);
  }

  ngOnInit() {
    this.isLoaded$ = this.isProgramLoaded$ && this.isProgramStageLoaded$;
  }
}
