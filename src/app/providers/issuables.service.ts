import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Issuable} from "../classes/issueable";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';



@Injectable()
export class IssuablesService {

  constructor(private http:Http) { }


  getAllIssuables() : Observable<Issuable[]> {
    return this.http.get('/api/Issuables')
      .map(response => response.json())
      .map(arr => arr.map(o => new Issuable(o.id, o.name, o.type, o.tools, o.owner)));
  }
}
