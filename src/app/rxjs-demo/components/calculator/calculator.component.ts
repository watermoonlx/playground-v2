import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {

    a$ = new Rx.Subject<number>();

    b$: Rx.Observable<number>;

    c$ = new Rx.Subject<number>();

    result: number;

    constructor() { }

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
    }

}


// class Calculator {

//     private _a: number;
//     set a(val) {
//         this.a = val;
//         this.b = this._a + 1;
//     }
//     get a() {
//         return this._a;
//     }

//     b: number;
// }

class Calculator {

    a: number;
    get b() {
        return this.a + 1;
    }

}

