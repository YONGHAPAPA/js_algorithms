const LinkedNode = require("./LinkedNode");

class LinkedList {
   constructor(head, tail) {
      this.head = head;
      this.tail = tail;
   }

   append(value) {
      let nNode = new LinkedNode(value);

      if (!this.head) {
         this.head = nNode;
         this.tail = nNode;
         return this;
      }

      this.tail.next = nNode;
      this.tail = nNode;
      return this;
   }

   toArray() {
      const nArray = new Array();
      let currNode = this.head;

      while (currNode) {
         nArray.push(currNode.value);
         currNode = currNode.next;
      }

      return nArray;
   }

   prepend(value) {
      const nNode = new LinkedNode(value);

      if (!this.head) {
         this.head = nNode;
         this.tail = nNode;
         return this;
      }

      nNode.next = this.head;
      this.head = nNode;
      return this;
   }

   reverse() {
      let currNode = this.head;
      let revNode = null;

      while (currNode) {
         let nNode = new LinkedNode(currNode.value);

         if (!revNode) {
            revNode = nNode;
            this.tail = nNode;
         } else {
            nNode.next = revNode;
            revNode = nNode;
         }
         currNode = currNode.next;
      }

      this.head = revNode;

      return this;
   }
}

module.exports = LinkedList;
