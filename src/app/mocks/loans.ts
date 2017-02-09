import {Loan} from "../classes/loan";
import {ISSUABLES} from "./IssuablesData";
export const LOANS:Loan[] = [
  new Loan(1,[ISSUABLES[0].id,ISSUABLES[1].id],false, Loan.LOANER)
];
