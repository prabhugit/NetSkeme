import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-layer-item',
  templateUrl: './layer-item.component.html',
  styleUrls: ['./layer-item.component.css']
})
export class LayerItemComponent {

  constructor() { }

  @Input() item!: Item;
  itemImageUrl = 'assets/teapot.svg';
  lineThrough = '';
  displayNone = '';
  @Input() prefix = '';

  // This component makes a request but it can't actually delete item.
  @Output() deleteRequest = new EventEmitter<Item>();

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
