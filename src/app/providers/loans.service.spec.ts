/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoansService } from './loans.service';

describe('LoansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoansService]
    });
  });

  it('should ...', inject([LoansService], (service: LoansService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to loan tool to another tool room', ()=>{
    let loaner:Object = {id: 1, name: "ToolsRoom1"};
    let loanee:Object = {id: 2, name: "ToolsRoom2"};
    let issuable:Object = {id: 1, name: "Tool1", type: "Tool", tools: [], owner: loaner};

    LoansService.loanIssuable(issuable, loanee);

  });
});
