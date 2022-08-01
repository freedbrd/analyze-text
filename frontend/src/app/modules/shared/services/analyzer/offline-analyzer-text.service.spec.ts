import { TestBed } from '@angular/core/testing';

import { OfflineAnalyzerTextService } from './offline-analyzer-text.service';
import { AnalyzeResult } from '../../models/analyze-result.model';
import { AnalyzeTextMode } from '../../enums/analyze-text-mode.enum';

const testString = 'hello';

const testResultConsonants: AnalyzeResult[] = [
  new AnalyzeResult('b', 0),
  new AnalyzeResult('c', 0),
  new AnalyzeResult('d', 0),
  new AnalyzeResult('f', 0),
  new AnalyzeResult('g', 0),
  new AnalyzeResult('h', 1),
  new AnalyzeResult('j', 0),
  new AnalyzeResult('k', 0),
  new AnalyzeResult('l', 2),
  new AnalyzeResult('m', 0),
  new AnalyzeResult('n', 0),
  new AnalyzeResult('p', 0),
  new AnalyzeResult('q', 0),
  new AnalyzeResult('r', 0),
  new AnalyzeResult('s', 0),
  new AnalyzeResult('t', 0),
  new AnalyzeResult('v', 0),
  new AnalyzeResult('w', 0),
  new AnalyzeResult('x', 0),
  new AnalyzeResult('z', 0),
];

const testResultVowel: AnalyzeResult[] = [
  new AnalyzeResult('a', 0),
  new AnalyzeResult('e', 1),
  new AnalyzeResult('i', 0),
  new AnalyzeResult('o', 1),
  new AnalyzeResult('u', 0),
];

describe('OfflineAnalyzerTextService', () => {
  let service: OfflineAnalyzerTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineAnalyzerTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calc Consonants letter', (done) => {
    service.analyzeText(testString, AnalyzeTextMode.CONSONANTS).subscribe(res => {
      expect(res).toEqual(testResultConsonants);
      done();
    });
  });

  it('should calc Consonants VOWELS', (done) => {
    service.analyzeText(testString, AnalyzeTextMode.VOWELS).subscribe((res: AnalyzeResult[]) => {
      expect(res).toEqual(testResultVowel);
      done();
    });
  });
});
