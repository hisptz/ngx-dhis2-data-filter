import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { NgxDhis2DataFilterModule } from '@hisptz/ngx-dhis2-data-filter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxDhis2DataFilterModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    /**
     * Dev tool, enabled only in development mode
     */
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
