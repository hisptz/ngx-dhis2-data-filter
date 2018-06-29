import { NgModule, ModuleWithProviders } from '@angular/core';
import { containers } from './containers';

@NgModule({
  imports: [],
  declarations: [...containers],
  exports: [...containers]
})
export class NgxDhis2DataFilterModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2DataFilterModule,
      providers: []
    };
  }
}
