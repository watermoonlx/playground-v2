import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { menuConfig } from './menu.config';
import * as Rx from 'rxjs';

@Injectable()
export class MenuService {

    readonly menuConfig$ = new Rx.BehaviorSubject(menuConfig);
    readonly breadcrumb$: Rx.Observable<string[]>;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.breadcrumb$ = this.router.events
            .filter(e => e instanceof NavigationEnd)
            .map(i => (<NavigationEnd>i).urlAfterRedirects)
            .withLatestFrom(this.menuConfig$)
            .map(([url, menuConfigs]) => this.getBreadcrumb(url, menuConfigs))
            .share();
    }

    private getBreadcrumb(url: string, menuConfigs: typeof menuConfig) {
        let breadcrumb: string[] = null;
        let found = false;
        for (let menu of menuConfigs) {
            breadcrumb = [];
            if (menu.type === 'submenu') {
                breadcrumb.push(menu.title);
                for (let item of menu.items) {
                    if (url.endsWith(item.path)) {
                        breadcrumb.push(item.title);
                        found = true;
                        break;
                    }
                }
            }
            else if (menu.type === 'menu-item') {
                if (url.endsWith((menu as any).path)) {
                    breadcrumb.push(menu.title);
                    found = true;
                }
            }

            if (found)
                break;
        }

        return breadcrumb;
    }
}
