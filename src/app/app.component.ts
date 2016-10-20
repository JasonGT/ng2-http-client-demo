import { Component, OnInit } from '@angular/core';

import { ItemsService } from './shared/items.service';
import { Item } from './shared/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemsService]
})
export class AppComponent implements OnInit {

  items: Item[] = [];

  errorMessage: string; // TODO: Display this error.

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems()
      .subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error);
  }

  add(name: string) {
    this.itemsService.addItem(name)
      .subscribe(
      item => this.items.push(item),
      error => this.errorMessage = <any>error);
  }

  delete(item: any) {
    if (confirm('Delete ' + item.name + '?')) {
      this.itemsService.deleteItem(item)
        .subscribe(
        () => {
          let index = this.items.indexOf(item);
          if (index > -1) {
            this.items.splice(index, 1);
          }
        },
        error => this.errorMessage = <any>error);
    }
  }

}