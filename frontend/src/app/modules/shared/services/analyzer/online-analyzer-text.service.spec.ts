import { TestBed } from '@angular/core/testing';

import { OnlineAnalyzerTextService } from './online-analyzer-text.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OnlineAnalyzerTextService', () => {
  let service: OnlineAnalyzerTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OnlineAnalyzerTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
