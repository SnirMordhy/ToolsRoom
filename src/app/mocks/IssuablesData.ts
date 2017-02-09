import {Issuable} from "../classes/issueable";
import {TOOLS_ROOMS} from "./ToolsRoomData"

export let ISSUABLES:Issuable[] = [
  new Issuable(1, 'מברג 1', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0], Date.now() - 1000*60*60*24),
  new Issuable(2, 'מברג 2', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[1], Date.now() - 1000*60*60*24),
  new Issuable(4, 'מברג 4', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[2], Date.now() + 1000*60*60*24*17),
  new Issuable(5, 'מברג 5', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[2], Date.now() + 1000*60*60*24*30),
  new Issuable(3, 'מברג 3', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[1], Date.now() + 1000*60*60*24*5),
  new Issuable(6, 'ערכה 1', Issuable.KIT_TYPE, [new Issuable(7, 'מסור 1', Issuable.TOOL_TYPE, null, null, Date.now())], TOOLS_ROOMS[2], Date.now() + 1000*60*60*24*30)
];
