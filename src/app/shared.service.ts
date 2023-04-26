import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './Products';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private searchItem = new BehaviorSubject("");
  searchItemObservable = this.searchItem.asObservable();
  bigBasketCart: Product[] = [];
  zeptoCart: Product[] = [];
  blinkItCart: Product[] = [];

  constructor() { }

  setSearchItem(data: string) {
    this.searchItem.next(data);
  }

  public addProductToCart(product: Product) {
    if (product.productSource == 'BIG_BASKET') {
      this.bigBasketCart.push(product);
    }

    if (product.productSource == 'BLINK_IT') {
      this.blinkItCart.push(product);
    }

    if (product.productSource == 'ZEPTO') {
      this.zeptoCart.push(product);
    }
  }

  public removeProductFromCart(product: Product) {
    if (product.productSource == 'BIG_BASKET') {
      this.bigBasketCart = this.bigBasketCart.filter(p => p.productId != product.productId);
    }

    if (product.productSource == 'BLINK_IT') {
      this.blinkItCart = this.blinkItCart.filter(p => p.productId != product.productId);
    }

    if (product.productSource == 'ZEPTO') {
      this.zeptoCart = this.zeptoCart.filter(p => p.productId != product.productId);
    }
  }
}
