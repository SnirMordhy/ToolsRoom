import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Issuable} from "../classes/issueable";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {ToolsRoom} from "../modules/ToolsRoom";
import {isUndefined} from "util";



@Injectable()
export class IssuablesService {

  private issuables:Issuable[];

  constructor(private http:Http) { }


  getAllIssuables(toolsRoom:ToolsRoom) : Observable<Issuable[]> {
    let observable;
    if(isUndefined(this.issuables)) {
      observable = this.http.get('/api/v1/ToolsRooms/' + toolsRoom.id + '/Issuables')
        .map(response => response.json())
        .map(arr => arr.map(o => new Issuable(o.id, o.name, o.type, o.tools, o.owner, o.expirationDate)));
      observable.subscribe(arr => this.issuables = arr);
    } else {
      observable = Observable.of(this.issuables);
    }
    return observable;
  }

  getIssuable(id: number) : Observable<Issuable> {
    return this.http.get('/api/v1/Issuables/' + id)
      .map((response: Response) => response.json())
      .map(o => new Issuable(o.id, o.name, o.type, o.tools, o.owner, o.expirationDate));
  }

  updateIssuable(issuable: Issuable) {
    this.http.put('/api/v1/Issuables/' + issuable.id, issuable);
  }

  extendExpirationDate(issuable: Issuable) {
    const TWO_WEEKS:number = 1000*60*60*24*14;
    issuable.expirationDate = issuable.expirationDate + TWO_WEEKS;
    this.updateIssuable(issuable);
  }

  getAllExpiredIssuables(toolsRoom: ToolsRoom) : Observable<Issuable[]> {
    let observable:Observable<Issuable[]>;
    if(isUndefined(this.issuables)) {
      observable = Observable.create((observer) => {
        this.getAllIssuables(toolsRoom).subscribe((arr:Issuable[]) => {
          observer.next(arr.filter(i => i.expirationDate <= Date.now()));
        });
      });
    } else {
      observable = Observable.of(this.issuables.filter(i => i.expirationDate <= Date.now()));
    }
    return observable;
  }
}
