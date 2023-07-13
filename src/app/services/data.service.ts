import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Row } from '../interfaces/row.interface';
import { Trophy } from '../interfaces/trophy.interface';
import { TROPHY_VALUE } from '../constants/trophy-value.constant';
import { Team } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Row[]> {
    return this.http.get<Team[]>('/assets/trophies.json')
      .pipe(map(this._handleTeams.bind(this)));
  }

  private _handleTeams(clubs: Team[]) {
    return clubs.map(({ name, trophies }) => ({
      name,
      points: this._sumPoints(trophies)
    }));
  }

  private _sumPoints(trophies: Trophy[]) {
    return trophies
      .reduce((previousValue, currentValue) =>
        previousValue += currentValue.qty * TROPHY_VALUE[currentValue.name.toUpperCase()] ?? 1, 0);
  }
}
1
