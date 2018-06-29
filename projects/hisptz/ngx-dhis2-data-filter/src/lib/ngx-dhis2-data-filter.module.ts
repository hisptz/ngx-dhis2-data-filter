import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxDhis2DataFilterComponent } from './ngx-dhis2-data-filter.component';

@NgModule({
  imports: [],
  declarations: [NgxDhis2DataFilterComponent],
  exports: [NgxDhis2DataFilterComponent]
})
export class NgxDhis2DataFilterModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2DataFilterModule,
      providers: []
    };
  }
}
