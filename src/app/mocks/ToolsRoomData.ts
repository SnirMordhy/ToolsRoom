import  { ToolsRoom } from "../modules/ToolsRoom"
import {Issue} from "../classes/issue";
import {User} from "../classes/user";
import {Inventory} from "../classes/inventory";

export const TOOLS_ROOMS: ToolsRoom[] = [
  {id: 1122, name: 'חדר כלים כנף 1'},
  {id: 2233, name:'חדר כלים בח"א 10'},
  {id: 6585, name:'חדר כלים כנף 2'},
  {id: 7809, name:'חדר כלים תל נוף דת"ק 3'},
  {id: 2635, name:'חדר כלים תל נוף דת"ק 1'},
  {id: 4496, name:'חדר כלים פלמחים דת"ק 6'},
  {id: 7686, name:'חדר כלים בח"א 8'}];

export const ISSUES : Issue[] = [
  new Issue(1, new User(1, "Nir"), new Inventory(1, "Baz")),
  new Issue(2, new User(2, "Lilach"), new Inventory(2, "Barak"))];

