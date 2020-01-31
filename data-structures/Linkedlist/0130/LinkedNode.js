class LinkedNode {
   constructor(value, next) {
      this.value = value;
      this.next = next;
   }

   toString(cb) {
      return cb ? cb(this.value) : `${this.value}`;
   }
}

module.exports = LinkedNode;
