import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LayerItemComponent } from './layer-item/layer-item.component';
import { ResizableModule } from 'angular-resizable-element';
// import { ResizableDivComponent } from './components/resizable-div/resizable-div.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayerItemComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgScrollbarModule,
    ColorPickerModule,
    MatSelectModule,
    MatInputModule,
    ResizableModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
