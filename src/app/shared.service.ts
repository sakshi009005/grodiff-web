import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  private isRemovedFromCart = new BehaviorSubject({});
  isRemovedFromCartObservable = this.isRemovedFromCart.asObservable();

  constructor(private cookieService: CookieService) { }

  setSearchItem(data: string) {
    this.searchItem.next(data);
  }

  setIsRemovedFromCartObservable(product:Product) {
    this.isRemovedFromCart.next(product);
  }

  public addProductToCart(product: Product) {
    if (product.productSource == 'BIG_BASKET') {
      this.bigBasketCart = this.getBigBasketCartFromCookie();
      this.bigBasketCart.push(product);
      this.cookieService.set('bigBasketCart', JSON.stringify(this.bigBasketCart));
    }

    if (product.productSource == 'BLINK_IT') {
      this.blinkItCart = this.getBlinkItCartFromCookie();
      this.blinkItCart.push(product);
      this.cookieService.set('blinkItCart', JSON.stringify(this.blinkItCart));
    }

    if (product.productSource == 'ZEPTO') {
      this.zeptoCart = this.getZeptoCartFromCookie();
      this.zeptoCart.push(product);
      this.cookieService.set('zeptoCart', JSON.stringify(this.zeptoCart));
    }
  }

  public removeProductFromCart(product: Product) {
    if (product.productSource == 'BIG_BASKET') {
      this.bigBasketCart = this.bigBasketCart.filter(p => p.productId != product.productId);
      this.removeBigBasketCookie(product);
    }

    if (product.productSource == 'BLINK_IT') {
      this.blinkItCart = this.blinkItCart.filter(p => p.productId != product.productId);
      this.removeBlinkItCookie(product);
    }

    if (product.productSource == 'ZEPTO') {
      this.zeptoCart = this.zeptoCart.filter(p => p.productId != product.productId);
      this.removeZeptoCookie(product);
    }
  }

  private removeBigBasketCookie(product: Product) {
    let bigBasketCart = this.getBigBasketCartFromCookie();
    if (bigBasketCart) {
      this.cookieService.set('bigBasketCart', JSON.stringify(bigBasketCart
        .filter(((p: { productId: any; }) => p.productId != product.productId))));
    }
  }

  public getBigBasketCartFromCookie() {
    let bigBasketCookie = this.cookieService.get('bigBasketCart');
    let bigBasketCart: Product[] = [];
    if (bigBasketCookie) {
      bigBasketCart = JSON.parse(bigBasketCookie);
    }
    return bigBasketCart;
  }

  public getBlinkItCartFromCookie() {
    let blinkItCookie = this.cookieService.get('blinkItCart');
    let blinkItCart: Product[] = [];
    if (blinkItCookie) {
      blinkItCart = JSON.parse(blinkItCookie);
    }
    return blinkItCart;
  }

  public getZeptoCartFromCookie() {
    let zeptoCookie = this.cookieService.get('zeptoCart');
    let zeptoCart: Product[] = [];
    if (zeptoCookie) {
      zeptoCart = JSON.parse(zeptoCookie);
    }
    return zeptoCart;
  }

  private removeBlinkItCookie(product: Product) {
    let blinkItCookie = this.cookieService.get('blinkItCart');
    if (blinkItCookie) {
      this.cookieService.set('blinkItCart', JSON.stringify(JSON.parse(blinkItCookie).filter(((p: { productId: any; }) => p.productId != product.productId))));
    }
  }

  private removeZeptoCookie(product: Product) {
    let zeptoCookie = this.cookieService.get('zeptoCart');
    if (zeptoCookie) {
      this.cookieService.set('zeptoCart', JSON.stringify(JSON.parse(zeptoCookie).filter(((p: { productId: any; }) => p.productId != product.productId))));
    }
  }
}
