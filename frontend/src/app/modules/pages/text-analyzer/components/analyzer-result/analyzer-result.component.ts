import { Component, Input } from '@angular/core';
import { AnalyzeResult } from '../../../../shared/models/analyze-result.model';

@Component({
  selector: 'app-analyzer-result',
  templateUrl: './analyzer-result.component.html',
  styleUrls: ['./analyzer-result.component.scss'],
})
export class AnalyzerResultComponent {
  @Input() textAnalyzeList: AnalyzeResult[];

  pageSize = 8;
}
