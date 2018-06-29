import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxDhis2DataFilterModule } from '@hisptz/ngx-dhis2-data-filter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDhis2DataFilterModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
