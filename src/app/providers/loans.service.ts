import { Injectable } from '@angular/core';
import {Loan,ReceivedLoan,ReturnedLoan} from "../classes/loan";
import {Issuable} from "../classes/issueable";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ToolRoom} from "../classes/tool-room";
import {TOOLS_ROOMS} from "../mocks/ToolsRoomData";


@Injectable()
export class LoansService {

  returnedLoans:Array<Loan> = [];
  receivedLoans:Array<Loan> = [];
  toolRoom:ToolRoom = TOOLS_ROOMS[0];

  options = new RequestOptions(
    {headers: new Headers({'Content-Type': 'application/json'})}
  );

  constructor(private http:Http) {
    this.http = http;
    /*this.getAllReceivedLoans().subscribe((res)=>{
     this.receivedLoans.push(new ReceivedLoan(res.id, res.issueables, res.isReceiveApproved))
     });
     this.getAllReturnedLoans().subscribe((res)=>{
     this.returnedLoans.push(new ReturnedLoan(res.id, res.issueables, res.isReturnApproved))
     });*/
  }

  public loan(issuables: Issuable[], loaneeId: number) {
    this.createLoan(issuables.map(i => i.id), loaneeId).subscribe((res) => {},
      (err) => console.log(err));
  };

  public approveReceivedLoan(loan: ReceivedLoan) {
    let receivedLoan = new ReceivedLoan(loan.id, loan.issueables, true);
    let {bodyString, url} = this.generatePutData(receivedLoan);
    this.makePutRequest(url,bodyString).subscribe((res)=>{loan.setIsReceivedApproved(true)},
      (err)=>{console.log(err)});
  }

  public acceptReturnedLoan(loan: ReturnedLoan) {
    let returnedLoan = new ReturnedLoan(loan.id, loan.issueables, true);
    let {bodyString, url} = this.generatePutData(returnedLoan);
    this.makePutRequest(url,bodyString).subscribe((res) => { this.removeLoanFromList(loan, this.returnedLoans)},
      (err)=>{console.log(err)});
  }

  public returnLoan(loan: ReturnedLoan) {
    this.deleteReceivedLoan(loan).subscribe((res)=>{
      this.removeLoanFromList(loan, this.receivedLoans)});
  }

  public getAllReceivedLoans()
  {
    return this.http.get(`toolsRoom/${this.toolRoom.id}/receivedLoans`)
      .map((res: Response) => res.json())
      .catch((error: any) => this.throwObservableServerError(error));
  }

  public getAllReturnedLoans()
  {
    return this.http.get(`toolsRoom/${this.toolRoom.id}/returnedLoans`)
      .map((res: Response) => res.json())
      .catch((error: any) => this.throwObservableServerError(error));
  }

  private deleteReceivedLoan(loan: Loan) {
    return this.http.delete(`loans/${loan.id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => this.throwObservableServerError(error));
  }

  private makePutRequest(url: string, bodyString: string) {
    return this.http.put(url, bodyString, this.options);
  }

  private generatePutData(loan: Loan) {
    let bodyString = JSON.stringify(loan);
    let url = `loans/${loan.getId()}`;
    return {url, bodyString};
  }

  private createLoan(issuable: number[], loaneeId: number):Observable<String> {
    let {url, bodyString} = this.generatePostData({issueable: issuable, loaneeId: loaneeId});
    return this.makePostRequest(url, bodyString, this.options);
  }

  private generatePostData(object: Object) {
    let bodyString = JSON.stringify(object);
    let url = `toolsRoom/${this.toolRoom.id}/loans`;
    return {url, bodyString};
  }

  private makePostRequest(url: string, bodyString: string, options: RequestOptions) {
    return this.http.post(url, bodyString, options)
      .map((res: Response) => res.text())
      .catch((error: any) => this.throwObservableServerError(error));
  }

  private throwObservableServerError(error: any) {
    return Observable.throw(error.json().error || 'Server error');
  }

  private removeLoanFromList(loan: ReturnedLoan, list: Array<Loan>) {
    list.splice(list.indexOf(loan), 1);
  }
}
