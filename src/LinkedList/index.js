const LinkedNode = require("./LinkedNode");
const LinkedList = require("./LinkedList");

console.log(
    "################## This is LinkedList test room. ###########################"
);

//append();

const linkedlist = new LinkedList();
const node0 = new LinkedNode(0);
const node1 = new LinkedNode(1);
const node2 = new LinkedNode(2);

linkedlist.append(node0);
linkedlist.append(node1);
linkedlist.append(node2);

//console.log(linkedlist.head);

const result = linkedlist.toArray();
console.log(result);
