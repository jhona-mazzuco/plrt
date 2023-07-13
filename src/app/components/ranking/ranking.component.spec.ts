import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingComponent } from './ranking.component';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';

describe('TableComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankingComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(RankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return data', async () => {
    const service = TestBed.inject(DataService);
    const data = await service.fetch().toPromise();
    expect(data?.length).toBeGreaterThan(1);
  });
});
