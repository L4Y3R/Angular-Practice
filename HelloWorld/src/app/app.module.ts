import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { HighlightDirective } from './directives/highlight-directive';
import { ItemService } from './services/item.service';
import { UnitPipePipe } from './pipes/unit-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MenuButtonComponent,
    ItemCardComponent,
    HighlightDirective,
    UnitPipePipe,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
