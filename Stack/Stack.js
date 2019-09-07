const Node = require('./LinkedListNode');
const _globals = require('./_globals');

class Stack {
    constructor(length = 0) {
        this.top = null;
        this.bottom = null;
        this.length = length;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value, null);

        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const holdingNode = this.top;
            this.top = node;
            this.top.next = holdingNode;
        }

        this.length++;

        return node;
    }

    pop() {
        if (this.length === 0) {
            return null;
        } else {
            const holdingNode = this.top;
            this.top = this.top.next;
            this.length--;
        }

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const stack = new Stack();

stack.push('Google');
stack.push('Booking');
stack.push('Facebook');

_globals.endLine();
_globals.logger('Stack:', stack);
_globals.endLine();
console.log('Stack is empty: ', stack.isEmpty());
_globals.endLine();
console.log('Peek from Stack: ', stack.peek());
_globals.endLine();
console.log(stack);
_globals.endLine();
console.log(stack.pop());
_globals.endLine();
_globals.logger('Stack', stack);
console.log(stack.pop());