import { Component, OnInit } from '@angular/core';
import {Issue} from "../classes/issue";
import {IssueService} from "../providers/issue.service";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issues = this.issueService.getIssues();
  }

  filterIssues(searchValue: string){
    return this.issues.filter(
      (value)=>((value.id.toString().indexOf(searchValue)!=-1) ||
      (value.owner.name.toString().indexOf(searchValue)!=-1))
    );
  }

}
