import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-grodiff-header',
  templateUrl: './grodiff-header.component.html',
  styleUrls: ['./grodiff-header.component.css']
})
export class GrodiffHeaderComponent {

  constructor(private sharedService: SharedService) { }

  @Input() city = '';
  @Input() zipCode = '';
  searchText: string = '';

  public performSearch() {
    this.sharedService.setSearchItem(this.searchText);
  }
}
