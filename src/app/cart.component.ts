import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart',
  template: `
     <h1>Products in the cart: {{calcTotal()}}</h1>
     <section>
      <cart-product *ngFor="let product of products" [product]="product" (removeFromCart)="removeCart($event)">
      </cart-product>
     </section>
     <footer>total:{{calcTotalPrice()}}</footer>
  `,
  styles: [`
  :host {
    display: grid;
    grid-template-rows:  auto 1fr 33px;
    
  }
  h1 { font-family: Lato; text-align: center }
  section {}
  `]
})
export class CartComponent  {

  @Output() removeFromCart = new EventEmitter();
  @Input() products: any[];

  calcTotal() {
    return this.products.reduce((acc, pr) => acc+= pr.num , 0);
  }

  removeCart(product) {
     this.removeFromCart.emit(product);
  }

  calcTotalPrice(){
    return this.products.reduce((acc, pr) => acc+= pr.price* pr.num , 0).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }
}
