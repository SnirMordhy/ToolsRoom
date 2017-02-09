import {Component, OnInit, Input} from '@angular/core';
import {ReceivedLoan} from "../../classes/loan";
import {LoansService} from "../../providers/loans.service";
import {EventListener} from "@angular/platform-browser/src/facade/browser";
import {ISSUABLES} from "../../mocks/IssuablesData";

@Component({
  selector: 'app-received-loan',
  templateUrl: './received-loan.component.html',
  styleUrls: ['./received-loan.component.css']
})
export class ReceivedLoanComponent implements OnInit {

  @Input() receivedLoan:ReceivedLoan;

  constructor(private loansService:LoansService) {

  }

  ngOnInit() {

  }

  returnToolName(id:number){
    return ISSUABLES.filter(i=>i.id==id)[0].name;
  }

}
