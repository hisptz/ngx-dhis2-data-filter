import { NgModule, ModuleWithProviders } from '@angular/core';
import { containers } from './containers';
import { components } from './components';
import { directives } from './directives';
import { FormsModule } from '@angular/forms';
import { pipes } from './pipes';
import { CommonModule } from '@angular/common';
import { reducers, effects } from './store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('data-filter', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...containers, ...components, ...directives, ...pipes],
  exports: [...containers, ...components, ...directives, ...pipes]
})
export class NgxDhis2DataFilterModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2DataFilterModule,
      providers: []
    };
  }
}
