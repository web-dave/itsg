import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itsg'
})
export class ItsgPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 'itsg';
  }
}
