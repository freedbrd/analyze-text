import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyzeTextMode } from '../../enums/analyze-text-mode.enum';

@Injectable()
export abstract class AnalyzerTextService {
  abstract analyzeText(text: string, mode: AnalyzeTextMode): Observable<any>;
}

