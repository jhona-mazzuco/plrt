import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyValueComponent } from './trophy-value.component';

describe('TrophyValueComponent', () => {
  let component: TrophyValueComponent;
  let fixture: ComponentFixture<TrophyValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrophyValueComponent]
    });
    fixture = TestBed.createComponent(TrophyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill rows', () => {
    component.ngOnInit();

    const [premierLeague] = component.rows;
    expect(premierLeague.value).toEqual(8);
  });
});
