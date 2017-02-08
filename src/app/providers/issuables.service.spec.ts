/* tslint:disable:no-unused-variable */
import {fakeAsync, tick} from "@angular/core/testing";
import {IssuablesService} from "./issuables.service";
import {ReflectiveInjector} from "@angular/core";
import {ConnectionBackend, BaseRequestOptions, Http, RequestOptions, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Issuable} from "../classes/issueable";
import {ISSUABLES} from "../mocks/IssuablesData";


describe('IssuablesService', () => {
  let issuablesService:IssuablesService;
  let backend:MockBackend;
  let lastConnection:MockConnection;

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      IssuablesService,
    ]);

    issuablesService = this.injector.get(IssuablesService);
    backend = this.injector.get(ConnectionBackend) as MockBackend;
    backend.connections.subscribe((connection: MockConnection) => lastConnection = connection);
  });

  it('getAllIssuables() should get issuables', fakeAsync(() => {
    let result: Issuable[];
    issuablesService.getAllIssuables().subscribe((issuables:Issuable[]) => result = issuables);
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(ISSUABLES),
    })));
    tick();
    expect(result).toEqual(ISSUABLES);
  }));

  it('getAllIssuables() should send a request to /api/Issuables', fakeAsync(() => {
    issuablesService.getAllIssuables();
    tick();
    expect(lastConnection.request.url).toBe('/api/Issuables');
  }));
});
