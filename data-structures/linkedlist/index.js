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

console.log(list.toString());











