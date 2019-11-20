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

//console.log(list.toString());
list.reverse();

//console.log(list.toString());
list.reverse();

//console.log(list.toString());
//console.log(list.compare(1,1));
const fn = function(val){
    console.log(val);
}
const findNode = list.find(3, fn);
console.log(findNode);








