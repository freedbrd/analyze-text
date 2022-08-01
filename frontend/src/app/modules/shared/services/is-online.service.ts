import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { catchError, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IsOnlineService {
  private cancelRequest = new Subject<null>();
  isOnline = new BehaviorSubject<boolean>(true);

  constructor(
    private http: HttpClient,
  ) {
  }

  checkConnection(): Observable<boolean> {
    this.cancelRequest.next();

    return this.http.get<boolean>(`${environment.api}/api/is-online`)
      .pipe(
        tap(connectionState => this.isOnline.next(connectionState)),
        catchError(err => {

          this.isOnline.next(false);

          return throwError(err);
        }),
        takeUntil(this.cancelRequest),
      );
  }
}
