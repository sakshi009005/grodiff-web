import { Component, DoCheck, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  location: any;
  geolocation_api_key = '5635cff196fd4af8b34bd2267c811b20';
  google_api_key = 'AIzaSyCFH0VkNCniE_kimzkH2Zls_udbY-lbWL8';

  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.geolocation_api_key;

  isCartEmpty: boolean = false;

  constructor(private http: HttpClient, private sharedService: SharedService) {
  }

  ngDoCheck(): void {
    this.isCartEmpty = this.sharedService.getBigBasketCartFromCookie()?.length == 0 && this.sharedService.getBlinkItCartFromCookie()?.length == 0
      && this.sharedService.getZeptoCartFromCookie()?.length == 0;
  }

  ngOnInit(): void {
    this.getGeolocationData();
  }



  getGeolocationData() {
    this.http.get(this.url).subscribe((response: any) => {
      console.log(response);
      this.location = response;
    });
  }

}
