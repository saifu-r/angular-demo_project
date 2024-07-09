import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvater'
})
export class CurrencyConvaterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let currency = 'USD'
    return null;
  }

}
