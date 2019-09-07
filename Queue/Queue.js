const Node = require('../utils/Node');
const _globals = require('./_globals');

class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.length = 0;
    }

    peek() {
        return this.length > 1 ? this.start : null;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.start = node;
            this.end = node;
        } else {
            this.end.next = node;
            this.end = node;
        }
        this.length++;
    } 

    dequeue() {
        this.start = this.start.next;
        this.length--;
        return this;
    }
};

const queue = new Queue();

_globals.logger('Queue', queue);
queue.enqueue('google');
queue.enqueue('facebook');
queue.enqueue('booking');
_globals.logger('Queue', queue);
console.log(queue.dequeue());
