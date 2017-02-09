import {User} from "./user";
import {Inventory} from "./inventory";
export class Issue {
  id:number;
  owner:User;
  destination:Inventory;
}
