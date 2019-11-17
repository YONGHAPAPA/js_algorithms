//import LinkedNode from './LinkedNode'
const LinkedNode = require('./LinkedNode');


class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value){
        const newNode = new LinkedNode(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;
    }


    append(value){

        const newNode = new LinkedNode(value, 'X');

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        var lastNode = null;
        let currrentNode = this.head;
        while(currrentNode){
            if(!currrentNode.next){
                lastNode = currrentNode;
            }

            currrentNode = currrentNode.next;
        }

        //console.log(lastNode);
        //console.log(this.tail.next);
        //console.log(lastNode === this.tail.next);

        this.tail.next = newNode;

        //console.log(this.tail.next);
        //console.log(lastNode);
        //console.log(this.tail.next);
        //console.log(lastNode === this.tail.next);
        this.tail = newNode;

        console.log(lastNode);
        console.log(this.tail.next);
        console.log(lastNode === this.tail.next);

        //console.log(lastNode === this.tail.next);

        return this;       
    }

    reverse(){
       
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