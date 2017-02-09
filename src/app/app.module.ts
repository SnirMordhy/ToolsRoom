import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AccordionModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { LoansService } from "./providers/loans.service";
import { LoansComponent } from './loans/loans.component';
import { ReturnedLoanComponent } from './loans/returned-loan/returned-loan.component';
import { ReceivedLoanComponent } from './loans/received-loan/received-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    ReturnedLoanComponent,
    ReceivedLoanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AccordionModule.forRoot()
  ],
  providers: [LoansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
