import {Injectable} from '@angular/core';

export interface GoodItem {
  id: number;
  name: string;
  label: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor() {
  }

  getList(): GoodItem[] {
    return [{
      id: 1,
      name: 'article 1',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 25
    },
      {
        id: 2,
        name: 'article 2',
        // tslint:disable-next-line:max-line-length
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 35
      },
      {
        id: 3,
        name: 'article 3',
        // tslint:disable-next-line:max-line-length
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 45
      }];

  }

}
