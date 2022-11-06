import { AsyncSubject, concatMap, defer, finalize, forkJoin, from, Observable, Observer, Subject, Subscriber, Subscription } from "rxjs";
import { TaskQueue } from "task-queue-for-rxjs";

const test = require('node:test');
const assert = require('assert');

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const main = async () => {

    const receivedData = [];
    const exceptedData = ['One', 'One', 'Two', 'Two', 'Three', 'Three']

    function doSubscriberJob$(data: string): Observable<any> {
        return defer(() => {
            const x = delay(2000);
            receivedData.push(data + '1')
            return x;
        });
    }

    const componentSubject = new Subject();
    const doAction = (data: string) => {
        const eventSubject = new Observable((subscriber) => {
            subscriber.next(data);
            subscriber.complete();
        })
        componentSubject.next(eventSubject)
        return eventSubject;
    }

    componentSubject.subscribe((event: Observable<any>) => {
        return event.subscribe(doSubscriberJob$)
    })

    componentSubject.subscribe((event: Observable<any>) => {
        return event.subscribe(doSubscriberJob$)
    })

    var tasks$ = [];
    tasks$.push(doAction('One'));
    tasks$.push(doAction('Two'));
    tasks$.push(doAction('Three'));
    forkJoin(...tasks$).pipe(finalize(() => { })).subscribe(results => {

        console.log(receivedData)
        // assert.strictEqual(receivedData.length, exceptedData.length);
        // assert.strictEqual(JSON.stringify(receivedData), JSON.stringify(exceptedData));
    });
}
main()