import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DragulaModule } from 'ng2-dragula';
import { NgxDhis2DataFilterModule } from '@iapps/ngx-dhis2-data-filter';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DragulaModule.forRoot(),
    NgxDhis2DataFilterModule,
    NgxDhis2HttpClientModule.forRoot({
      namespace: 'hisptz',
      version: 1,
      models: {}
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    /**
     * Dev tool, enabled only in development mode
     */
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
