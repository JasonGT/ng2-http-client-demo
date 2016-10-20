import { InMemoryDbService,  } from 'angular-in-memory-web-api';

import { Item } from './item';

export class ItemsData implements InMemoryDbService {
  createDb() {
    let items = [
      new Item(1, 'Item 1'),
      new Item(2, 'Item 2'),
      new Item(3, 'Item 3'),
      new Item(4, 'Item 4')
    ];

    return {items};
  }
}