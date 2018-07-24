import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(value: any[], querystring: any): any {
    if (value.length !== 0 && querystring !== null && querystring !== undefined) {
      return value.filter(({ name }) => name.toLowerCase().includes(querystring.toLowerCase()));
    }
    return value;
  }
}
