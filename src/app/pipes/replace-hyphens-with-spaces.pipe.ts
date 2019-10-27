import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceHyphensWithSpaces',
})
export class ReplaceHyphensWithSpacesPipe implements PipeTransform {
  transform(inputString: string): any {
    return inputString.split('-').join(' ');
  }
}
