import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataFilterState } from '../../store/reducers';
import { SelectDataFilterGroup } from '../../store/actions/data-filter.actions';

@Component({
  selector: 'hisptz-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  @Input() groupList;
  @Input() selectedGroup;

  @Output() closeList: EventEmitter<any> = new EventEmitter();

  public querystring: string;

  constructor(private store: Store<DataFilterState>) {
    this.querystring = '';
  }

  ngOnInit() {
    console.log(this.groupList);
  }

  selectGroupClick(group) {
    this.store.dispatch(new SelectDataFilterGroup(group));
    this.closeList.emit({ showList: false });
  }
}
