import { Component, OnInit } from '@angular/core';
import { MenuService, menuConfig } from './core/services';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    public menuList$: Rx.Observable<typeof menuConfig>;
    public breadcrumb$: Rx.Observable<string[]>;

    constructor(
        private menuSvc: MenuService
    ) {
    }

    ngOnInit() {
        this.menuList$ = this.menuSvc.menuConfig$;
        this.breadcrumb$ = this.menuSvc.breadcrumb$;
    }
}
