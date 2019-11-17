const LinkedNode = require('./LinkedNode');

class LinkedList{
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
        }

        node.next = this.head;
        this.head = node;
    }
    
    append(value){
        const node = new LinkedNode(value);
       
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
    }

    toArray(){
        const nodes = new Array();

        let currentNode = this.head;
        while(currentNode){
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(nodes);

        return nodes;
    }

    reverse(){
        let currNode = null;
        let prevNode = null;
        let nextNode = null;

        currNode = this.head;
        while(currNode){

            console.log('=============================');
            console.log(this.head);

            nextNode = currNode.next;
            console.log(this.head);
            currNode.next = prevNode;
            console.log(this.head);

            prevNode = currNode;
            currNode = nextNode;
            console.log(this.head);
        }

        //console.log(this.head);
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }

    toString(cb){
        return this.toArray().map(node => node.toString(cb)).toString();
    }
}

module.exports = LinkedList