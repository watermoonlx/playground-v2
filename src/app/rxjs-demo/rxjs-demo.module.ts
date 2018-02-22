import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ALL_COMPONENTS } from './components';
import { ALL_SERVICES } from './services';
import { ALL_PIPES } from './pipes';

import { reducers } from './store';
import { MovieEffects } from './store/movie/effects';

@NgModule({
    imports: [
        SharedModule,
        FeatureRoutingModule,
        StoreModule.forFeature('rxJSDemo', reducers),
        EffectsModule.forFeature([MovieEffects])
    ],
    declarations: [
        ...ALL_COMPONENTS,
        ...ALL_PIPES
    ],
    providers: [
        ...ALL_SERVICES
    ],
    exports: [
        FeatureRoutingModule,
        ...ALL_PIPES,
        ...ALL_COMPONENTS
    ]
})
export class RxjsDemoModule { }
