import { Pipe } from '@angular/core';


@Pipe({
  name: 'CategoryIdToName',
})
export class CategoryIdToName {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(value, args) {
    let output = '';
    value.forEach(function(number){
      output = output + ' - '+ args[number]
    })
    return output;
  }
}
