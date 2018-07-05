import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from 'ngx-dhis2-http-client';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProgramStageService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getAll(): Observable<any> {
    return this.http.get(
      `programStages.json?fields=id,name,programStageDataElements[dataElement[id,name]]&paging=false`
    );
  }
}
