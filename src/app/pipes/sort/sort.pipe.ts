import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[]) {
    return array.sort((prev, curr) => {
      if(!prev.warning && curr.warning) return 1
      if(prev.warning && !curr.warning) return -1
      return prev.groupName.localeCompare(curr.groupName)
    })
  }
}
