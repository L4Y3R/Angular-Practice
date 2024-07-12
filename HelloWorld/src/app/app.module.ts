import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HighlightDirective } from './directives/highlight-directive';
import { ItemService } from './services/item.service';
import { ErrorHandleService } from './services/error-handle.service';
import { ShareableModule } from './modules/shareable/shareable.module';
import { CartModule } from './modules/cart/cart.module';
import { OnlineShopModule } from './modules/online-shop/online-shop.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShareableModule,
    CartModule,
    OnlineShopModule,
  ],
  providers: [ItemService, ErrorHandleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
