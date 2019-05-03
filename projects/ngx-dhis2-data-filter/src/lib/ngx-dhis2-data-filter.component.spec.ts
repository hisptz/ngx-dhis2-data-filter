import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDhis2DataFilterComponent } from './ngx-dhis2-data-filter.component';

describe('NgxDhis2DataFilterComponent', () => {
  let component: NgxDhis2DataFilterComponent;
  let fixture: ComponentFixture<NgxDhis2DataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDhis2DataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDhis2DataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
