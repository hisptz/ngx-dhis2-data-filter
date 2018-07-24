import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hisptz-group-selection',
  templateUrl: './group-selection.component.html',
  styleUrls: ['./group-selection.component.css']
})
export class GroupSelectionComponent implements OnInit {
  @Input() selectedGroup;
  constructor() {}
  ngOnInit() {}

  toggleDataFilterGroupList(event) {
    event.stopPropagation();
  }
}
