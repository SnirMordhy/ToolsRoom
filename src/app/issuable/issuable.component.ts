import {Component, OnInit, Input} from '@angular/core';
import {Issuable} from "../classes/issueable";

@Component({
  selector: 'issuable',
  templateUrl: './issuable.component.html',
  styleUrls: ['./issuable.component.css']
})
export class IssuableComponent implements OnInit {

  @Input()
  data:Issuable;

  showTools:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  switchToolsVisibility() {
    this.showTools = !this.showTools;
  }
}
