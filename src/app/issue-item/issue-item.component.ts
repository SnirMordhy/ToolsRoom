import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Issue} from "../classes/issue";

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent implements OnInit {

  @HostListener('click')
  toggle() {
    this.isShow = !this.isShow;
  }


  @Input() issue: Issue;
  isShow: boolean = false;

  constructor() {
  }


  ngOnInit() {
  }

}
