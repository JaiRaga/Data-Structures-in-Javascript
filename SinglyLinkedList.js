class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      let value = this.head;
      while (true) {
        if (value.next === this.tail) {
          value.next = null;
          this.tail = value;
          break;
        }
        // console.log(value);
        value = value.next;
        // console.log(value);
      }
    }

    this.length--;
    return this;
  }
}

const sll = new SinglyLinkedList();
console.log(sll);
console.log(sll.push(5));
console.log(sll.push(6));
console.log(sll.push(7));
console.log(sll.pop());
