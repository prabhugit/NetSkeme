import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import layeredData from '../public/layeredData.json';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = layeredData.layerElements;
  title = 'netSkeme';
  currentItem = { name: 'newLayer'} ;

  value: boolean = false;
  color1?:String;
  color2?:String;
  color3?:String;
  color4?:String;
  color5?:String;
  color6?:String;
  color7?:String;
  color8?:String;
  color9?:String;

  changeText() {
    this.value= !this.value
  }

  retainDiv(){
    this.value = true;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

}
