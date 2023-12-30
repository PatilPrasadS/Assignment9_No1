import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    var temp : string = "";
    
    for(let char of value) {
      temp = char + temp;
    }
    return temp;
  }

}
