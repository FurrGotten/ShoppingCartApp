import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsComponent } from './goods/goods.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path: '', component: GoodsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
