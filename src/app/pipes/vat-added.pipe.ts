import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //value -> O anki değiştirmek istediğim deger
  transform(value: number, rate:number): number {
    return value + (value * rate /100);
  }

}
