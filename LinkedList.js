const Node = require('./LinkedListNode');

class LinkedList {
  constructor(value) {
    this.head = new Node(value, null);

    this.tail = this.head;

    this.length = 1;
  } 
  
  printAsArray() {
      const array = [];
      let currentNode = this.head;

      while(currentNode !== null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }

      return array;
  }

  append(value) {
    if (!value) {
        return;
    }

    const node = new Node(value, null);

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    if (!value) {
        return;
    }

    const node = new Node(value, null);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(index, value) {
      if (index >= this.length) {
          return this.append(value);
      }

      const node = new Node(value);
      const leader = this.traverseToIndex(index - 1);

      node.next = leader.next;
      leader.next = node;
      this.length++;
  }

  remove(index) {
      if (index>=this.length) {
          return;
      }

      const nodeRightBeforeBeingRemovedNode = this.traverseToIndex(index-1);
      const beingRemovedNode = nodeRightBeforeBeingRemovedNode.next;
      nodeRightBeforeBeingRemovedNode.next = beingRemovedNode.next;

      this.length--;
  }

  traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;

      while(counter <= index) {
          currentNode = currentNode.next;
          counter++;
      }

      return currentNode;
  }

  reverse() {
    if(!this.head.next) {
        return this.head;
    }

    let first = this.head;
    let second = first.next;
    this.tail = this.head;

    while(second) {
        const third = second.next;
        second.next = first;
        first = second;
        second = third;
    }

    this.head.next = null;
    this.head = first;
  }
};

let myLinkedList = new LinkedList(10);

myLinkedList.append(7);

myLinkedList.append(3);

myLinkedList.prepend(5);

myLinkedList.insert(200, 55);

myLinkedList.insert(2, 1);

myLinkedList.remove(2);
console.log(myLinkedList);

console.log(myLinkedList.printAsArray());