import {ToolRoom} from "./tool-room";
export class Issuable {
  static TOOL_TYPE:string = 'tool';
  static KIT_TYPE:string = 'kit';

  id:number;
  name:string;
  type:string;
  tools:Issuable[];
  owner:ToolRoom;


  constructor(id: number, name: string, type: string, tools: Array<Issuable>, owner: ToolRoom) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.tools = tools;
    this.owner = owner;
  }
}
