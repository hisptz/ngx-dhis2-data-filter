import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hisptz-group-selection',
  templateUrl: './group-selection.component.html',
  styleUrls: ['./group-selection.component.css']
})
export class GroupSelectionComponent implements OnInit {
  @Input() public groupList;

  public showDataFilterGroupList: boolean;

  constructor() {
    this.showDataFilterGroupList = false;
  }
  ngOnInit() {}

  toggleDataFilterGroupList(event) {
    event.stopPropagation();
  }

  closeDataFilterGroupList(event) {
    event.stopPropagation();
    console.log(event);
  }
}
