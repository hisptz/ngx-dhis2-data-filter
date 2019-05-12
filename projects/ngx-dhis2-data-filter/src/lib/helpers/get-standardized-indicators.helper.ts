import { map as _map } from 'lodash';
import { Indicator } from '../models/indicator.model';

export function getStandardizedIndicators(Indicators: any[]): Indicator[] {
  return _map(Indicators || [], (indicator: any) => {
    return {
      id: indicator.id,
      name: indicator.name,
      type: 'INDICATOR'
    };
  });
}
