class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index] !== null && this.data[index] !== undefined 
            ? this.data[index] 
            : null;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data[this.length-1];
    }

    pop() {
        delete this.data[this.length-1];
        this.length--;
    }

    shiftFromIndex(index) {
        for(let i = index; i<this.length; i++) {
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
    }

    delete(index) {
        if (this.data[index] !== null && this.data[index] !== undefined) {
            delete this.data[index];
            this.shiftFromIndex(index);
            this.length--;
        }
    }
}

const array = new MyArray();

export default Array;