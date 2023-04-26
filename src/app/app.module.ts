import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { GrodiffHeaderComponent } from './grodiff-header/grodiff-header.component';
import { GrodiffTabularGridComponent } from './grodiff-tabular-grid/grodiff-tabular-grid.component';
import { GrodiffSearchResultsComponent } from './grodiff-search-results/grodiff-search-results.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GrodiffHeaderComponent,
    GrodiffTabularGridComponent,
    GrodiffSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
