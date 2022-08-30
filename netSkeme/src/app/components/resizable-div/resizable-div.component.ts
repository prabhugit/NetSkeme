import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'resizable-div',
  styles: [
    `
      .rectangle {
        position: relative;
        
        display: flex;
        
        width: 300px;
        height: 150px;
        background-color: #fd4140;
        border: solid 1px #121621;
        color: #121621;
        margin: auto;
      }

      mwlResizable {
        box-sizing: border-box; 
      }

      .resize-handle-top,
      .resize-handle-bottom {
        position: absolute;
        height: 5px;
        cursor: row-resize;
        width: 100%;
      }

      .resize-handle-top {
        top: 0;
      }

      .resize-handle-bottom {
        bottom: 0;
      }

      .resize-handle-left,
      .resize-handle-right {
        position: absolute;
        height: 100%;
        cursor: col-resize;
        width: 5px;
      }

      .resize-handle-left {
        left: 0;
      }

      .resize-handle-right {
        right: 0;
      }
    `,
  ],
  template: `
    <div
      class="rectangle"
      mwlResizable
      [enableGhostResize]="true"
      (resizeEnd)="onResizeEnd($event)"
    >
      <div
        class="resize-handle-top"
        mwlResizeHandle
        [resizeEdges]="{ top: true }"
      ></div>
      <div
        class="resize-handle-left"
        mwlResizeHandle
        [resizeEdges]="{ left: true }"
      ></div>
      <div
        class="resize-handle-right"
        mwlResizeHandle
        [resizeEdges]="{ right: true }"
      ></div>
      <div
        class="resize-handle-bottom"
        mwlResizeHandle
        [resizeEdges]="{ bottom: true }"
      ></div>
      
    </div>
  `,
})
export class ResizableDivComponent {
  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }
}