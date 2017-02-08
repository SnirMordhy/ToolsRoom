/* tslint:disable:no-unused-variable */

import {TestBed, async, inject, tick, fakeAsync} from '@angular/core/testing';
import { LoansService } from './loans.service';
import {MockBackend, MockConnection} from "@angular/http/testing";
import {ReflectiveInjector} from "@angular/core";
import {ConnectionBackend, RequestOptions, BaseRequestOptions, Http, Response, ResponseOptions} from "@angular/http";
import {TOOLS_ROOMS} from "../mocks/ToolsRoomData";
import {ISSUABLES} from "../mocks/IssuablesData";
import {Issuable} from "../classes/issueable";

describe('LoansService', () => {
  let loansService:LoansService;
  let backend:MockBackend;
  let lastConnection:MockConnection;

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      LoansService]);

    loansService = this.injector.get(LoansService);
    backend = this.injector.get(ConnectionBackend) as MockBackend;
    backend.connections.subscribe((connection: MockConnection) => lastConnection = connection);
  });

  it('should be able to loan one tool to another toolRoom',fakeAsync(()=>{
    let tool:Issuable = ISSUABLES[0];
    loansService.loan([tool], TOOLS_ROOMS[1].id);
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: 154,
    })));
    tick();
    expect(loansService.externalLoans.length).toBe(1);
  }));

  it('should be able to loan one tool to another toolRoom',fakeAsync(()=>{
    let tool:Issuable = ISSUABLES[0];
    loansService.loan([tool], TOOLS_ROOMS[1].id);
    lastConnection.mockRespond(new Response(new ResponseOptions({
      body: 154,
    })));
    tick();
    expect(loansService.externalLoans.length).toBe(1);
  }));

});
