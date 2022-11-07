import StrictEventEmitter from 'strict-event-emitter-types';

interface Events {
    request: (request: { a: string, b: Observable<any> }) => { a: string, b: Observable<any> };
    done: void;
}

import { EventEmitter } from 'events';
import { fromEvent, Observable } from 'rxjs';

let ee: StrictEventEmitter<EventEmitter, Events> = new EventEmitter;

const data = { a: 'a2', b: new Observable() };

const handler = {
    set(target, property, value) {
        console.log(target, property, value)
        target[property] = value;
        return true;
    }
};

const proxyData = new Proxy(data, handler as any);

fromEvent(ee, 'request').subscribe(data => { data.a = data.a + ' 1 '; return data; })
fromEvent(ee, 'request').subscribe(data => { data.a = data.a + ' 2 '; return data; })

const x = ee.emit('request', proxyData)
console.log(x);