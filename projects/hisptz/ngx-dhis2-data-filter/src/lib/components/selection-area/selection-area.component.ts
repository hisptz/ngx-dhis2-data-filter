import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataFilterState } from '../../store/reducers';
import { SelectDataFilterItems } from '../../store/actions/data-filter.actions';

@Component({
  selector: 'hisptz-selection-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './selection-area.component.html',
  styleUrls: ['./selection-area.component.css']
})
export class SelectionAreaComponent implements OnChanges {
  @Input() availableItems;
  @Input() selectedItems;

  public vAvailableItems;
  public vSelectedItems;
  public _availableItems;
  constructor(private store: Store<DataFilterState>) {}

  ngOnChanges(changes: SimpleChanges) {
    const { ids } = this.selectedItems;
    this._availableItems = this.availableItems.filter(({ id }) => !ids.includes(id));
  }

  selectDataItems(item) {
    const items = [...this.selectedItems.items, item];
    const ids = [...this.selectedItems.ids, item.id];
    this.store.dispatch(new SelectDataFilterItems({ ...this.selectedItems, items, ids }));
  }

  deSelectDataItems(item) {
    const items = this.selectedItems.items.filter(({ id }) => id !== item.id);
    const ids = this.selectedItems.ids.filter(id => id !== item.id);
    this.store.dispatch(new SelectDataFilterItems({ ...this.selectedItems, items, ids }));
  }
}
