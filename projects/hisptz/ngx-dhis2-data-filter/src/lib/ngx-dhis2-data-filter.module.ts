import { NgModule, ModuleWithProviders } from '@angular/core';
import { containers } from './containers';
import { components } from './components';
import { directives } from './directives';
import { CommonModule } from '@angular/common';
import { reducers, effects } from './store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('data-filter', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...containers, ...components, ...directives],
  exports: [...containers, ...components, ...directives]
})
export class NgxDhis2DataFilterModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2DataFilterModule,
      providers: []
    };
  }
}
