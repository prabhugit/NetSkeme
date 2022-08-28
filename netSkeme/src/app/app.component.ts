import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import layeredData from '../public/layeredData.json';
import { Item } from './item';


interface Linetype {
  value: string;
  viewValue: string;
}

interface Lineweight {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = layeredData.layerElements;
  title = 'netSkeme';
  currentItem = { name: 'newLayer'} ;
  selectedNav = "settings"
  value: boolean = false;
  name= "New Layer";
  color1?:String;
  color2?:String;
  color3?:String;
  color4?:String;
  color5?:String;
  color6?:String;
  color7?:String;
  color8?:String;
  color9?:String;

  changeText(event: any,item: string) {
    console.log(this,event);
    // if(item!==this.selectedNav){
      if(this.selectedNav === item){
        this.selectedNav='';  
      }else {
        this.selectedNav=item;
      }

    //   this.value= !this.value
    // } else {
      // this.value= !this.value
    // }
    
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

  ltype: Linetype[] = [
    {value: 'ByLayer', viewValue: '_______ ByLayer'},
    {value: 'Continuous', viewValue: '_______ Continuous'},
    {value: 'Dashed', viewValue: '-------- Dashed'},
  ];
  lweight: Lineweight[] = [
    {value: 'ByLayer', viewValue: 'ByLayer'},
    {value: '0.0 mm', viewValue: '0.0 mm'},
    {value: '0.20 mm', viewValue: '0.20 mm'},
    {value: '1.50 mm', viewValue: '1.50 mm'},
  ];
  selectedType = this.ltype[0].value;
  selectedWeight = this.lweight[0].value;

  selectType(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
  }

  selectWeight(event: Event) {
    this.selectedWeight = (event.target as HTMLSelectElement).value;
  }

}
