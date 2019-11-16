import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DragulaModule } from 'ng2-dragula';
import { NgxDhis2DataFilterModule } from 'projects/ngx-dhis2-data-filter/src/public_api';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DragulaModule.forRoot(),
        NgxDhis2DataFilterModule,
        NgxDhis2HttpClientModule.forRoot({
          namespace: 'hisptz',
          version: 1,
          models: {}
        }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
