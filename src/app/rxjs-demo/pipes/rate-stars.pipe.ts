import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateStars'
})
export class RateStarsPipe implements PipeTransform {

  transform(value: string, args?: any): any {
      return parseInt(value) / 10;
  }

}
