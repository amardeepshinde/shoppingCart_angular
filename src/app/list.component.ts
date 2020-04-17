import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list',
  template: `
     <h1> Products:</h1>
     <product *ngFor="let product of products" [product]="product" (addToCart)="addCart(product)"></product>
  `,
  styles: [`h1 { font-family: Lato; text-align: center }`]
})
export class ListComponent  {
  @Input() products: any[];
  @Output() addToCart  = new EventEmitter();
  addCart(product) {
     this.addToCart.emit(product);
  }
}
