const LinkedNode = require('./LinkedNode');

function compareVal(a, b){
    return a - b;
}

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

        let currNode, prevNode, nextNode = null;
        currNode = this.head;

        while(currNode){
            nextNode = currNode.next; 

            currNode.next = prevNode; 
            prevNode = currNode; 

            currNode = nextNode; 
        }

        this.tail = this.head;
        this.head = prevNode;
        return this;
    }

    find(value=undefined, cb=undefined){
        if(!this.head){
            return null;
        }

        let currNode = this.head;
        while(currNode){
            if(cb && cb(currNode.value)){
                return currNode;
            }
            
            if(value !== undefined && compareVal(value, currNode.value) === 0){
                return currNode;    
            }
            currNode = currNode.next;
        }

        return null;
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
