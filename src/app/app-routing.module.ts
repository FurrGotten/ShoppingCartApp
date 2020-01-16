import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsListComponent } from './goods-list/goods-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path: '', component: GoodsListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
