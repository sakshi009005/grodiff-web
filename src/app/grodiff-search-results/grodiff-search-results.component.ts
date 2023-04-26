import { Component, OnInit } from '@angular/core';
import { GrodiffService } from '../grodiff.service';
import { Products } from '../Products';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-grodiff-search-results',
  templateUrl: './grodiff-search-results.component.html',
  styleUrls: ['./grodiff-search-results.component.css']
})
export class GrodiffSearchResultsComponent implements OnInit {
  bigBasketProducts!: Products;
  blinkItProducts!: Products;
  zeptoProducts!: Products;
  searchItem: string = '';

  isBigBasketProductsLoaded: boolean = false;
  isBlinkItProductsLoaded: boolean = false;
  isZeptoProductsLoaded: boolean = false;
  constructor(private grodiffService: GrodiffService, private sharedService: SharedService) { }
  ngOnInit(): void {
    this.sharedService.searchItemObservable.subscribe(searchItem => {
      this.searchItem = searchItem;
      this.resetProducts();
      this.getBigBasketProducts();
      this.getBlinkItProducts();
      this.getZeptoProducts();
    })
  }

  resetProducts() {
    this.isBigBasketProductsLoaded = false;
    this.isBlinkItProductsLoaded = false;
    this.isZeptoProductsLoaded = false;
    this.bigBasketProducts = {
      products: []
    };
    this.blinkItProducts = {
      products: []
    };
    this.zeptoProducts = {
      products: []
    };
  }

  getBigBasketProducts() {
    if (this.searchItem?.length > 0) {
      this.grodiffService.getBigBasketProducts(this.searchItem)
        .subscribe((data: Products) => {
          this.isBigBasketProductsLoaded = true;
          this.bigBasketProducts = data
        });
    }
  }

  getBlinkItProducts() {
    if (this.searchItem?.length > 0) {
      this.grodiffService.getBlinkItProducts(this.searchItem)
        .subscribe((data: Products) => {
          this.isBlinkItProductsLoaded = true;
          this.blinkItProducts = data
        });
    }
  }

  getZeptoProducts() {
    if (this.searchItem?.length > 0) {
      this.grodiffService.getZeptoProducts({ query: this.searchItem, cityName: 'Bengaluru' })
        .subscribe((data: Products) => {
          this.isZeptoProductsLoaded = true;
          this.zeptoProducts = data
        });
    }
  }
}
