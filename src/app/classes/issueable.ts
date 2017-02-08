import {ToolRoom} from "./tool-room";
export class Issueable {
  type:string;
  id:number;
  name:string;
  tools:Array<Issueable>;
  owner:ToolRoom;
}
