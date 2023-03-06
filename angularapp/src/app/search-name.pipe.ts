import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, searchTearm : any): any {
    return value.filter(function(searchh){
      return searchh.name.toLowerCase().indexOf(searchTearm.toLowerCase())> -1
    })
  }

}
