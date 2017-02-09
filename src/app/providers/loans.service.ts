import { Injectable } from '@angular/core';
import {Loan} from "../classes/loan";
import {Issuable} from "../classes/issueable";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ToolRoom} from "../classes/tool-room";
import {TOOLS_ROOMS} from "../mocks/ToolsRoomData";


@Injectable()
export class LoansService {

  externalLoans:Array<Loan> = [];
  toolRoom:ToolRoom = TOOLS_ROOMS[0];

  constructor(private http:Http) {  }

  private createLoan(issuable: number[], loaneeId: number):Observable<String> {
    let bodyString = JSON.stringify({issueable: issuable, loaneeId: loaneeId});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let url = 'toolsRoom/' + this.toolRoom.id + '/loans';

    return this.makePostRequest.call(url, bodyString, options);
  };

  private makePostRequest(url, bodyString, options) {
    return this.http.post(url, bodyString, options)
      .map((res: Response) => res.text())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
}

  loan(issuables: Issuable[], loaneeId: number) {
    this.createLoan(issuables.map(i => i.id), loaneeId).subscribe((id) => this.externalLoans.push(new Loan(Number(id), issuables.map(i => i.id), false, Loan.LOANER)),
      (err) => console.log(err));
  };
}
