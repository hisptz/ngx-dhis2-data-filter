import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dhis2-data-filter';
  dataObject: any;
  action: string;
  dataFilterConfig = {
    singleSelection: false
  };
  selectedDataItems: any[] = [];

  onDataUpdate(dataObject, action) {
    console.log(dataObject);
    this.dataObject = dataObject;
    this.action = action;
  }
}
