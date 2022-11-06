import { Subject } from "rxjs";

const test = require('node:test');
const assert = require('assert');


test('Subject cases', async (t) => {
    await t.test('Common Subject', async (t) => {
        const receivedData = [];
        const exceptedData = ['One', 'One', 'Two', 'Two', 'Three', 'Three']
        const subject = new Subject();

        const addData1 = (data: string) => {
            receivedData.push(data)
        }
        const addData2 = (data: string) => {
            receivedData.push(data)
        }

        subject.subscribe({
            next: addData1
        })

        subject.subscribe({
            next: addData2
        })

        subject.next('One')
        subject.next('Two')
        subject.next('Three')

        assert.strictEqual(receivedData.length, exceptedData.length);
        assert.strictEqual(JSON.stringify(receivedData), JSON.stringify(exceptedData));
    });
});