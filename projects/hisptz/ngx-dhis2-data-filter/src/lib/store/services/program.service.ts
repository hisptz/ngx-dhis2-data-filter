import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from 'ngx-dhis2-http-client';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getAll(): Observable<any> {
    return this.http.get(
      `programs?fields=id,name,shortName,programStages[id],programTrackedEntityAttributes[id,displayName~rename(name)]&paging=false`
    );
  }
}
