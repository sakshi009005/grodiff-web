import { Component, DoCheck, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-grodiff-header',
  templateUrl: './grodiff-header.component.html',
  styleUrls: ['./grodiff-header.component.css']
})
export class GrodiffHeaderComponent implements DoCheck {

  constructor(private sharedService: SharedService) { }
  isOpenCart: boolean = false;

  @Input() city = '';
  @Input() zipCode = '';
  searchText: string = '';

  isCartEmpty: boolean = false;

  public performSearch() {
    this.sharedService.setSearchItem(this.searchText);
  }

  ngDoCheck(): void {
    this.isCartEmpty = this.sharedService.getBigBasketCartFromCookie()?.length == 0 && this.sharedService.getBlinkItCartFromCookie()?.length == 0
      && this.sharedService.getZeptoCartFromCookie()?.length == 0;
  }

  comapreCarts() {
    this.isOpenCart = !this.isOpenCart;
  }
}
