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

            //console.log(this.head.next === this.tail);
            node.next = this.head; //the first node.next === this.tail
            this.head = node;
            return this;
        }
    }


    append(value){
        //console.log(this.head === this.tail);
        const node = new LinkedNode(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        } 
        
        this.tail.next = node; //this.head.next & this.tail.next have same reference. (this this.tail.next means the first head.next)
        this.tail = node;  //the only first head.next & this.tail.next 
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