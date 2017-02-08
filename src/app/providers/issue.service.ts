import { Injectable } from '@angular/core';
import {Issue} from "../classes/issue";
import {ISSUES} from "../mocks/ToolsRoomData";

@Injectable()
export class IssueService {

  getIssues(): Issue[]{
    return ISSUES;
  }

  constructor() { }

}
