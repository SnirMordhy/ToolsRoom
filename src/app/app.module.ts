import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import {LoansService} from "./providers/loans.service";
import { LoansComponent } from './loans/loans.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
