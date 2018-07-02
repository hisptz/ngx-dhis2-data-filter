import { NgModule, ModuleWithProviders } from '@angular/core';
import { containers } from './containers';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [StoreModule.forFeature('data-filter', reducers)],
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
