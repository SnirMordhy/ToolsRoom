import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import {LoansService} from "./providers/loans.service";
import { LoansComponent } from './loans/loans.component';
import { ToolsRoomService } from '../app/providers/toolsRoomService/tools-room.service'

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
  providers: [LoansService, ToolsRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
