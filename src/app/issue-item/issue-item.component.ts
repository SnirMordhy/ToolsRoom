import {Component, OnInit, Input} from '@angular/core';
import {Issue} from "../classes/issue";

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent implements OnInit {

  @Input() issue: Issue;
  constructor() { }

  ngOnInit() {
  }

}
