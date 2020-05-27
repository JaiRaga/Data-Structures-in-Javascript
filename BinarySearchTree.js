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
console.log(bst);
