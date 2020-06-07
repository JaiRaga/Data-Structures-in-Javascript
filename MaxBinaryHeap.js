class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.indexOf(value) === -1 ? this.values.push(value) : null;
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let ind = this.values.length - 1,
      parentInd = null,
      child = null,
      parent = null;

    while (true) {
      if (ind === 0) break;
      parentInd = Math.floor((ind - 1) / 2);
      child = this.values[ind];
      parent = this.values[parentInd];

      if (child <= parent) break;
      this.values[parentInd] = child;
      this.values[ind] = parent;
      ind = parentInd;
    }
  }

  extractMax() {
    let root = this.values[0],
      len = this.values.length - 1;
    this.values[0] = this.values[len];
    this.values[len] = root;
    this.values.pop();
    this.values.length > 1 ? this.bubbleDown() : null;
    return root;
  }

  bubbleDown() {
    let ind = 0,
      lInd = null,
      rInd = null,
      parent = null,
      lChild = null,
      rChild = null;

    while (true) {
      lInd = 2 * ind + 1;
      rInd = 2 * ind + 2;

      lInd > this.values.length - 1 ? null : (lChild = this.values[lInd]);
      rInd > this.values.length - 1 ? null : (rChild = this.values[rInd]);
      parent = this.values[ind];

      if (lChild > rChild && lChild > parent) {
        this.values[lInd] = parent;
        this.values[ind] = lChild;
        ind = lInd;
      } else if (rChild > lChild && rChild > parent) {
        this.values[rInd] = parent;
        this.values[ind] = rChild;
        ind = rInd;
      } else break;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.insert(40));
console.log(heap.insert(100));
console.log(heap.insert(39));
console.log(heap.extractMax());
console.log(heap);
