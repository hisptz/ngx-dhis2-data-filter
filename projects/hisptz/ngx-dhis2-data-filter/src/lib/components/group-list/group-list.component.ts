import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'hisptz-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  @Input() groupList;

  @Output() selectedGroups;

  constructor() {}

  ngOnInit() {
    console.log(this.groupList);
  }
}
