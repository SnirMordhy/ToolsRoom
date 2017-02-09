import  { ToolsRoom } from "../modules/ToolsRoom"
import {Issue} from "../classes/issue";
import {User} from "../classes/user";
import {Inventory} from "../classes/inventory";

export const TOOLS_ROOMS: ToolsRoom[] = [
  new ToolsRoom(1122,'חדר כלים כנף 1'),
  new ToolsRoom(2233,'חדר כלים בחא 8'),
  new ToolsRoom(2233,'חדר כלים כנף 5'),
  new ToolsRoom(2233,'חדר כלים כנף 25'),
  new ToolsRoom(6585,'חדר כלים תל נוף דת"ק 3'),
  new ToolsRoom(7809,'חדר כלים תל נוף דת"ק 1'),
  new ToolsRoom(2635,'חדר כלים פלמחים דת"ק 6')];

export const ISSUES : Issue[] = [
  new Issue(1, new User(1, "שניר הטכנאי הגבר"), new Inventory(1, "רעם")),
  new Issue(1, new User(2, "ניר לינדזון"), new Inventory(1, "בז")),
  new Issue(1, new User(3, "נועה מדרג א"), new Inventory(1, "בז")),
  new Issue(1, new User(4, "גרגלישע"), new Inventory(1, "בז")),
  new Issue(1, new User(5, "משה משה"), new Inventory(1, "בז")),
  new Issue(1, new User(6, "חיים פיקה"), new Inventory(1, "בז")),
  new Issue(1, new User(7, "דני רובינס"), new Inventory(1, "בז")),
  new Issue(1, new User(8, "קפטן דרור אורי"), new Inventory(1, "צופית")),
  new Issue(2, new User(9, "לילך עייני"), new Inventory(2, "ברק"))];

