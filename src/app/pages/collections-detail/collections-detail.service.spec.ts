import { TestBed } from '@angular/core/testing';

import { CollectionsDetailService } from './collections-detail.service';

describe('CollectionsDetailService', () => {
  let service: CollectionsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
