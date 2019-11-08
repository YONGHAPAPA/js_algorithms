//import LinkedNode from './LinkedNode'
const LinkedNode = require('./LinkedNode');


class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value){
        const node = new LinkedNode(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        } else {
            node.next = this.head;
            this.head = node;
            return this;
        }
    }

    reverse(){
        let currentNode = this.head;
        let reverse = null;

        while(currentNode){

            let newNode = new LinkedNode(currentNode.value);

            if(!reverse){
                reverse = newNode;
                this.tail = newNode;
            } else {
                newNode.next = reverse;
                reverse = newNode;
            }

            currentNode = currentNode.next;
            this.head = reverse;
        }

        return this;
    }

    toArray(){
        const nodes = new Array();

        let currentNode = this.head;
        while(currentNode){
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodes;
    }
}

module.exports = LinkedList