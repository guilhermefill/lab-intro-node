class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items.length > pos) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length > 0) {
      return this.items[this.items.length - 1]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length > 0) {
      return this.items[0]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((acc,val) => acc + val, 0);
  }
  avg() {
    if(this.items.length > 0) {
    return this.sum() / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
