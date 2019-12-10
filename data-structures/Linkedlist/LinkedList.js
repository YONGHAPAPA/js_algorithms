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
    /*
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
    */

    //2019.12.03
    /*
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
    */

    //2019.12.04
    /*
    delete(value){

        let hNode, tNode, delNode;
        let currNode = this.head;

        while(currNode){

            if(this.compare(currNode.value, value) === 0){

                delNode = currNode;
                if(currNode.next){
                    currNode = currNode.next;
                } else {
                    break;
                }
            }

            const node = new LinkedNode(currNode.value);

            if(!hNode){
                hNode = node;
                tNode = node;
            } else {
                tNode.next = node;
                tNode = node;
            }

            currNode = currNode.next;
        }

        this.head = hNode;
        this.tail = tNode;
        
        return delNode;
    }
    */

    /*
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
    */

    //2019.12.05
    /*
    toArray(){
        let currNode = this.head;
        const result = new Array();

        while(currNode){
            result.push(currNode.value);
            currNode = currNode.next;
        }

        return result;
    }

    prepend(value){

        const nNode = new LinkedNode(value);

        if(!this.head){
            this.head = nNode;
            this.tail = nNode;
            return this;
        }

        nNode.next = this.head;
        this.head = nNode;
        return this;
    }

    append(value){
        const nNode = new LinkedNode(value);

        if(!this.head){
            this.head = nNode;
            this.tail = nNode;
            return this;
        }

        this.tail.next = nNode; //this.head.next === nNode
        this.tail = nNode;  //this.head.next === this.tail === nNode
        return this
    }

    find(value){
        let currNode = this.head;
        let findNode;

        while(currNode){
            if(currNode && this.compare(currNode.value, value) === 0){
                findNode = currNode;
            }
            currNode = currNode.next;
        }

        return findNode;
    }

    reverse(){

        let currNode = this.head;
        let tempNode, revsNode;

        let idx = 0;
        while(currNode){
            tempNode = currNode.next;

            currNode.next = revsNode;
            revsNode = currNode;

            currNode = tempNode;
            idx++;
        }

        //console.log(revsNode);
        this.tail = this.head;
        this.head = revsNode;

        return this;
    }

    delete(value){

        let currNode = this.head;
        let deleteNode;
        let hNode, tNode, nNode;

        while(currNode){

            if(this.compare(currNode.value, value) === 0){
                deleteNode = currNode;
                currNode = currNode.next;
            }

            if(!currNode)
                break;

            nNode = new LinkedNode(currNode.value);

            if(!hNode){
                hNode = nNode;
                tNode = nNode;
            } else {
                tNode.next = nNode;
                tNode = nNode;
            }

            currNode = currNode.next;
        }

        if(deleteNode){
            this.head = hNode;
            this.tail = tNode;
        }

        return deleteNode;
    }

    deleteTail(){
        let currNode = this.head;
        let deletedTail;

        while(currNode){
            if(currNode.next){
                if(!currNode.next.next){
                    deletedTail = currNode.next;
                    currNode.next = null;
                    this.tail = currNode;
                }
            } 
            currNode = currNode.next;
        }

        //console.log(this.head);
        console.log(this.tail);

        return deletedTail;
    }
    */

    //2019.12.09 - 2019.12.10
    prepend(value){
        const nNode = new LinkedNode(value);

        if(!this.head){
            this.head = nNode;
            this.tail = nNode;
            return this;
        }

        nNode.next = this.head;
        this.head = nNode;
        return this;
    }

    toArray(){
        const result = new Array();
        let currNode = this.head;

        while(currNode){
            result.push(currNode.value);
            currNode = currNode.next;
        }

        return result;
    }

    append(value){
        const nNode = new LinkedNode(value);

        if(!this.head){
            this.head = nNode;
            this.tail = nNode;
            return this;
        }

        this.tail.next = nNode;
        this.tail = nNode;
        return this;
    }

    reverse(){

        let currNode = this.head;
        //let tempNode, reverseNode = null;
        var tempNode, reverseNode;

        while(currNode){
            tempNode = currNode.next;
            currNode.next = reverseNode;
            reverseNode = currNode;;
            currNode = tempNode;
        }

        this.tail = this.head;
        this.head = reverseNode;
        return this;
    }

    compare(val1, val2){
        
        if(val1 > val2){
            return 1;
        }
        
        if(val1 === val2){
            return 0;
        }

        if(val1 < val2){
            return -1;
        }
    }

    delete(value){
        let currNode = this.head;
        while(currNode){
            if(this.compare(value, this.head.value) === 0){
                this.head = currNode.next;
                break;
            }

            if(currNode.next != null){
                if(this.compare(value, currNode.next.value) === 0){

                    if(currNode.next.next === null){
                        currNode.next = null;
                        this.tail = currNode;
                    } else {
                        currNode.next = currNode.next.next;
                        deleteNode = currNode.next; 
                    }
                }
            } 

            currNode = currNode.next;
        }
    }
}


module.exports = LinkedList
