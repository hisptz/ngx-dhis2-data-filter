import { DataElementActions, DataElementActionTypes } from '../actions/dataelement.actions';
import { DataElement } from '../../models/programs.model';

export interface DataElementState {
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
  entities: { [id: string]: DataElement };
}

const initialState: DataElementState = {
  loading: false,
  loaded: false,
  errorMessage: null,
  entities: {}
};

export function reducer(state = initialState, action: DataElementActions): DataElementState {
  switch (action.type) {
    case DataElementActionTypes.LOAD_DATAELEMENTS: {
      return {
        ...state,
        loading: true
      };
    }

    case DataElementActionTypes.ADD_DATAELEMENTS: {
      const { dataElements } = action.payload;
      const entities = Object.assign({}, ...dataElements.map(dataElement => ({ [dataElement.id]: dataElement })));
      return {
        ...state,
        entities
      };
    }

    case DataElementActionTypes.LOAD_DATAELEMENTS_FAIL: {
      const errorMessage = action.error;
      return {
        ...state,
        errorMessage
      };
    }

    default: {
      return state;
    }
  }
}

export const selectDataElementLoaded = (state: DataElementState) => state.loaded;
export const selectDataElementLoading = (state: DataElementState) => state.loading;
export const selectDataElementEntities = (state: DataElementState) => state.entities;
