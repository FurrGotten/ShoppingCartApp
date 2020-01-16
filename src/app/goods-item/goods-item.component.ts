import { Component, OnInit, Input } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { ShoppingCartService } from '../shopping-cart.service';
import { GoodItem } from '../goods.service';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.css']
})
export class GoodsItemComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;

  @Input()
  good: GoodItem;

  constructor(private shoppingCart: ShoppingCartService) {  }

  ngOnInit() {
  }

}
