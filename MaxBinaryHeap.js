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
    let index = this.values.length - 1,
      parentInd = null,
      temp = 0;

    while (true) {
      parentInd = Math.floor((index - 1) / 2);
      console.log(index, parentInd);
      if (this.values[index] <= this.values[parentInd]) break;
      temp = this.values[parentInd];
      this.values[parentInd] = this.values[index];
      this.values[index] = temp;
      index = parentInd;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(41));
// console.log(heap.insert(39));
// console.log(heap.insert(33));
// console.log(heap.insert(18));
// console.log(heap.insert(27));
// console.log(heap.insert(12));
