import { Component, OnInit } from '@angular/core';
import { EMPTY, interval } from 'rxjs';
import { retry, switchMap } from 'rxjs/operators';
import { IsOnlineService } from './modules/shared/services/is-online.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private isOnlineService: IsOnlineService
  ) {
  }

  ngOnInit(): void {
    this.testConnection();
  }

  private testConnection(): void {
    interval(5000).pipe(
      switchMap(() => {
        return this.isOnlineService?.isOnline?.value ? EMPTY : this.isOnlineService.checkConnection();
      }),
      retry()
    ).subscribe();
  }
}
