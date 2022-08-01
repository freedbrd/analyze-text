import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalyzerComponent } from './text-analyzer.component';
import { NgxsModule, Store } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyzeTextMode } from '../../shared/enums/analyze-text-mode.enum';
import { AnalyzerTextState } from '../../../ngxs/analyzer-text/analyzer-text.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AnalyzeText } from '../../../ngxs/analyzer-text/analyzer-text.actions';
import { IsOnlineService } from '../../shared/services/is-online.service';
import { AnalyzeResult } from '../../shared/models/analyze-result.model';
import { OnlineAnalyzerTextService } from '../../shared/services/analyzer/online-analyzer-text.service';
import { of } from 'rxjs';

const testString = 'test';

const testResultConsonants: AnalyzeResult[] = [
  new AnalyzeResult('b', 0),
  new AnalyzeResult('c', 0),
  new AnalyzeResult('d', 0),
  new AnalyzeResult('f', 0),
  new AnalyzeResult('g', 0),
  new AnalyzeResult('h', 0),
  new AnalyzeResult('j', 0),
  new AnalyzeResult('k', 0),
  new AnalyzeResult('l', 0),
  new AnalyzeResult('m', 0),
  new AnalyzeResult('n', 0),
  new AnalyzeResult('p', 0),
  new AnalyzeResult('q', 0),
  new AnalyzeResult('r', 0),
  new AnalyzeResult('s', 1),
  new AnalyzeResult('t', 2),
  new AnalyzeResult('v', 0),
  new AnalyzeResult('w', 0),
  new AnalyzeResult('x', 0),
  new AnalyzeResult('z', 0),
];

const testResultVowel: AnalyzeResult[] = [
  new AnalyzeResult('a', 0),
  new AnalyzeResult('e', 1),
  new AnalyzeResult('i', 0),
  new AnalyzeResult('o', 0),
  new AnalyzeResult('u', 0),
];

describe('TextAnalyzerComponent', () => {
  let component: TextAnalyzerComponent;
  let fixture: ComponentFixture<TextAnalyzerComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextAnalyzerComponent],
      imports: [
        NgxsModule.forRoot([AnalyzerTextState]),
        ReactiveFormsModule,
        FormsModule,
        NzSelectModule,
        BrowserAnimationsModule,
        HttpClientTestingModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TextAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate btn', () => {
    const btn = document.querySelector('button');

    expect(btn.disabled).toBeTrue();

    component.form.setValue({
      text: 'test test',
      mode: AnalyzeTextMode.VOWELS,
    });

    fixture.detectChanges();

    expect(btn.disabled).toBeFalse();
  });

  it('should call onAnalyze method', () => {
    const btn = document.querySelector('button');

    const onAnalyzeSpy = spyOn(component, 'onAnalyze');

    component.form.setValue({
      text: 'test test',
      mode: AnalyzeTextMode.VOWELS,
    });

    fixture.detectChanges();

    btn.click();

    expect(onAnalyzeSpy).toHaveBeenCalled();

  });

  it('should calc VOWELS if offline', () => {
    const isOnlineService = TestBed.inject(IsOnlineService);

    isOnlineService.isOnline.next(false);

    store.dispatch(new AnalyzeText({
      text: testString,
      mode: AnalyzeTextMode.VOWELS,
    }));

    const textAnalyzeResult = store.selectSnapshot(state => state.AnalyzerText.textAnalyze);

    expect(textAnalyzeResult).toEqual(testResultVowel);

  });

  it('should calc CONSONANTS if offline', () => {
    const isOnlineService = TestBed.inject(IsOnlineService);

    isOnlineService.isOnline.next(false);

    store.dispatch(new AnalyzeText({
      text: 'test',
      mode: AnalyzeTextMode.CONSONANTS,
    }));

    const textAnalyzeResult = store.selectSnapshot(state => state.AnalyzerText.textAnalyze);

    expect(textAnalyzeResult).toEqual(testResultConsonants);

  });

  it('should check connection', () => {
    const isOnlineService = TestBed.inject(IsOnlineService);
    const onlineAnalyzerTextService = TestBed.inject(OnlineAnalyzerTextService);
    isOnlineService.isOnline.next(true);

    const spy = spyOn(onlineAnalyzerTextService, 'analyzeText');
    const spyOnline = spyOn(isOnlineService, 'checkConnection').and.returnValue(of(true));

    store.dispatch(new AnalyzeText({
      text: testString,
      mode: AnalyzeTextMode.CONSONANTS,
    }));

    expect(spyOnline).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should call online service', () => {
    const isOnlineService = TestBed.inject(IsOnlineService);
    const onlineAnalyzerTextService = TestBed.inject(OnlineAnalyzerTextService);

    const spy = spyOn(onlineAnalyzerTextService, 'analyzeText');
    spyOn(isOnlineService, 'checkConnection').and.returnValue(of(true));

    store.dispatch(new AnalyzeText({
      text: testString,
      mode: AnalyzeTextMode.CONSONANTS,
    }));

    expect(spy).toHaveBeenCalledWith(testString, AnalyzeTextMode.CONSONANTS);
  });
});
