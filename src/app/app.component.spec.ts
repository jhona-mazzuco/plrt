import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TrophyValueComponent } from './components/trophy-value/trophy-value.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './services/data.service';
import { PointsSortPipe } from './pipes/points-sort.pipe';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      RankingComponent,
      TrophyValueComponent,
      PointsSortPipe
    ],
    imports: [HttpClientTestingModule],
    providers: [DataService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
