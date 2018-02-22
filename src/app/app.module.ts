import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RxjsDemoModule } from './rxjs-demo/rxjs-demo.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducer';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NgZorroAntdModule.forRoot(),
        SharedModule,
        CoreModule,
        RxjsDemoModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            logOnly: environment.production,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
