import {Injectable} from '@angular/core';

import {GoodItem} from './goods.service';

export interface CartItem {
  good: GoodItem;
  quantity: number;
}

const STORAGE_KEY = 'shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart: CartItem[] = [];

  constructor() {
    this.loadFromStorage();
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  empty() {
    length = this.cart.length;
    this.cart.splice(0, length);
    this.saveToStorage();
  }

  private findGoodIndex(goodId: number): number {
    return this.cart.findIndex(el => el.good.id === goodId);
  }

  add(good: GoodItem) {
    const goodIdx = this.findGoodIndex(good.id);
    if (goodIdx === -1) {
      this.cart.push({good, quantity: 1});
    } else {
      this.cart[goodIdx].quantity++;
    }
    this.saveToStorage();
  }

  remove(goodId: number, keepLastItem?: boolean) {
    const goodIdx = this.findGoodIndex(goodId);
    if (goodIdx !== -1) {
      if (this.cart[goodIdx].quantity > 1) {
        this.cart[goodIdx].quantity--;
      } else {
        if (keepLastItem) {
          this.cart[goodIdx].quantity = 0;
        } else {
          this.cart.splice(goodIdx, 1);
        }
      }
    }
    this.saveToStorage();
  }

  isInCart(goodId: number): boolean {
    const goodIdx = this.findGoodIndex(goodId);
    return goodIdx !== -1;
  }

  getOrderSum(): number {
    let sum = 0;
    for (const cartItem of this.cart) {
      sum += cartItem.quantity * cartItem.good.price;
    }
    return sum;
  }

  getOrderQuantity(): number {
    let sum = 0;
    for (const cartItem of this.cart) {
      sum += cartItem.quantity;
    }
    return sum;
  }

  updateEmpty() {
    this.cart = this.cart.filter(cartItem => cartItem.quantity > 0);
    this.saveToStorage();
  }

  private saveToStorage() {
      const cartString = JSON.stringify(this.cart);
      localStorage.setItem(STORAGE_KEY, cartString);
  }
  private loadFromStorage() {
    const cartString = localStorage.getItem(STORAGE_KEY);
    this.cart = JSON.parse(cartString) || [];
  }

}
