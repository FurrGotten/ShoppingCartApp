import { Component, OnInit } from '@angular/core';
import { faShoppingBasket, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { GoodsService, GoodItem } from '../goods.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;
  faPlus = faPlus;
  faMinus = faMinus;

  goods: GoodItem[] = this.goodsModel.getList();

  constructor(private goodsModel: GoodsService, private shoppingCart: ShoppingCartService) {

  }

  ngOnInit() {
    console.log(this.goodsModel.getList());
  }

}
