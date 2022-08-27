import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LayerItemComponent } from './layer-item/layer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayerItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgScrollbarModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
