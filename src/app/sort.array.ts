/**
 * New typescript file- custome pipe creation
 */
import { Pipe, PipeTransform } from '@angular/core';
import { transform } from 'typescript';

@Pipe ({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(value: any[], args: string): any {
   if(args === 'asc') {
     return value.sort();
   } else if(args='desc') {
     return value.sort().reverse();
   }
  }
}
