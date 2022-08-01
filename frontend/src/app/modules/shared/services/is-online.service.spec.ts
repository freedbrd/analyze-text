import { TestBed } from '@angular/core/testing';

import { IsOnlineService } from './is-online.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IsOnlineService', () => {
  let service: IsOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsOnlineService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IsOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
