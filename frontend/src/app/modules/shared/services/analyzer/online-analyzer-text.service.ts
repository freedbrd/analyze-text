import { Injectable } from '@angular/core';
import { AnalyzerTextService } from './analyzer-text.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { AnalyzeTextMode } from '../../enums/analyze-text-mode.enum';
import { AnalyzeResult } from '../../models/analyze-result.model';

@Injectable({
  providedIn: 'root',
})
export class OnlineAnalyzerTextService implements AnalyzerTextService {

  constructor(
    private http: HttpClient,
  ) {
  }

  analyzeText(text: string, mode: AnalyzeTextMode): Observable<AnalyzeResult[]> {

    return this.http.get<AnalyzeResult[]>(`${environment.api}/api/analyze`, {
      params: {
        mode,
        text,
      },
    });
  }
}
