/* tslint:disable:no-unused-variable */

import {fakeAsync, tick} from "@angular/core/testing";
import { TestBed, async, inject } from '@angular/core/testing';
import { ToolsRoomService } from './tools-room.service';
import {ReflectiveInjector} from "@angular/core";
import {ConnectionBackend, BaseRequestOptions, Http, RequestOptions, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import { TOOLS_ROOMS } from '../../mocks/ToolsRoomData'
import {ToolsRoom} from "../../modules/ToolsRoom";

describe('ToolsRoomService', () => {

  let toolRoomsService: ToolsRoomService;
  let backend:MockBackend;
  let lastConnection:MockConnection;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolsRoomService]
    });

    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      ToolsRoomService,
    ]);

    toolRoomsService = this.injector.get(ToolsRoomService);
    backend = this.injector.get(ConnectionBackend) as MockBackend;
    backend.connections.subscribe((connection: MockConnection) => lastConnection = connection);
  });

  it('should ...', function () {
    expect(toolRoomsService).toBeTruthy();
  })


  it('setCurrentToolsRoom() should set given id as the current toolsRoom', fakeAsync(() => {
    let toolRoom = new ToolsRoom(7809,'חדר כלים תל נוף דת"ק 1');
    toolRoomsService.setCurrentToolsRoom(toolRoom);
    expect(toolRoomsService.getCurrentToolsRoom()).toEqual(toolRoom);
  }))


  it('getAllToolRooms() should bring me all tool rooms', fakeAsync(() => {
    let allToolRooms: ToolsRoom[];
    toolRoomsService.getAllToolRooms().subscribe((toolRooms:ToolsRoom[]) => allToolRooms = toolRooms);
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(TOOLS_ROOMS)
    })))

    tick();
    expect(allToolRooms).toEqual(TOOLS_ROOMS);
  }))
});
