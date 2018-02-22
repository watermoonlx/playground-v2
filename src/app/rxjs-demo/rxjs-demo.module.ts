import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './app-routing.module';
import { ALL_COMPONENTS } from './components';
import { ALL_SERVICES } from './services';
import { ALL_PIPES } from './pipes';

@NgModule({
    imports: [
        SharedModule,
        FeatureRoutingModule
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
