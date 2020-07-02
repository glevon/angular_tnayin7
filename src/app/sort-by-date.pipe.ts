import { Pipe, PipeTransform } from '@angular/core';
import {Post} from './users.service'
@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: Post [], ...args: any): Post[] {    
    value=value.sort((a,b)=>a.postDate>b.postDate?-1:1);
    return value
  }

}
