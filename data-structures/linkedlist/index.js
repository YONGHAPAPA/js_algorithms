const LinkedNode = require('./LinkedNode');
const LinkedList = require('./LinkedList');
const list = new LinkedList();

//prepend node
for(let i=0; i>=-3; i--){
    //list.prepend(i);
}

//console.log(list.head);
//console.log(list.tail);

//append node
for(let i=1; i<=3; i++){
    //list.append(i);
}

//console.log(list.toArray());

//list.reverse();
//console.log(list.toArray());


//console.log(list.toString());
//list.reverse();

//console.log(list.toString());
//console.log(list.compare(1,1));
const fn = function(val){
    //console.log(val);
}
//const findNode = list.find(3, fn);
//console.log(findNode);


const a = new LinkedNode(1,2);
//console.log(a);
const b = a;
const c = b;
c.next = 9;


console.log(a);
console.log(b);
console.log(c);








