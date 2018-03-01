import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
    selector: 'app-basic-concepts',
    templateUrl: './basic-concepts.component.html',
    styleUrls: ['./basic-concepts.component.less']
})
export class BasicConceptsComponent implements OnInit, AfterViewInit {

    private interval$ = Rx.Observable.interval(1000);

    private subject$ = new Rx.Subject();

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.interval$.subscribe(this.subject$);
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

    lazySubscribe() {
        this.interval$.subscribe(i => {
            console.log(i);
        });
    }

    firstSubscribe() {
        this.interval$.subscribe(i => {
            console.log(`这是第一个订阅：${i}`);
        });
    }

    secondSubscribe() {
        this.interval$.subscribe(i => {
            console.log(`%c 这是第二个订阅：${i}`, 'background: #222; color: #bada55');
        });
    }

    promiseThen() {
        const promise = new Promise((resolve, reject) => {
            console.log('Promise开始执行');
            resolve('来自Promise');
        });

        promise.then(i => {
            console.log(i)
        });

        console.log('完成');
    }

    syncSubscribe() {
        const ob$ = Rx.Observable.create(observer => {
            console.log('Observable开始执行');
            observer.next('来自Observable');
        });

        ob$.subscribe(i => {
            console.log(i);
        });

        console.log('完成');
    }

    subjectFirstSubscribe() {
        this.subject$.subscribe(i => {
            console.log(`这是第一个订阅：${i}`);
        });
    }

    subjectSecondSubscribe() {
        this.subject$.subscribe(i => {
            console.log(`%c 这是第二个订阅：${i}`, 'background: #222; color: #bada55');
        });
    }

    private subscription: Rx.Subscription;
    subscribe() {
        this.subscription = this.interval$.subscribe(i => {
            console.log(i);
        });
    }

    unsubscribe() {
        this.subscription.unsubscribe();
    }



}
