//import LinkedList from './LinkedList';
const LinkedList = require('./LinkedList');

let list = new LinkedList();

for(i=3; i>=0; i--){
    //console.log(i);
    list.prepend(i);
}

console.log(list.toArray());
console.log(list.tail);

list.reverse();

console.log(list.toArray());
console.log(list.tail);

//console.log(list.toArray())
//list.reverse();
//console.log(list);

/*
list.prepend(0);
list.prepend(1);
list.prepend(2);

console.log(list.toArray());

list.reverse();

console.log(list.toArray());
*/