import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RxjsDemoModule } from './rxjs-demo/rxjs-demo.module';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NgZorroAntdModule.forRoot(),
        SharedModule,
        CoreModule,
        RxjsDemoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
