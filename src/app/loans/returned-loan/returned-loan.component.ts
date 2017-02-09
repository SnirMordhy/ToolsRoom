import {Component, OnInit, Input} from '@angular/core';
import {ReturnedLoan} from "../../classes/loan";
import {ISSUABLES} from "../../mocks/IssuablesData";

@Component({
  selector: 'app-returned-loan',
  templateUrl: './returned-loan.component.html',
  styleUrls: ['./returned-loan.component.css']
})
export class ReturnedLoanComponent implements OnInit {

  @Input() returnedLoan:ReturnedLoan;

  constructor() { }

  ngOnInit() {

  }

  returnToolName(id:number){
    return ISSUABLES.filter(i=>i.id==id)[0].name;
  }

}
