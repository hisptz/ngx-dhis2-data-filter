import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hisptz-group-selection',
  templateUrl: './group-selection.component.html',
  styleUrls: ['./group-selection.component.css']
})
export class GroupSelectionComponent implements OnInit {
  @Input() public groupList;

  public showDataFilterGroupList: boolean;
  @Input() public selectedGroup;

  constructor() {
    this.showDataFilterGroupList = false;
  }
  ngOnInit() {}

  toggleDataFilterGroupList(event) {
    event.stopPropagation();
    this.showDataFilterGroupList = !this.showDataFilterGroupList;
  }

  closeDataFilterGroupList(event) {
    event.stopPropagation();
    this.showDataFilterGroupList = false;
  }

  closeList(event) {
    const { showList } = event;
    this.showDataFilterGroupList = showList;
  }
}
