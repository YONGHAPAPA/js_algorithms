const LinkedNode = require('./LinkedNode');

class LinkedList{
    constructor(head, tail){
        this.head = head;
        this.tail = tail;
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
        const newNode = new LinkedNode(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;    
            return this;
        }

        //head의 last head.next가 this.tail.next, this.tail 이 모두 같은 값을 참조하게 됨.
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }


    reverse(){
       let currNode = this.head;
       let nextNode = null;
       let reverseNode = null;

       while(currNode){
            nextNode = currNode.next;

            currNode.next = reverseNode;
            reverseNode = currNode;
            
            currNode = nextNode;
       }

       this.tail = this.head;
       this.head = reverseNode;
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

    toString(cb){
        return this.toArray().map(item => item.toString(cb)).toString();
    }
}

module.exports = LinkedList
