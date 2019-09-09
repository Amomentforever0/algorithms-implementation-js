const Node = require('./BinarySearchTreeNode');
const _globals = require('../utils/_globals');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            // lookup through the tree
            // find proper place to insert the node
            let currentNode = this.root;

            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    };

    lookup(value) {
        if(!this.root) {
            return null;
        }

        let currentNode = this.root;

        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left; 
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }

        return null;
    };

    remove() {

    }
};

const bst = new BinarySearchTree();

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

_globals.logger('BST:Lookup', bst.lookup(6));

_globals.logger('BST:', JSON.stringify(bst));