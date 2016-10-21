import { InMemoryDbService,  } from 'angular-in-memory-web-api';

import { Item } from './item';

export class ItemsData implements InMemoryDbService {
  createDb() {
    let items = [
      new Item(1, 'One bad programmer can easily create two new jobs a year'),
      new Item(2, 'pro-gram-mer: n. an organism that turns caffine into software'),
      new Item(3, 'My code is guaranteed 100% mistrake free.'),
      new Item(4, '!false: it\'s funny because it\'s true.')
    ];

    return {items};
  }
}