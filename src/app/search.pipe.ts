import { Pipe, PipeTransform } from '@angular/core';
import {User} from './users.service'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: User[], ...args: any[]): User  [] {   
    if (args[0]==""){
      return value
    }
    return value.filter(a=>a.username.search(new RegExp(args[0],"ig"))!=-1);
  }  

}
