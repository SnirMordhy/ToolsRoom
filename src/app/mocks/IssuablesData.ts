import {Issuable} from "../classes/issueable";
import {TOOLS_ROOMS} from "./ToolsRoomData"
export const ISSUABLES:Issuable[] = [
  new Issuable(1, 'מברג', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(2, 'מפתח שוודי', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(3, 'מלחם', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(4, 'צבת', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(5, 'מברגה יפנית', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(6, 'מבודד', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],30),
  new Issuable(7, 'קאטר', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(8, 'פטיש', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(9, 'רב מודד 20 אמפר', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(10, 'מגר דיגיטלי 1000 וולט', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(11, 'בודק ממסרי פחת', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],14),
  new Issuable(12, 'ערכת בודקים', Issuable.KIT_TYPE, [new Issuable(11, 'בודק ממסרי nsr', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],11),
                                                    new Issuable(11, 'בודק ממסרי xrx', Issuable.TOOL_TYPE, null, TOOLS_ROOMS[0],6)] , TOOLS_ROOMS[0],25)
];
