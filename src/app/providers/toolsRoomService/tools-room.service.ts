import { Injectable } from '@angular/core';
import {ToolsRoom} from "../../modules/ToolsRoom";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {isUndefined} from "util";

@Injectable()
export class ToolsRoomService {

  private baseUrl = "localhost:4200";
  private currentToolsRoom: ToolsRoom;

  constructor(private http: Http) {
    this.currentToolsRoom = new ToolsRoom(null, null);
  }

  getCurrentToolsRoom(): ToolsRoom{
    return this.currentToolsRoom;
  }

  setCurrentToolsRoom(toolRoomForSet: ToolsRoom): void {
    this.currentToolsRoom = toolRoomForSet;
    /*let toolRooms: ToolsRoom[];
    this.getAllToolRooms().subscribe(toolRooms => {
      toolRooms = toolRooms.filter(element => element === toolRoomForSet);

      if(!isUndefined(toolRooms[0])){
        //this.http.put(this.baseUrl + "/toolsRoom", this.currentToolsRoom);
        this.currentToolsRoom = toolRooms[0];
      }
    })*/
  }

  getAllToolRooms(): Observable<ToolsRoom[]>{
    return this.http.get(this.baseUrl + '/ToolRooms')
      .map(response => response.json())
      .map(array => array.map(tr => new ToolsRoom(tr.id, tr.name)));
  }
}
