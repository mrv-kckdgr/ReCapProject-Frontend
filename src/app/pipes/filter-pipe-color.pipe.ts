import { Pipe, PipeTransform } from '@angular/core';
import { Color_ } from '../models/color';

@Pipe({
  name: 'filterPipeColor'
})
export class FilterPipeColorPipe implements PipeTransform {

  transform(value: Color_[], filterText: string): Color_[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value
    .filter((c:Color_)=>c.colorName
    .toLocaleLowerCase()
    .indexOf(filterText)!==-1):value;
  }
}