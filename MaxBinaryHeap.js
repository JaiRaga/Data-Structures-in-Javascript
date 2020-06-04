class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
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
