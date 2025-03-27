function getValue<K, V> (key: K, value1: V, value2: V) {
  if (key) {
    return value1;
  }

  return value2;
}

getValue<string, number>('1', 1, 2);

// class DataStore<T> {
//   private items: T[] = [];

//   addItem(item: T) {
//     this.items.push(item);
//   }

//   getItem(index: number) {
//     return this.items[index];
//   }

//   removeItem(index: number) {
//     return this.items.splice(index, 1);
//   }

//   getAllItems() {
//     return this.items;
//   }
// };


// const store = new DataStore<number>();
// store.addItem(1);
// store.addItem(2);
// store.addItem(3);
// console.log(store.getAllItems());

// const store2 = new DataStore<string>();
// store2.addItem('1');
// store2.addItem('2');
// store2.addItem('3');
// console.log(store2.getAllItems());