import { TestBed, inject } from '@angular/core/testing';

import { NgxDhis2DataFilterService } from './ngx-dhis2-data-filter.service';

describe('NgxDhis2DataFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDhis2DataFilterService]
    });
  });

  it('should be created', inject([NgxDhis2DataFilterService], (service: NgxDhis2DataFilterService) => {
    expect(service).toBeTruthy();
  }));
});
