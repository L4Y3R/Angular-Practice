import { ItemOffer } from './offer';

export interface Item {
  id: number;
  label: string;
  description: string;
  price: number;
  count: number;
  imageUrl: string;
  offer?: ItemOffer;
}
