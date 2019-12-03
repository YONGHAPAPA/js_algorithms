const LinkedNode = require('./LinkedNode');

function compareVal(a, b){
    return a - b;
}

class LinkedList{
    constructor(head, tail){
        this.head = head;
        this.tail = tail;
    }

    /*
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
    */

    //2019-11-26
    /*
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
        const someNode = new LinkedNode(100);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        //this.tail = someNode;
        this.tail = newNode;        //이것으로 this.head의 마지막 next 값, this.tail.next, this.tail 이 모두 newNode로 같은 값을 참조하게 됨
        return this;
    }

    reverse(){
        
        let currNode = this.head;
        let revNode = null;
        let nextNode = null;
        
        while(currNode){
            nextNode = currNode.next;
            currNode.next = revNode;    //revNode가 null 였을때 this.head 가 최종 tail 과 동일해진다. 
            revNode = currNode;
            currNode = nextNode;
        }


        //console.log(this.head);
        this.tail = this.head;
        this.head = revNode;
        return this;
    }

    find(value){

    }

    toArray(){
        const nodes = new Array();
        let currNode = this.head;

        while(currNode){
            nodes.push(currNode.value);
            currNode = currNode.next;
        }

        return nodes;
    }

    toString(cb){

    }
    */

    //2019.11.27
    /*
    prepend(value){
        const node = new LinkedNode(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }

        node.next = this.head;
        this.head = node;
        return this;
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
        return this;
    }

    reverse(){
        let currNode = this.head;
        let revNode = null;
        
        while(currNode){
            let nextNode = currNode.next;
            currNode.next = revNode;
            revNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;
        this.head = revNode;
        return this;
    }

    toArray(){
        const nodes = new Array();
        let currNode = this.head;
        while(currNode){
            nodes.push(currNode.value);
            currNode = currNode.next;
        }
        return nodes;
    }

    toString(cb){
        return this.toArray().map(item => 
            item.toString()
        ).toString();
    }

    find({value = undefined, cb = undefined}){

        console.log('value > ' + value);

        if(!this.head)
            return;

        let currNode = this.head;

        while(currNode){
            if(cb && cb(currNode.value)){
                return currNode;
            }

            if(value === currNode.value){
                return currNode;
            }
            currNode = currNode.next;
        }

        return;
    }
    */


    //2019.12.02 - 2019.12.03
    prepend(value){
        const newNode = new LinkedNode(value);

        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    toArray(){
        const nodeList = new Array();
        let currNode = this.head;

        while(currNode){
            nodeList.push(currNode.value);
            currNode = currNode.next;
        }

        return nodeList;
    }

    append(value){
        const newNode = new LinkedNode(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    reverse(){
        let currNode = this.head;
        let revsNode = null;
        let tempNode = null;

        while(currNode){
            tempNode = currNode.next;
            
            currNode.next = revsNode;
            revsNode = currNode;

            currNode = tempNode;
        }

        this.tail = this.head;
        this.head = revsNode;
        return this;
    }


    find({value=undefined, cb=undefined}){

        //console.log(value);
        //console.log(cb);

        if(!this.head){
            return null;
        }

        let currNode = this.head;

        while(currNode){
            if(cb && cb(currNode.value)){
                return currNode;
            }

            if(value && this.compare(value, currNode.value) === 0){
                return currNode;
            }

            currNode = currNode.next;
        }

        return null;
    }

    delete(value){

        if(!this.head){
            return null;
        }
        
        let currNode = this.head;
        let deleteNode = null;

        if(this.head && this.compare(value, this.head.value) == 0){
            deleteNode = this.head;
            this.head = this.head.next;
        }
        
        while(currNode.next){
            if(this.compare(value, currNode.next.value) == 0){
                deleteNode = currNode.next;
                currNode.next = currNode.next.next;
            } else {
                currNode = currNode.next;
            }
        }

        if(this.compare(value, this.tail.value) == 0){
          this.tail = currNode;  
        }

        return deleteNode;
    }

    compare(a,b){
        if(a > b){
            return -1;
        }

        if(a < b){
            return 1;
        }

        if(a === b){
            return 0;
        }
    }
}


module.exports = LinkedList
