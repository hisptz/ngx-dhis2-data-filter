import { DataFilterActionTypes, DataFilterActions } from '../actions/data-filter.actions';

export interface DataFilterState {
  selectedGroup: any;
  selectedItems: any;
}

const initialState: DataFilterState = {
  selectedGroup: {},
  selectedItems: {
    ids: [],
    items: []
  }
};

export function reducer(state = initialState, action: DataFilterActions): DataFilterState {
  switch (action.type) {
    case DataFilterActionTypes.SELECT_GROUP:
      return {
        ...state,
        selectedGroup: action.group,
        selectedItems: initialState.selectedItems
      };

    case DataFilterActionTypes.SELECT_DATAITEMS:
      return {
        ...state,
        selectedItems: action.dataItems
      };

    default:
      return state;
  }
}

export const selectSelectedGroup = (state: DataFilterState) => state.selectedGroup;
export const selectSelectedItems = (state: DataFilterState) => state.selectedItems;
