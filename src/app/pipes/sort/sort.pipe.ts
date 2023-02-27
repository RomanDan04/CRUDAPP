import { Pipe, PipeTransform } from '@angular/core';
import { Igroup } from 'src/app/models/group';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Igroup[]) {
    return array.sort((prev, curr) => {
      if(!prev.warning && curr.warning) return 1
      if(prev.warning && !curr.warning) return -1
      return prev.groupName.localeCompare(curr.groupName)
    })
  }
}
