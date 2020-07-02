import { Pipe, PipeTransform } from '@angular/core';
import {User} from './users.service'

@Pipe({
  name: 'sortByfollowers'
})
export class SortByfollowersPipe implements PipeTransform {

  transform(value: User[], ...args: any[]): User  [] {
    value=value.sort((a,b)=>a.followers>b.followers?-1:1);
    return value

  }

}
