import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpModule } from '@angular/http';

import './rxjs.bundle';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        NgZorroAntdModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule,
        NgZorroAntdModule,
        FormsModule,
        HttpModule
    ],
    declarations: []
})
export class SharedModule { }
