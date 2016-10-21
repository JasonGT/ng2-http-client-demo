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

  newItem: string;

  errorMessage: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.getItems()
      .subscribe(
        items => this.items = items,
        error => this.setError(error));
  }

  addItem() {
    if (!this.newItem) { return; }

    this.itemsService.addItem(this.newItem)
      .subscribe(
        item => this.items.push(item),
        error => this.setError(error));
  }

  deleteItem(item: Item) {
    if (confirm('Delete ' + item.name + '?')) {
      this.itemsService.deleteItem(item.id)
        .subscribe(
          () => this.removeItem(item),
          error => this.setError(error));
    }
  }

  removeItem(item: Item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  setError(error: any) {
    this.errorMessage = error;
  }

}
