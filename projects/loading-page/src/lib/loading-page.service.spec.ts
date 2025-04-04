import { TestBed } from '@angular/core/testing';

import { LoadingPageService } from './loading-page.service';

describe('LoadingPageService', () => {
  let service: LoadingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
