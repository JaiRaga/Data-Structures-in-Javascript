class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) return (this.root = node);

    let current = this.root;

    while (true) {
      if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      } else if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value > current.value) {
        if (current.right === null) return false;
        current = current.right;
      } else if (value < current.value) {
        if (current.left === null) return false;
        current = current.left;
      }
    }
  }

  BFS() {
    let queue = [],
      visited = [],
      current = this.root;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      visited.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  DFSPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }
}

const bst = new BinarySearchTree();
console.log(bst);
// bst.root = new Node(10);
// bst.root.left = new Node(5);
// bst.root.right = new Node(15);
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(25);
bst.insert(13);
bst.insert(3);
bst.insert(7);
// console.log(bst.find(21));
// console.log(bst.BFS());
console.log(bst.DFSPreOrder());

console.log(bst);
