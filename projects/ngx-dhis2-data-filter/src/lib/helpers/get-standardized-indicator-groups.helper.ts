import { map as _map } from 'lodash';
import { IndicatorGroup } from '../models/indicator-group.model';

export function getStandardizedIndicatorGroups(
  IndicatorGroups: any[]
): IndicatorGroup[] {
  return _map(IndicatorGroups || [], (indicatorGroup: any) => {
    return {
      id: indicatorGroup.id,
      name: indicatorGroup.name,
      indicators: _map(
        indicatorGroup.indicators || [],
        (indicator: any) => indicator.id
      )
    };
  });
}
