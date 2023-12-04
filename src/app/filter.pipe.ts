import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  //pure:false .pure by fault true thake
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {// value and searchText er value different thakle tokhon  transform function ti call hobe
    if (!searchText) return value;
    return value.filter((x: any) => x.name.startsWith(searchText));// searchtext theke match kore value return kore dicche. 
  }

}
