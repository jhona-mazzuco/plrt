import { Pipe, PipeTransform } from '@angular/core';
import { Row } from '../interfaces/row.interface';

@Pipe({
  name: 'pointsSort'
})
export class PointsSortPipe implements PipeTransform {
  transform(items: Row[] | undefined): Row[] {
    return items?.sort((a, b) => {
      if (a.points > b.points) {
        return -1;
      }

      if (a.points < b.points) {
        return 1;
      }

      return 0;
    }) ?? [];
  }

}
