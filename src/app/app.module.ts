import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import{ AccordionModule} from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import {LoansService} from "./providers/loans.service";
import { LoansComponent } from './loans/loans.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueItemComponent } from './issue-item/issue-item.component';
import { ToolsRoomService } from '../app/providers/toolsRoomService/tools-room.service';
import { ToolsRoomComponent } from './components/tools-room/tools-room.component'
import {SelectModule} from '../../node_modules/ng2-select';
import { ToolsRoomService } from '../app/providers/toolsRoomService/tools-room.service'
import {IssueService} from "./providers/issue.service";
import {IssuablesService} from "./providers/issuables.service";
import {IssuablesListComponent} from "./issuables-list/issuables-list.component";
import {IssuableComponent} from "./issuable/issuable.component";

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    IssuesComponent,
    IssueItemComponent,
    ToolsRoomComponent,
    SelectModule,
    IssuablesListComponent,
    IssuableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AccordionModule.forRoot()
  ],
  providers: [LoansService,IssueService, ToolsRoomService, IssuablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
