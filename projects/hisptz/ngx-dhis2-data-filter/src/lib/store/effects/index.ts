import { ProgramEffects } from './program.effects';
import { DataElementEffects } from './dataElement.effects';
import { ProgramStageEffects } from './program-stage.effects';
import { DataFilterEffects } from './data-filter.effets';

export const effects: any[] = [ProgramEffects, DataElementEffects, ProgramStageEffects, DataFilterEffects];

export * from './program.effects';
export * from './dataElement.effects';
export * from './program-stage.effects';
export * from './data-filter.effets';
