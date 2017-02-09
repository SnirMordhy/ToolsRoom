/* tslint:disable:no-unused-variable */
import {fakeAsync, tick} from "@angular/core/testing";
import {IssuablesService} from "./issuables.service";
import {ReflectiveInjector} from "@angular/core";
import {
  ConnectionBackend, BaseRequestOptions, Http, RequestOptions, Response, ResponseOptions,
  RequestMethod
} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Issuable} from "../classes/issueable";
import {ISSUABLES} from "../mocks/IssuablesData";
import {ToolsRoom} from "../modules/ToolsRoom";
import {TOOLS_ROOMS} from "../mocks/ToolsRoomData";


describe('IssuablesService', () => {
  let issuablesService:IssuablesService;
  let backend:MockBackend;
  let connections:MockConnection[];

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      IssuablesService,
    ]);

    issuablesService = this.injector.get(IssuablesService);
    backend = this.injector.get(ConnectionBackend) as MockBackend;
    connections = [];
    backend.connections.subscribe((connection: MockConnection) => connections.push(connection));
  });

  it('getAllIssuables() should get issuables', fakeAsync(() => {
    let result: Issuable[];
    issuablesService.getAllIssuables(TOOLS_ROOMS[0]).subscribe((issuables:Issuable[]) => result = issuables);
    connections[0].mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(ISSUABLES),
    })));
    tick();
    expect(result).toEqual(ISSUABLES);
  }));

  it('getAllIssuables() should send a request to /api/v1/Issuables', fakeAsync(() => {
    issuablesService.getAllIssuables(TOOLS_ROOMS[0]);
    issuablesService.getAllIssuables(TOOLS_ROOMS[1]);
    tick();
    expect(connections[0].request.url).toBe('/api/v1/ToolsRooms/' + TOOLS_ROOMS[0].id + '/Issuables');
    expect(connections[1].request.url).toBe('/api/v1/ToolsRooms/' + TOOLS_ROOMS[1].id + '/Issuables');
    expect(connections[0].request.method).toEqual(RequestMethod.Get);
    expect(connections[1].request.method).toEqual(RequestMethod.Get);
  }));

  it('should get a single Issuable', fakeAsync(() => {
    let issuable : Issuable;
    issuablesService.getIssuable(1).subscribe(i => issuable = i);
    connections[0].mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(ISSUABLES[3]),
    })));
    tick();
    expect(issuable).toEqual(ISSUABLES[3]);
  }));

  it('should send a request to /api/v1/Issuables/:id to get a single Issuable', fakeAsync(() => {
    issuablesService.getIssuable(ISSUABLES[0].id);
    tick();
    expect(connections[0].request.url).toBe('/api/v1/Issuables/' + ISSUABLES[0].id);
    expect(connections[0].request.method).toEqual(RequestMethod.Get);
  }));

  it('updateIssuable() should send a put request to /api/v1/Issuables/:id to update the Issuable', fakeAsync(() => {
    issuablesService.updateIssuable(ISSUABLES[0]);
    issuablesService.updateIssuable(ISSUABLES[1]);
    tick();
    expect(connections[0].request.url).toBe('/api/v1/Issuables/' + ISSUABLES[0].id);
    expect(connections[1].request.url).toBe('/api/v1/Issuables/' + ISSUABLES[1].id);
    expect(connections[0].request.method).toEqual(RequestMethod.Put);
    expect(connections[1].request.method).toEqual(RequestMethod.Put);
  }));

  it('extendExpirationDate() should extend the expiration date of an issuable by 14 days', fakeAsync(() => {
    const TWO_WEEKS:number = 1000*60*60*24*14;
    let expirationDate:number = ISSUABLES[0].expirationDate;
    issuablesService.extendExpirationDate(ISSUABLES[0]);
    expect(ISSUABLES[0].expirationDate).toEqual(expirationDate + TWO_WEEKS);
  }));

  it('getAllExpiredIssuables() should return only issuables that are expired', fakeAsync(() => {
    let issuables:Issuable[];
    issuablesService.getAllExpiredIssuables(TOOLS_ROOMS[3]).subscribe((arr:Issuable[]) => issuables = arr);
    connections[0].mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(ISSUABLES),
    })));
    tick();
    issuables.forEach(i => expect(i.expirationDate).toBeLessThanOrEqual(Date.now()));
  }));

});
