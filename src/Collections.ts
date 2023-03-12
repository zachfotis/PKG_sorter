import { Sorter } from './Sorter';

// Class for number[] Collection
export class NumbersCollection extends Sorter {
  constructor(public collection: number[]) {
    super();
  }

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (this.collection[leftIndex] > this.collection[rightIndex]) {
      return true;
    }

    return false;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftValueTemp = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = leftValueTemp;
  }
}

// Class for string Collection
export class StringCollection extends Sorter {
  constructor(public collection: string) {
    super();
  }

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.collection.split('');

    const leftValueTemp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftValueTemp;

    this.collection = characters.join('');
  }
}
