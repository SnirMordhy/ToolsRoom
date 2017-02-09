export class Loan {

  id:number;
  issueables:Array<number>;

  constructor(id:number, issuables:Array<number>) {
    this.id = id;
    this.issueables = issuables;
  }

  public getId():number{
    return this.id;
  }
}

export class ReceivedLoan extends Loan{

  isReceiveApproved:boolean;

  constructor(id:number, issuables:Array<number>, isRecieveApproved:boolean) {
    super(id, issuables);
    this.setIsReceivedApproved(isRecieveApproved);
  }

  public setIsReceivedApproved(isReceiveApproved){
    this.isReceiveApproved = isReceiveApproved;
  }
}

export class ReturnedLoan extends Loan{

  isReturnApproved:boolean;

  constructor(id:number, issuables:Array<number>, isReturnApproved:boolean) {
    super(id, issuables);
    this.setIsReturnedApproved(isReturnApproved);
  }

  public setIsReturnedApproved(isReturnApproved){
    this.isReturnApproved = isReturnApproved;
  }
}
