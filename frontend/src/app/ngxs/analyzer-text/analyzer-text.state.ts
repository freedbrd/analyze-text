import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AnalyzerTextStateModel, AnalyzeText } from './analyzer-text.actions';
import { Observable, of } from 'rxjs';
import { AnalyzeResult } from '../../modules/shared/models/analyze-result.model';
import { IsOnlineService } from '../../modules/shared/services/is-online.service';
import { OnlineAnalyzerTextService } from '../../modules/shared/services/analyzer/online-analyzer-text.service';
import { OfflineAnalyzerTextService } from '../../modules/shared/services/analyzer/offline-analyzer-text.service';
import { catchError, switchMap, tap } from 'rxjs/operators';

@State<AnalyzerTextStateModel>({
  name: 'AnalyzerText',
  defaults: {
    textAnalyze: null,
  },
})
@Injectable()
export class AnalyzerTextState {

  constructor(
    private isOnlineService: IsOnlineService,
    private onlineAnalyzerTextService: OnlineAnalyzerTextService,
    private offlineAnalyzerTextService: OfflineAnalyzerTextService,
  ) {
  }

  @Selector()
  static textAnalyze(state: AnalyzerTextStateModel): AnalyzeResult[] {
    return state.textAnalyze;
  }

  @Action(AnalyzeText)
  analyzeText({getState, setState}: StateContext<AnalyzerTextStateModel>, {payload}: AnalyzeText): Observable<any> {
    const isOnline = this.isOnlineService.isOnline.value;

    return (isOnline ? this.isOnlineService.checkConnection() : of(false))
      .pipe(
        switchMap((res: boolean) => {
          return res
            ? this.onlineAnalyzerTextService.analyzeText(payload.text, payload.mode)
            : this.offlineAnalyzerTextService.analyzeText(payload.text, payload.mode);
        }),
        catchError(() => this.offlineAnalyzerTextService.analyzeText(payload.text, payload.mode)),
        tap((textAnalyze: AnalyzeResult[]) => {
          const state = getState();

          setState({
            ...state,
            textAnalyze,
          });
        }),
      );
  }
}
