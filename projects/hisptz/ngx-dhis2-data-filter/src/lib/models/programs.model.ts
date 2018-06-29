export interface Programs {
  programs: Program[];
}

export interface Program {
  name: string;
  id: string;
  programType: ProgramType;
  programStages: ProgramStage[];
  programTrackedEntityAttributes: ProgramTrackedEntityAttribute[];
}

export interface ProgramStage {
  name: string;
  id: string;
  programStageDataElements: ProgramStageDataElement[];
}

export interface ProgramStageDataElement {
  dataElement: DataElement;
}

export interface DataElement {
  name: string;
  id: string;
}

export interface OptionSet {
  name: string;
  id: string;
}

export interface ProgramTrackedEntityAttribute {
  trackedEntityAttribute: TrackedEntityAttribute;
}

export interface TrackedEntityAttribute {
  id: string;
  name: string;
  valueType: string;
  optionSet?: OptionSet;
}

export enum ProgramType {
  WithRegistration = 'WITH_REGISTRATION',
  WithoutRegistration = 'WITHOUT_REGISTRATION'
}
