import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { GrodiffHeaderComponent } from './grodiff-header/grodiff-header.component';
import { GrodiffTabularGridComponent } from './grodiff-tabular-grid/grodiff-tabular-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GrodiffHeaderComponent,
    GrodiffTabularGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
