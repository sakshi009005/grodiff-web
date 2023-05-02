import { Component, Input, OnInit, SimpleChanges, } from '@angular/core';
import { Product } from '../Products';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-grodiff-tabular-grid',
  templateUrl: './grodiff-tabular-grid.component.html',
  styleUrls: ['./grodiff-tabular-grid.component.css']
})
export class GrodiffTabularGridComponent implements OnInit {

  @Input() product: Product = {
    price: '',
    weight: '',
    imageUrl: '',
    name: '',
    productId: undefined,
    productSource: '',
    variants: []
  };

  @Input()
  removedCartProduct:any={};

  addItem: boolean = true;

  @Input()
  isComareCartView: boolean = false;


  variantPrice: string = '';
  variantWeight: string = '';

  bigBasketCart: Product[] = [];
  zeptoCart: Product[] = [];
  blinkItCart: Product[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.variantPrice = this.product?.variants ? this.product?.variants[0]?.price : '';
    this.variantWeight = this.product?.variants ? this.product?.variants[0]?.weight : '';
    this.updateToggle();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateToggle();
}

  updateToggle() {
    if (this.product?.productSource == "BIG_BASKET") {
      this.sharedService.getBigBasketCartFromCookie().forEach(p => {
        if (p?.productId == this.product?.productId) {
          this.addItem = false;
          return;
        }        
      })
    }

    if (this.product?.productSource == "BLINK_IT") {
      this.sharedService.getBlinkItCartFromCookie().forEach(p => {
        if (p?.productId == this.product?.productId) {
          this.addItem = false;
          return;
        }
      })
    }

    if (this.product?.productSource == "ZEPTO") {
      this.sharedService.getZeptoCartFromCookie().forEach(p => {
        if (p?.productId == this.product?.productId) {
          this.addItem = false;
          return;
        }
      })
    }
    
    this.refreshBtn();
  }

  private refreshBtn() {
    if (this.removedCartProduct?.productId == this.product?.productId) {
      this.addItem = true;
    }
  }

  getSelectedValue(variant: Product) {
    this.variantPrice = variant.price;
    this.variantWeight = variant.weight;
  }

  addSelectedItem() {
    this.addItem = !this.addItem;
    let product: Product = {
      price: this.variantPrice ? this.variantPrice : this.product?.price,
      weight: this.variantWeight ? this.variantWeight : this.product?.weight,
      imageUrl: this.product?.imageUrl,
      name: this.product?.name,
      productId: this.product?.productId,
      variants: [],
      productSource: this.product?.productSource
    }
    if (!this.addItem) {
      this.sharedService.addProductToCart(product);
    } else {
      this.sharedService.removeProductFromCart(product);
      this.removedFromCart(product);
    }
  }

  removedFromCart(product:Product) {
   if(this.isComareCartView){
    this.sharedService.setIsRemovedFromCartObservable(product);
   }
  }
}
