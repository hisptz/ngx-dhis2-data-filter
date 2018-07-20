import { ProgramActions, ProgramActionTypes } from '../actions/program.actions';
import { Program } from '../../models/programs.model';

export interface ProgramState {
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
  entities: { [id: string]: Program };
}

const initialState: ProgramState = {
  loading: false,
  loaded: false,
  errorMessage: null,
  entities: {}
};

export function reducer(state = initialState, action: ProgramActions): ProgramState {
  switch (action.type) {
    case ProgramActionTypes.LOAD_PROGRAMS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case ProgramActionTypes.LOAD_PROGRAMS_SUCCESS: {
      const { programs } = action.payload;
      const entities = Object.assign({}, ...programs.map(program => ({ [program.id]: program })));
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ProgramActionTypes.LOAD_PROGRAMS_FAIL: {
      const errorMessage = action.error;
      return {
        ...state,
        loading: false,
        loaded: false,
        errorMessage
      };
    }

    default: {
      return state;
    }
  }
}

export const selectProgramLoaded = (state: ProgramState) => state.loaded;
export const selectProgramLoading = (state: ProgramState) => state.loading;
export const selectProgramEntities = (state: ProgramState) => state.entities;
