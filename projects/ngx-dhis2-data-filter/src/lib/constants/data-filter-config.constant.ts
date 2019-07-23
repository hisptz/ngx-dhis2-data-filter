import { DataFilterConfig } from '../models/data-filter-preference.model';

export const defaultDataFilterConfig: DataFilterConfig = {
  enabledSelections: ['in', 'fn', 'de'],
  singleSelection: false,
  showGroupsOnStartup: false,
  hideSelectedPanel: true
};
