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
        value = value.next;
      }
    }

    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let ind = 0,
      current = this.head;

    while (ind !== index) {
      current = current.next;
      ind++;
    }
    return current;
  }

  set(value, index) {
    let node = this.get(index);
    if (!!node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    else if (index === this.length) return !!this.push(value);
    else if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value),
      node = this.get(index - 1),
      nextNode = node.next;

    node.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else if (index === 0) return !!this.shift();
    else if (index === this.length - 1) return !!this.pop();

    let prevNode = this.get(index - 1),
      nextNode = prevNode.next;

    prevNode.next = nextNode.next;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null,
      next = null;

    while (node) {
      next = node.next; // 6 7 8 null
      node.next = prev; // null 5 6 7
      prev = node; // 5 6 7 8
      node = next; // 6 7 8 null
    }
    return this;
  }
}

const sll = new SinglyLinkedList();
// console.log(sll);
console.log(sll.push(5));
console.log(sll.push(6));
console.log(sll.push(7));
console.log(sll.push(8));
// console.log(sll.pop());
// console.log(sll.shift());
// console.log(sll.unshift(4));
// console.log(sll.get(3));
// console.log(sll.set(1, 4));
// console.log(sll.insert(2, 1));
// console.log(sll.remove(1));
console.log(sll.reverse());
console.log(sll);
