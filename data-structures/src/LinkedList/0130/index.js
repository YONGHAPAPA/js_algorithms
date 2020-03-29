console.log("0130 : index.js");
const LinkedNode = require("./LinkedNode");
const LinkedList = require("./LinkedList");

let linkedList = new LinkedList();

linkedList.append(0);

linkedList.prepend(-1);
linkedList.prepend(-2);
linkedList.prepend(-3);

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

//console.log(linkedList);

console.log(linkedList.toArray());
linkedList.reverse();
console.log(linkedList.toArray());

linkedList.append(-4);
linkedList.append(-5);
console.log(linkedList.toArray());

linkedList.reverse();
console.log(linkedList.toArray());
linkedList.append(4);
linkedList.append(5);
console.log(linkedList.toArray());
