import { NgModule, SkipSelf, Optional } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ALL_SERVICES } from './services';
import { ALL_COMPONENTS } from './components';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    providers: [...ALL_SERVICES],
    declarations: [...ALL_COMPONENTS],
    exports: [
        AppRoutingModule,
        ...ALL_COMPONENTS
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw `Core模块已经存在，不能再次加载！`;
        }
    }
}
