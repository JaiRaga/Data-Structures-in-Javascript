class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      let current = this.first;
      this.first = node;
      node.next = current;
    }

    ++this.size;
    return this;
  }

  pop() {
    if (!this.first) return null;

    let current = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    --this.size;
    return this;
  }
}

let stack = new Stack();
console.log(stack);
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.pop());
