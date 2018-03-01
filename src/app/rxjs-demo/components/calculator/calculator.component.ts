import { Component, OnInit,OnDestroy,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.less'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent implements OnInit,OnDestroy {

    a$ = new Rx.Subject<number>();

    b$: Rx.Observable<number>;

    c$ = new Rx.Subject<number>();

    result: number;

    // result$: Rx.Observable<number>;

    destoryed$ = new Rx.Subject<void>();

    constructor(
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        
        this.b$ = this.a$.map(i => i * 2);

        Rx.Observable
            .combineLatest(this.a$, this.b$, this.c$)
            .subscribe(([a, b, c]) => {
                this.result = a + b - c;
            });

        // Rx.Observable
        //     .combineLatest(this.a$, this.c$)
        //     .withLatestFrom(this.b$, (v1, v2) => [...v1, v2])
        //     .subscribe(([a, b, c]) => {
        //         this.result = a + b - c;
        //     });

        // this.result$ = Rx.Observable
        //     .combineLatest(this.a$, this.b$, this.c$)
        //     .map(([a, b, c]) => a + b - c);
    }

    ngOnDestroy() {
        this.destoryed$.next();
        this.destoryed$.complete();
    }

}


