import { TestBed } from '@angular/core/testing';

import { NgxClonedWowsService } from './ngx-cloned-wows.service';

describe('NgxClonedWowsService', () => {
  let service: NgxClonedWowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxClonedWowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
