// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        } else {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            return this.head = null;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const lastNode = this.getLast();

        if (lastNode) {
            lastNode.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(integer) {
        // if (!this.head) {
        //     return null;
        // }

        // let node = this.head;

        // for (let i = 0; i < integer; i++) {
        //     node = node.next;
        // }

        // return node;

        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === integer) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(integer) {
        const node = this.getAt(integer);
        const previousNode = this.getAt(integer - 1);

        if (!this.head) {
            return null;
        }

        if (this.head === node) {
            return this.head = node.next;
        }

        if (node) {
            previousNode.next = node.next;
        }

        return node;
    }

    insertAt(data, integer) {
        const node = this.getAt(integer);
        const previousNode = this.getAt(integer - 1);
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        if (this.head === node) {
            this.head = newNode;
            newNode.next = node;
            return;
        }

        if (!node) {
            const lastNode = this.getLast();
            lastNode.next = newNode;
            return;
        }

        previousNode.next = newNode;
        newNode.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
