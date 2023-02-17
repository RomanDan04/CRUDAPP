import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
}) export class FilterPipe implements PipeTransform {
  transform(items: any[], field: any, value: any): any[] {
    if(!items || !field || !value) return items
    return items.filter(item => {
      switch(typeof item[field]){
        case 'undefined': return item.value[field].toLowerCase().includes(value.toLowerCase())
        case 'string': return item[field].toLowerCase().includes(value.toLowerCase())
        case 'number': case 'boolean': return item[field] === value
        default: return []
      }
    })
  }
}
