import { Component, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from '../Products';

@Component({
  selector: 'app-grodiff-compare-cart',
  templateUrl: './grodiff-compare-cart.component.html',
  styleUrls: ['./grodiff-compare-cart.component.css']
})
export class GrodiffCompareCartComponent implements DoCheck {

  bigBasketCart: Product[] = [];
  zeptoCart: Product[] = [];
  blinkItCart: Product[] = [];

  bigBasketTotal: number = 0;
  blinkItTotal: number = 0;
  zeptoTotal: number = 0;

  constructor(private cookieService: CookieService) { }

  ngDoCheck(): void {
    this.populateBigBasketCart();
    this.populateBlinkItCart();
    this.populateZeptoCart();
  }


  private populateBigBasketCart() {
    let bigBasketCookie = this.cookieService.get('bigBasketCart');
    if (bigBasketCookie) {
      this.bigBasketCart = JSON.parse(bigBasketCookie);
    }
    this.bigBasketTotal = 0;
    this.bigBasketCart.forEach(p => this.bigBasketTotal = this.bigBasketTotal + Number(p.price));
  }

  private populateBlinkItCart() {
    let blinkItCookie = this.cookieService.get('blinkItCart');
    if (blinkItCookie) {
      this.blinkItCart = JSON.parse(blinkItCookie);
    }
    this.blinkItTotal = 0;
    this.blinkItCart.forEach(p => this.blinkItTotal = this.blinkItTotal + Number(p.price));
  }

  private populateZeptoCart() {
    let zeptoCookie = this.cookieService.get('zeptoCart');
    if (zeptoCookie) {
      this.zeptoCart = JSON.parse(zeptoCookie);
    }
    this.zeptoTotal = 0;
    this.zeptoCart.forEach(p => this.zeptoTotal = this.zeptoTotal + Number(p.price));
  }
}
