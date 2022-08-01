import { Injectable } from '@angular/core';
import { AnalyzerTextService } from './analyzer-text.service';
import { AnalyzeTextMode } from '../../enums/analyze-text-mode.enum';
import { Observable, of } from 'rxjs';
import { consonantsLetterList, vowelsLetterList } from '../../constants/letters';
import { AnalyzeResult } from '../../models/analyze-result.model';

@Injectable({
  providedIn: 'root',
})
export class OfflineAnalyzerTextService implements AnalyzerTextService {

  analyzeText(text: string, mode: AnalyzeTextMode): Observable<AnalyzeResult[]> {
    return of(
      this.countText(
        text,
        mode === AnalyzeTextMode.VOWELS
          ? vowelsLetterList
          : consonantsLetterList,
      ),
    );
  }

  private countText(text: string, letterMatchList: string[]): any {
    return letterMatchList.map(letter => (
      new AnalyzeResult(
        letter,
        this.letterCounter(text, letter),
      )
    ));
  }

  private letterCounter(text: string, targetLetter: string): number {
    let count = 0;

    for (const letter of text) {
      if (letter?.toLowerCase() === targetLetter?.toLowerCase()) {
        count++;
      }
    }

    return count;
  }
}
