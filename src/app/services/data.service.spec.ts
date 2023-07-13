import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Trophy } from '../interfaces/trophy.interface';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Team } from '../interfaces/team.interface';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get trophies json', () => {
    const http = TestBed.inject(HttpTestingController);
    const data: Team[] = [{ name: 'Test', trophies: [] }];

    const handleTeams = spyOn(service as any, '_handleTeams').and.stub();

    service.fetch().subscribe(() => {
    });

    const request = http.expectOne('/assets/trophies.json');

    request.flush(data);

    expect(handleTeams).toHaveBeenCalledWith(data, jasmine.anything());
  });

  it('should handle team list', () => {
    const teams: Team[] = [
      {
        name: 'Test',
        trophies: [
          {
            name: 'Premier League',
            qty: 1
          }
        ]
      }
    ];

    expect(service['_handleTeams'](teams)).toEqual([{ name: 'Test', points: 8 }]);
  });

  it('should sum points', () => {
    const trophies: Trophy[] = [
      { name: 'Premier league', qty: 4 },
      { name: 'Champions League', qty: 1 }
    ];

    expect(service['_sumPoints'](trophies)).toEqual(42);
  });
});
