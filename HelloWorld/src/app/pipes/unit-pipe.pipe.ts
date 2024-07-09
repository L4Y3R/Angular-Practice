import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitPipe',
})
export class UnitPipePipe implements PipeTransform {
  transform(value: string | number, symbol: string): unknown {
    return value + ' ' + symbol;
  }
}
