import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import layeredData from '../public/layeredData.json';
import { Item } from './item';
import { ResizeEvent } from 'angular-resizable-element';
import { FormControl } from '@angular/forms';

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
  elements = [...layeredData.layerElements];
  inputFormControl = new FormControl({ value: null, disabled: true });
  title = 'netSkeme';
  currentItem = { name: 'newLayer'} ;
  selectedNav = "settings"
  value: boolean = false;
  popup ='popup';
  lock_unlock_icon="lock_open"
  selectedLayer?: any;
  width = '300px';
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
    this.elements.map(e=>{
      if(e.id===this.selectedLayer.id && e.id!==0){
        e.lineType=this.selectedType;
      }
    })
    

  }
  selectName(event: Event) {
    console.log("name change")
    if(this.selectedLayer && this.selectedLayer.id!==0){
    this.name = (event.target as HTMLSelectElement).value;
    this.selectedLayer.elementName = this.name
    this.elements.map(e=>{
      if(e.id===this.selectedLayer.id && e.id!==0){
        e.elementName=this.name;
      }
    })
    }
  }
  addNewLayer(event: Event){
    console.log("Add new layer event",event);
    let id=this.elements.length+1;
    this.selectedLayer={
      id,
      elementName: 'New Layer',
      colorName: "orangecolor",
      colorCode: "color8",
      lineType: "ByLayer",
      lineWeight: "ByLayer"
    }
    this.elements.push(this.selectedLayer)
  }

  deleteLayer(event: Event){
    console.log("Deleting",this.selectedLayer);
    if(this.selectedLayer && this.selectedLayer.id !==0){
      let updatedElements =this.elements.filter(e=> e.id!==this.selectedLayer.id);
      console.log("updatedELements",updatedElements);
      this.selectedLayer = undefined;
      this.elements = [...updatedElements];
      console.log("After Deleting",this.selectedLayer);
    } else{
      console.log("Cannot delet this layer");
    }
    
  }
  selectWeight(event: Event) {
    this.selectedWeight = (event.target as HTMLSelectElement).value;

    this.elements.map(e=>{
      if(e.id===this.selectedLayer.id && e.id!==0){
        e.lineWeight=this.selectedWeight;
      }
    })
  }

  selectLayer(event: Event, id: Number){
    let selectedLayer = this.elements.find(e=> e.id===id);
    console.log(selectedLayer);
    this.selectedLayer=selectedLayer;
    if(this.selectedLayer && this.selectedLayer.id===0){
      this.inputFormControl.disable();
    } else {
      this.inputFormControl.enable();
    }
    
  }
  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    this.width=event.rectangle.width+"px";
  }

  onResizing(event: ResizeEvent) : void {
    console.log('Element is resizing', event);
    this.width=event.rectangle.width+"px";
  }

  toggleLock(event: Event,elem: any) : void {
    
      this.elements.map(e=>{
        if(e.id===elem.id){
          e.lock=!elem.lock;
        }
      })
    
    event.stopPropagation();
  }
  toggleOnOff(event: Event,elem: any) : void {
    
    this.elements.map(e=>{
      if(e.id===elem.id){
        e.on=!elem.on;
      }
    })
  
  event.stopPropagation();
  }

}
