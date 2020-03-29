const LinkedNode = require("./LinkedNode");

class LinkedList {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    append(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        return this;
    }

    toArray() {
        let nextNode = this.head;
        let result = new Array();

        while (nextNode) {
            result.push(nextNode.value);
            nextNode = nextNode.next;
        }

        return result;
    }
}

module.exports = LinkedList;
