import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { DataElementGroup } from '../../models/data-element-group.model';
import {
  DataElementGroupActions,
  DataElementGroupActionTypes
} from '../actions/data-element-group.actions';

export interface State extends EntityState<DataElementGroup> {
  // additional entities state properties
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  error: any;
  loadInitiated: boolean;
}

export const adapter: EntityAdapter<DataElementGroup> = createEntityAdapter<
  DataElementGroup
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  loadInitiated: false,
  hasError: false,
  error: null
});

export function reducer(
  state = initialState,
  action: DataElementGroupActions
): State {
  switch (action.type) {
    case DataElementGroupActionTypes.LoadDataElementGroupsInitiated: {
      return { ...state, loadInitiated: true };
    }
    case DataElementGroupActionTypes.AddDataElementGroup: {
      return adapter.addOne(action.payload.dataElementGroup, state);
    }

    case DataElementGroupActionTypes.UpsertDataElementGroup: {
      return adapter.upsertOne(action.payload.dataElementGroup, state);
    }

    case DataElementGroupActionTypes.AddDataElementGroups: {
      return adapter.addMany(action.dataElementGroups, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case DataElementGroupActionTypes.UpsertDataElementGroups: {
      return adapter.upsertMany(action.payload.dataElementGroups, state);
    }

    case DataElementGroupActionTypes.UpdateDataElementGroup: {
      return adapter.updateOne(action.payload.dataElementGroup, state);
    }

    case DataElementGroupActionTypes.UpdateDataElementGroups: {
      return adapter.updateMany(action.payload.dataElementGroups, state);
    }

    case DataElementGroupActionTypes.DeleteDataElementGroup: {
      return adapter.removeOne(action.payload.id, state);
    }

    case DataElementGroupActionTypes.DeleteDataElementGroups: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case DataElementGroupActionTypes.LoadDataElementGroups: {
      return {
        ...state,
        loading: state.loaded ? false : true,
        loaded: state.loaded,
        hasError: false,
        error: null
      };
    }

    case DataElementGroupActionTypes.ClearDataElementGroups: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
