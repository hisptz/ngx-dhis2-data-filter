import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataFilterOptions: any[];
  title = 'app';

  constructor() {
    this.dataFilterOptions = DATA_FILTER_OPTIONS;
  }
}

export const DATA_FILTER_OPTIONS: any[] = [
  {
    name: 'All',
    prefix: 'ALL',
    selected: false
  },
  {
    name: 'Event datavalues',
    prefix: 'pr',
    selected: true
  }
];
