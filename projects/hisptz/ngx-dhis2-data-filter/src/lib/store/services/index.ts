import { NgxDhis2DataFilterService } from './ngx-dhis2-data-filter.service';
import { DataElementService } from './dataelement.service';
import { ProgramStageService } from './program-stage.service';
import { ProgramService } from './program.service';

export const services: any[] = [NgxDhis2DataFilterService, DataElementService, ProgramService, ProgramStageService];

export * from './ngx-dhis2-data-filter.service';
export * from './dataelement.service';
export * from './program-stage.service';
export * from './program.service';

export class DataServiceError<T> {
  constructor(public error: any, public requestData: T) {}
}
