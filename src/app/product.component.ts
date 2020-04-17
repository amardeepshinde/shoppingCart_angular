import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  template: `
     <h1>{{product.name}}</h1>
 
     <button (click)="addCart(product)">+</button>
         <span>{{product.price.toLocaleString()}}</span>
  `,
  styles: [`:host {
    display:grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    }
  `]
})
export class ProductComponent  {
  @Input() product: any;
  @Output() addToCart  = new EventEmitter();
  addCart(product) {
     this.addToCart.emit(product)
  }
}
