class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }

    ++this.size;
    return this;
  }
}

const queue = new Queue();
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));
