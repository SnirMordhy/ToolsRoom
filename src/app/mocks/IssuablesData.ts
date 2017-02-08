import {Issuable} from "../classes/issueable";
import {TOOLS_ROOMS} from "./ToolsRoomData"

export const ISSUABLES:Issuable[] = [
  new Issuable(1, 'מברג 1', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0]),
  new Issuable(2, 'מברג 2', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[1])
];
