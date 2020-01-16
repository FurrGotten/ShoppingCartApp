import { Component, OnInit } from '@angular/core';

import { ShoppingCartService, CartItem } from '../shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[];

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {
    this.cartItems = this.shoppingCart.getCart();
  }

}
