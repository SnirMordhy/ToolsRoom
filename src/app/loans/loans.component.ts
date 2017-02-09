import {Component, OnInit} from '@angular/core';
import {ReturnedLoan, ReceivedLoan} from "../classes/loan";
import {LoansService} from "../providers/loans.service";

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  returnedLoans: Array<ReturnedLoan> = [];
  receivedLoans: Array<ReceivedLoan> = [];

  constructor(private loansService:LoansService) {
    this.returnedLoans.push(new ReturnedLoan(1, [1, 2, 3], true));
    this.returnedLoans.push(new ReturnedLoan(2, [4, 5, 6], false));
    this.receivedLoans.push(new ReceivedLoan(3, [7, 8, 9], true));
    this.receivedLoans.push(new ReceivedLoan(4, [10, 11, 12], false));
  }

  ngOnInit() {

  }

}
