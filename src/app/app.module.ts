import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { GoodsItemComponent } from './goods-item/goods-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    ShoppingCartComponent,
    GoodsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
