import { ProgramStageActions, ProgramStageActionTypes } from '../actions';
import { ProgramStage } from '../../models/programs.model';
export interface ProgramStageState {
  loading: boolean;
  loaded: boolean;
  errorMessage: string;
  entities: { [id: string]: ProgramStage };
}

const initialState: ProgramStageState = {
  loading: false,
  loaded: false,
  errorMessage: null,
  entities: {}
};

export function reducer(state = initialState, action: ProgramStageActions): ProgramStageState {
  switch (action.type) {
    case ProgramStageActionTypes.LOAD_PROGRAM_STAGES: {
      return {
        ...state,
        loading: true
      };
    }

    case ProgramStageActionTypes.ADD_PROGRAM_STAGES: {
      const { programStages } = action.payload;
      const entities = Object.assign({}, ...programStages.map(programStage => ({ [programStage.id]: programStage })));
      return {
        ...state,
        entities
      };
    }

    case ProgramStageActionTypes.LOAD_PROGRAM_STAGES_FAIL: {
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

export const selectProgramStageLoaded = (state: ProgramStageState) => state.loaded;
export const selectProgramStageLoading = (state: ProgramStageState) => state.loading;
export const selectProgramStageEntities = (state: ProgramStageState) => state.entities;
