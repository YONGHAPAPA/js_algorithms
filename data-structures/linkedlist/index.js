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


//2019.12.02
for(i=0; i>=-5; i--){
    list.prepend(i);
}

for(i=1; i<=5; i++){
    list.append(i);
}

//list.reverse();

//console.log(list.toArray());
let findNode = list.find({value:2});
console.log(findNode);










