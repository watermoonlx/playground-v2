import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-basic-concepts',
    templateUrl: './basic-concepts.component.html',
    styleUrls: ['./basic-concepts.component.less']
})
export class BasicConceptsComponent implements OnInit, AfterViewInit {

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const btn1 = this.el.nativeElement.querySelector('#btn1');

        Rx.Observable.fromEvent(btn1, 'click')
            .subscribe(e => {
                console.log(e);
            });



        const btn2 = this.el.nativeElement.querySelector('#btn2');

        Rx.Observable.fromEvent(btn2, 'click')
            .filter((e: MouseEvent) => e.clientX % 2 === 0)
            .map((e: MouseEvent) => e.clientX)
            .subscribe(e => {
                console.log(e);
            });
    }

}
