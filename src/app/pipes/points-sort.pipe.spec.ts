import { PointsSortPipe } from './points-sort.pipe';
import { Row } from '../interfaces/row.interface';

describe('PointsSortPipe', () => {
  let pipe: PointsSortPipe;

  beforeEach(() => {
    pipe = new PointsSortPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort rows', () => {
    const first: Row = { name: 'First', points: 130 };
    const second: Row = { name: 'Second', points: 87 };
    const third: Row = { name: 'Third', points: 30 };

    expect(pipe.transform([third, second, first])).toEqual([first, second, third]);
  });
});
