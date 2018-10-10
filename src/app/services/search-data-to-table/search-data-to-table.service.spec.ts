import { TestBed } from '@angular/core/testing';

import { SearchDataToTableService } from './search-data-to-table.service';

describe('SearchDataToTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchDataToTableService = TestBed.get(SearchDataToTableService);
    expect(service).toBeTruthy();
  });
});
