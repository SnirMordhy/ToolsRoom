import {User} from "./user";
import {Inventory} from "./inventory";
export class Issue {
  id:string;
  owner:User;
  destination:Inventory;
}
