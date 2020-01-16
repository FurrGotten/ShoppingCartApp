import { Component, OnInit } from '@angular/core';
import { faShoppingBasket, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { GoodsService, GoodItem } from '../goods.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;
  faCircleNotch = faCircleNotch;

  goods: GoodItem[] = this.goodsModel.getList();

  constructor(private goodsModel: GoodsService, private shoppingCart: ShoppingCartService) {

  }

  ngOnInit() {
  }

}
