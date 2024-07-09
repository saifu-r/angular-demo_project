import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFastName'
})
export class AddFastNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "MD "+ value
  }

}
