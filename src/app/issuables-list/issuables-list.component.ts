import { Component, OnInit } from '@angular/core';
import {Issuable} from "../classes/issueable";
import {IssuablesService} from "../providers/issuables.service";
import {ToolsRoomService} from "../providers/toolsRoomService/tools-room.service";
import {ISSUABLES} from "../mocks/IssuablesData";

@Component({
  selector: 'issuables-list',
  templateUrl: 'issuables-list.component.html',
  styleUrls: ['issuables-list.component.css']
})
export class IssuablesListComponent implements OnInit {

  issuables:Issuable[];

  constructor(private issuablesService:IssuablesService, private toolsRoomService:ToolsRoomService) { }

  ngOnInit() {
    this.issuables = ISSUABLES;
    // this.issuablesService.getAllIssuables(this.toolsRoomService.getCurrentToolsRoom())
    //   .subscribe(arr => this.issuables = arr);
  }

}
