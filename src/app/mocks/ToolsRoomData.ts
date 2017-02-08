import  { ToolsRoom } from "../modules/ToolsRoom"
import {Issue} from "../classes/issue";
import {User} from "../classes/user";
import {Inventory} from "../classes/inventory";

export const TOOLS_ROOMS: ToolsRoom[] = [
  new ToolsRoom(1122,'חדר כלים כנף 1'),
  new ToolsRoom(2233,'חדר כלים בח'),
  new ToolsRoom(6585,'חדר כלים תל נוף דת"ק 3'),
  new ToolsRoom(7809,'חדר כלים תל נוף דת"ק 1'),
  new ToolsRoom(2635,'חדר כלים פלמחים דת"ק 6')];

export const ISSUES : Issue[] = [
  new Issue(1, new User(1, "Nir"), new Inventory(1, "Baz")),
  new Issue(2, new User(2, "Lilach"), new Inventory(2, "Barak"))];

