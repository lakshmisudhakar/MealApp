import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SearchService]
  }));

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });

  it('should have get Random Meal Data function', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.getRandomMeal).toBeTruthy();
  });

  it('should have get Random Search Meal Data function', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.getSearchMeal).toBeTruthy();
  });
});
