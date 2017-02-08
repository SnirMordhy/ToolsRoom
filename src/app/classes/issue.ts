import {User} from "./user";
import {Inventory} from "./inventory";
export class Issue {
  id:string;
  owner:User;
  destination:Inventory;

  constructor(id:string, owner:User, destination:Inventory)
  {
    this.id = id;
    this.owner = owner;
    this.destination = destination;
  }
}
