import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-product',
  template: `
     <h1>{{product.name}}</h1>
     <input type="number" [(ngModel)]="product.num" (ngModelChange)="modelChanged($event)" min="0"/>
  `,
  styles: [`:host {
    display:grid;
    grid-template-columns: 1fr 25px;
    align-items: center;
    }
  `]
})
export class CartProductComponent  {
  @Input() product: any;
  @Output() removeFromCart = new EventEmitter();
  
  modelChanged($event) {
    if (!this.product.num) {
      this.removeFromCart.emit(this.product)
    }
  }

}
