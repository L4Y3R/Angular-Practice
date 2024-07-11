import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { UnitPipePipe } from './pipes/unit-pipe.pipe';

@NgModule({
  declarations: [ItemCardComponent, MenuButtonComponent, UnitPipePipe],
  imports: [CommonModule],
  exports: [ItemCardComponent, MenuButtonComponent],
})
export class ShareableModule {}
