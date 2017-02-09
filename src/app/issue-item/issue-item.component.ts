import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Issue} from "../classes/issue";
import {Issuable} from "../classes/issueable";
import {ISSUABLES} from "../mocks/IssuablesData";

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent implements OnInit {

  issuables:Issuable[];

  toggle() {
    this.isShow = !this.isShow;
  }


  @Input() issue: Issue;
  isShow: boolean = false;

  constructor() {
  }


  ngOnInit() {
    this.issuables = ISSUABLES.filter(() => Math.random() > 0.5);
  }

}
