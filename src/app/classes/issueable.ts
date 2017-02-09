import {ToolRoom} from "./tool-room";
export class Issuable {
  static TOOL_TYPE:string = 'tool';
  static KIT_TYPE:string = 'kit';

  id:number;
  name:string;
  type:string;
  tools:Issuable[];
  owner:ToolRoom;
  expirationDate: number;


  constructor(id: number, name: string, type: string, tools: Issuable[], owner: ToolRoom, expirationDate: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.tools = tools;
    this.owner = owner;
    this.expirationDate = expirationDate;
  }
}
