import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ShareableModule } from '../shareable/shareable.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ShareableModule],
})
export class OnlineShopModule {}
