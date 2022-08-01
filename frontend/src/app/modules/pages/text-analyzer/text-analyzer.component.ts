import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnalyzeTextMode } from '../../shared/enums/analyze-text-mode.enum';
import { Select, Store } from '@ngxs/store';
import { AnalyzeText } from '../../../ngxs/analyzer-text/analyzer-text.actions';
import { AnalyzerTextState } from '../../../ngxs/analyzer-text/analyzer-text.state';
import { Observable } from 'rxjs';
import { AnalyzeResult } from '../../shared/models/analyze-result.model';

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.scss'],
})
export class TextAnalyzerComponent implements OnInit {
  @Select(AnalyzerTextState.textAnalyze) textAnalyze$: Observable<AnalyzeResult[]>;

  form: FormGroup;

  analyzeTextModeOptions = [
    {
      title: 'Vowels',
      value: AnalyzeTextMode.VOWELS,
    },
    {
      title: 'Consonants',
      value: AnalyzeTextMode.CONSONANTS,
    },
  ];

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onAnalyze(): void {
    const {text, mode} = this.form.value;

    this.store.dispatch(new AnalyzeText({
      text,
      mode,
    }));
  }

  private initForm(): void {
    this.form = this.fb.group({
      text: ['', Validators.required],
      mode: [AnalyzeTextMode.VOWELS],
    });
  }
}
