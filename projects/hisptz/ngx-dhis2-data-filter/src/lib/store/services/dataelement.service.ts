import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from 'ngx-dhis2-http-client';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataElementService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getAll(): Observable<any> {
    return this.http.get(
      `dataElements.json?fields=,id,name,valueType,categoryCombo&paging=false&filter=domainType:eq:AGGREGATE&filter=valueType:ne:TEXT&filter=valueType:ne:LONG_TEXT`
    );
  }
}
