import { Component } from '@angular/core';
import { DataFilterConfig } from 'projects/ngx-dhis2-data-filter/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dhis2-data-filter';
  dataObject: any;
  action: string;
  dataFilterConfig: DataFilterConfig = {
    singleSelection: true,
    enabledSelections: ['in'],
    showGroupingButton: false
  };
  selectedDataItems: any[] = [];

  onDataUpdate(dataObject, action) {
    console.log(dataObject);
    this.dataObject = dataObject;
    this.action = action;
  }
}
