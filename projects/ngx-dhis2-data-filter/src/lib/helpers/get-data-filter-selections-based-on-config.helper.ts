import { filter as _filter, uniq as _uniq } from 'lodash';
import { DataFilterSelection } from '../models/data-filter-selection.model';
import { DATA_FILTER_SELECTIONS } from '../constants/data-filter-selections.constant';
import { DataFilterConfig } from '../models/data-filter-config.model';
export function getDataFilterSelectionsBasedOnConfig(
  dataFilterConfig: DataFilterConfig
) {
  // set data filter selections
  const enabledSelections = _uniq([
    'all',
    ...(dataFilterConfig ? dataFilterConfig.enabledSelections : [])
  ]);

  return _filter(
    DATA_FILTER_SELECTIONS || [],
    (dataFilterSelection: DataFilterSelection) => {
      if (!dataFilterConfig || !dataFilterConfig.enabledSelections) {
        return true;
      }

      return enabledSelections.indexOf(dataFilterSelection.prefix) !== -1;
    }
  );
}
