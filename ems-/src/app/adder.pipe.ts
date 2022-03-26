import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adder'
})
export class AdderPipe implements PipeTransform {

  transform(val1:any) {
    return val1+'*'+5;
  }

}
