import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { TROPHY_VALUE } from '../../constants/trophy-value.constant';

@Component({
  selector: 'app-trophy-value',
  templateUrl: './trophy-value.component.html',
  styleUrls: ['./trophy-value.component.scss']
})
export class TrophyValueComponent implements OnInit{
  rows: KeyValue<string, number>[] = [];

  ngOnInit(): void {
    const keys = Object.keys(TROPHY_VALUE);
    for (let key of keys) {
      this.rows.push({ key, value: TROPHY_VALUE[key] });
    }
  }
}
