import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { DataElement } from '../../models/data-element.model';
import {
  DataElementActions,
  DataElementActionTypes
} from '../actions/data-element.actions';

export interface State extends EntityState<DataElement> {
  // additional entities state properties
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  error: any;
  loadInitiated: boolean;
}

export const adapter: EntityAdapter<DataElement> = createEntityAdapter<
  DataElement
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
  action: DataElementActions
): State {
  switch (action.type) {
    case DataElementActionTypes.LoadDataElementsInitiated: {
      return { ...state, loadInitiated: true };
    }
    case DataElementActionTypes.AddDataElement: {
      return adapter.addOne(action.payload.dataElement, state);
    }

    case DataElementActionTypes.UpsertDataElement: {
      return adapter.upsertOne(action.payload.dataElement, state);
    }

    case DataElementActionTypes.AddDataElements: {
      return adapter.addMany(action.dataElements, {
        ...state,
        loaded: true,
        loading: false
      });
    }

    case DataElementActionTypes.UpsertDataElements: {
      return adapter.upsertMany(action.payload.dataElements, state);
    }

    case DataElementActionTypes.UpdateDataElement: {
      return adapter.updateOne(action.payload.dataElement, state);
    }

    case DataElementActionTypes.UpdateDataElements: {
      return adapter.updateMany(action.payload.dataElements, state);
    }

    case DataElementActionTypes.DeleteDataElement: {
      return adapter.removeOne(action.payload.id, state);
    }

    case DataElementActionTypes.DeleteDataElements: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case DataElementActionTypes.LoadDataElements: {
      return {
        ...state,
        loading: state.loaded ? false : true,
        loaded: state.loaded,
        hasError: false,
        error: null
      };
    }

    case DataElementActionTypes.ClearDataElements: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
