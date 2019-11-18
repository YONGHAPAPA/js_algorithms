const LinkedList = require('./LinkedList');


const list = new LinkedList();

//prepend node
for(let i=0; i>=-3; i--){
    list.prepend(i);
}

//append node
for(let i=1; i<=3; i++){
    list.append(i);
}

list.reverse();

//console.log(list.toString());


class Node{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let a, b, c = null;
let o = new Node(0,0);
let f = new Node(1,1);
b = o;
a = b;

console.log(b);
console.log(a);

a.x = new Node(3,3);

console.log(o);
console.log(a);
console.log(b);








