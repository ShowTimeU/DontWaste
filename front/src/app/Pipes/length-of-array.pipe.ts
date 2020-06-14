import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthOfArray',
  pure: false
})
export class LengthOfArrayPipe implements PipeTransform {

  transform(value: any): number {
    return value.length;
  }

}
