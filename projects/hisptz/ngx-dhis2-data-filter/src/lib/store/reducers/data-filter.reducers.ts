import { DataFilterActionTypes, DataFilterActions } from '../actions/data-filter.actions';

export interface DataFilterState {
  selectedGroup: any;
}

const initialState: DataFilterState = {
  selectedGroup: null
};

export function reducer(state = initialState, action: DataFilterActions): DataFilterState {
  switch (action.type) {
    case DataFilterActionTypes.SELECT_GROUP:
      return {
        ...state,
        selectedGroup: action.group
      };

    default:
      return state;
  }
}

export const selectSelectedGroup = (state: DataFilterState) => state.selectedGroup;
