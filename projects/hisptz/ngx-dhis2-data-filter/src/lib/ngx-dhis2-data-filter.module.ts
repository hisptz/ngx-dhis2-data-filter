import { NgModule, ModuleWithProviders } from '@angular/core';
import { containers } from './containers';
import { reducers, effects } from './store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [HttpClientModule, StoreModule.forFeature('data-filter', reducers), EffectsModule.forFeature(effects)],
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
