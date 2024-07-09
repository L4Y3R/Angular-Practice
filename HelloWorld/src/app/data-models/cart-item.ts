import { Item } from './items';

export interface CartItem extends Item {
  quantity: number;
}
