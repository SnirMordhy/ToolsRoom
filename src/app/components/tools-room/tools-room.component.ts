import { Component, OnInit } from '@angular/core';
import { TOOLS_ROOMS } from '../../mocks/ToolsRoomData'
import { ToolsRoomService } from '../../providers/toolsRoomService/tools-room.service'
import {ToolsRoom} from "../../modules/ToolsRoom";


@Component({
  selector: 'app-tools-room',
  templateUrl: './tools-room.component.html',
  styleUrls: ['./tools-room.component.css']
})
export class ToolsRoomComponent implements OnInit {

  toolsRoom: String[];

  constructor(private toolsRoomServcce: ToolsRoomService) {
  }

  ngOnInit() {
    this.toolsRoom = TOOLS_ROOMS.map(tr => tr.name);
  }

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

}
