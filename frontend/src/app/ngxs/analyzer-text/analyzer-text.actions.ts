import { AnalyzeResult } from '../../modules/shared/models/analyze-result.model';
import { AnalyzeTextMode } from '../../modules/shared/enums/analyze-text-mode.enum';

export interface AnalyzerTextStateModel {
  textAnalyze: AnalyzeResult[];
}

export class AnalyzeText {
  static readonly type = '[AnalyzerText] Analyze Text';

  constructor(
    public payload: { text: string, mode: AnalyzeTextMode },
  ) {
  }
}
