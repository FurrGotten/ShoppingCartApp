import { Injectable } from '@angular/core';

import { GoodItem } from './goods.service';

interface CartItem {
  good: GoodItem;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart: CartItem[] = [];

  constructor() { }

  private findGoodIndex(goodId: number): number{
    return this.cart.findIndex(el => el.good.id === goodId);
  }

  add(good: GoodItem){
    const goodIdx = this.findGoodIndex(good.id);
    if (goodIdx === -1){
      this.cart.push({good, quantity: 1});
    } else {
      this.cart[goodIdx].quantity++;
    }
  }

  remove(goodId: number) {
    const goodIdx = this.findGoodIndex(goodId);
    if (goodIdx !== -1) {
      if (this.cart[goodIdx].quantity > 1) {
        this.cart[goodIdx].quantity--;
      } else {
        this.cart.splice(goodIdx, 1);
      }
    }
  }

  isInCart(goodId: number): boolean {
    const goodIdx = this.findGoodIndex(goodId);
    return goodIdx !== -1;
  }

  empty(){
    this.cart = [];
  }

  orderSum(): number {
    let sum = 0;
    for (const cartItem of this.cart) {
      sum += cartItem.quantity * cartItem.good.price;
    }
    return sum;
  }


}
