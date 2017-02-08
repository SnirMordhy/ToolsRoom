export class Loan {
  public static LOANER:string = 'loaner';
  public static LOANEE:string = 'loanee';

  id:number;
  issuables:Array<number>;
  isApproved:boolean;
  type:string;

  constructor(id:number, issuables:Array<number>, isApproved:boolean,type:string){
    this.id = id;
    this.issuables = issuables;
    this.isApproved = isApproved;
    this.type = type;
  }
}
