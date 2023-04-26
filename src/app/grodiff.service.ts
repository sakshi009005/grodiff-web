import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './Products';
import { ZeptoRequest } from './ZeptoRequest';

@Injectable({
  providedIn: 'root'
})
export class GrodiffService {

  constructor(private http: HttpClient) { }

  bbUrl = 'http://localhost:8084/bb/search?query=';
  blinkItUrl='http://localhost:8084/blink-it/search?query=';
  zeptoUrl='http://localhost:8084/zepto/search';

getBigBasketProducts(searchItem:string) {
  return this.http.get<Products>(this.bbUrl+searchItem);
}

getBlinkItProducts(searchItem:string) {
  return this.http.get<Products>(this.blinkItUrl+searchItem+'&lat=12.8905808&lon=77.6426413');
}

getZeptoProducts(ZeptoRequest:ZeptoRequest) {
  return this.http.post<Products>(this.zeptoUrl,ZeptoRequest);
}
}
