const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyLinkedListNode(value, null, null)
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

    const node = new DoublyLinkedListNode(value, null, null);

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    if (!value) {
        return;
    }

    const node = new DoublyLinkedListNode(value, this.head, null);
    this.head = node;
    this.length++;
  }

  insert(index, value) {
      const node = new DoublyLinkedListNode(value);

      if (index >= this.length) {
          return this.append(value);
      }

      const nodeRightBeforeBeingInsertedNode = this.traverseToIndex(index - 1);

      node.next = nodeRightBeforeBeingInsertedNode.next;
      node.prev = nodeRightBeforeBeingInsertedNode;
      nodeRightBeforeBeingInsertedNode.next = node;
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
      
  }
};

let myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(7);

myLinkedList.append(3);

myLinkedList.prepend(5);

myLinkedList.insert(200, 55);

// myLinkedList.insert(2, 1);

// myLinkedList.remove(2);
console.log(myLinkedList);

console.log(myLinkedList.printAsArray());