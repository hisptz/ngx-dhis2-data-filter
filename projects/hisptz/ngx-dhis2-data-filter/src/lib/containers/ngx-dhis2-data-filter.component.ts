import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  LoadEventDataValues,
  DataFilterState,
  getAllPrograms,
  getAllProgramStages,
  getDataValueIsLoaded,
  getSelectedItems,
  getSelectedGroup
} from '../store';
import { Observable } from 'rxjs';
import { ProgramStage, Program } from '../models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'hisptz-ngx-dhis2-data-filter',
  templateUrl: './ngx-dhis2-data-filter.component.html'
})
export class NgxDhis2DataFilterComponent {
  @Input() dataFilterOptions: any = [];
  @Output() dispatchSelectedDataItems: EventEmitter<any> = new EventEmitter();
  public programStages$: Observable<ProgramStage[]>;
  public isDataValueLoaded$: Observable<boolean>;
  public programs$: Observable<Program[]>;
  public selectedGroup$: Observable<any>;
  public selectedItems$: Observable<any>;

  constructor(private store: Store<DataFilterState>) {
    this.store.dispatch(new LoadEventDataValues());
    this.programs$ = this.store.select(getAllPrograms);
    this.programStages$ = this.store.select(getAllProgramStages);
    this.isDataValueLoaded$ = this.store.select(getDataValueIsLoaded);
    this.selectedGroup$ = this.store.select(getSelectedGroup);
    this.selectedItems$ = this.store.select(getSelectedItems);
  }

  emitSelectedDataItems(event) {
    this.dispatchSelectedDataItems.emit(event);
  }
}
