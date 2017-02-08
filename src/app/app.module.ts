import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import {LoansService} from "./providers/loans.service";
import { LoansComponent } from './loans/loans.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueItemComponent } from './issue-item/issue-item.component';
import {IssueService} from "./providers/issue.service";

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    IssuesComponent,
    IssueItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoansService, IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
