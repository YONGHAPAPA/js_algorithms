const LinkedNode = require('./LinkedNode');
const LinkedList = require('./LinkedList');
const list = new LinkedList();

//prepend node
for(let i=0; i>=-5; i--){
    //list.prepend(i);
}

//append node
for(let i=1; i<=5; i++){
    //list.append(i);
}

//console.log(list.toArray());

//2019.11.26
/*
const a = new LinkedNode(1,2);
const b = a;
const c = b;
c.next = 9;
*/

//2019.11.27
/*
list.reverse();
let findNode = list.find({value:0, cb:function(val){
    if(val === 5){
        return true;
    }
}});

console.log(findNode);
*/


//2019.12.02 - 2019.12.03
for(i=0; i>=-5; i--){
    //list.prepend(i);
}

for(i=1; i<=5; i++){
    //list.append(i);
}

//console.log(list.find(3));
//console.log(list.toArray());
//list.reverse();
//console.log(list.toArray());

//console.log(list.toArray());
//let findNode = list.find({value:2});
//console.log(findNode);

//console.log(list.toArray());
//list.delete(3);
//list.delete(4);
//list.delete(5);

//list.deleteTail();
//console.log(list.toArray());

//list.deleteTail();
//console.log(list.toArray());

//list.deleteTail();
//console.log(list.toArray());

/*
let a = {x:0, y:0}
let x = {x:9, y:9}
let b = a;
b.x = 7;
b = x;
b.x = 1;

console.log(a);
console.log(b);
*/

/*
let a = {x:0, y : {x:0, y:{x:0, Y:null}}};
let b = a;
c = {x:0, y:0}

b.y.y.y = 'x';
b = c;

console.log(a);
console.log(b);
console.log(c);
*/


for(i=0; i>=-3; i--){
    list.prepend(i);
}

//console.log(list.toArray());

for(i=1; i<=3; i++){
    list.append(i);
}



//console.log(list.toArray());


//list.delete(1);
//list.reverse();

console.log(list.toArray());

list.delete(-1);
console.log(list.toArray());
console.log(list.tail);

//console.log(list.toArray());
//console.log(list.head);
//console.log(list.tail);
//list.deleteHead();
//console.log(list.toArray());













