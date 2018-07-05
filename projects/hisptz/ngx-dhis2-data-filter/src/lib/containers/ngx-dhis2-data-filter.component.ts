import { Component, OnInit } from '@angular/core';
import { LoadEventDataValues, DataFilterState } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'hisptz-ngx-dhis2-data-filter',
  template: `
    <p>
      ngx-dhis2-data-filter works!
    </p>
  `,
  styles: []
})
export class NgxDhis2DataFilterComponent implements OnInit {
  constructor(private store: Store<DataFilterState>) {
    this.store.dispatch(new LoadEventDataValues());
  }

  ngOnInit() {}
}
