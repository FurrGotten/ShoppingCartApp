import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { GoodsService, GoodItem } from '../goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;

  goods = this.goodsModel.getList();

  constructor(private goodsModel: GoodsService) {

  }

  ngOnInit() {
    console.log(this.goodsModel.getList());
  }

}
