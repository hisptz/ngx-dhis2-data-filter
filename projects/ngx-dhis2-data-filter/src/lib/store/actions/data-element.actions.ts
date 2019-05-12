import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { DataElement } from '../../models/data-element.model';

export enum DataElementActionTypes {
  LoadDataElements = '[DataElement] Load DataElements',
  LoadDataElementsFail = '[DataElement] Load DataElements fail',
  LoadDataElementsInitiated = '[DataElement] Load DataElements initiate',
  AddDataElement = '[DataElement] Add DataElement',
  UpsertDataElement = '[DataElement] Upsert DataElement',
  AddDataElements = '[DataElement] Add DataElements',
  UpsertDataElements = '[DataElement] Upsert DataElements',
  UpdateDataElement = '[DataElement] Update DataElement',
  UpdateDataElements = '[DataElement] Update DataElements',
  DeleteDataElement = '[DataElement] Delete DataElement',
  DeleteDataElements = '[DataElement] Delete DataElements',
  ClearDataElements = '[DataElement] Clear DataElements'
}

export class LoadDataElements implements Action {
  readonly type = DataElementActionTypes.LoadDataElements;
}

export class LoadDataElementsInitiated implements Action {
  readonly type = DataElementActionTypes.LoadDataElementsInitiated;
}

export class LoadDataElementsFail implements Action {
  readonly type = DataElementActionTypes.LoadDataElementsFail;
  constructor(public error: any) {}
}

export class AddDataElement implements Action {
  readonly type = DataElementActionTypes.AddDataElement;

  constructor(public payload: { dataElement: DataElement }) {}
}

export class UpsertDataElement implements Action {
  readonly type = DataElementActionTypes.UpsertDataElement;

  constructor(public payload: { dataElement: DataElement }) {}
}

export class AddDataElements implements Action {
  readonly type = DataElementActionTypes.AddDataElements;

  constructor(public dataElements: DataElement[]) {}
}

export class UpsertDataElements implements Action {
  readonly type = DataElementActionTypes.UpsertDataElements;

  constructor(public payload: { dataElements: DataElement[] }) {}
}

export class UpdateDataElement implements Action {
  readonly type = DataElementActionTypes.UpdateDataElement;

  constructor(public payload: { dataElement: Update<DataElement> }) {}
}

export class UpdateDataElements implements Action {
  readonly type = DataElementActionTypes.UpdateDataElements;

  constructor(public payload: { dataElements: Update<DataElement>[] }) {}
}

export class DeleteDataElement implements Action {
  readonly type = DataElementActionTypes.DeleteDataElement;

  constructor(public payload: { id: string }) {}
}

export class DeleteDataElements implements Action {
  readonly type = DataElementActionTypes.DeleteDataElements;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearDataElements implements Action {
  readonly type = DataElementActionTypes.ClearDataElements;
}

export type DataElementActions =
  | LoadDataElements
  | LoadDataElementsInitiated
  | LoadDataElementsFail
  | AddDataElement
  | UpsertDataElement
  | AddDataElements
  | UpsertDataElements
  | UpdateDataElement
  | UpdateDataElements
  | DeleteDataElement
  | DeleteDataElements
  | ClearDataElements;
