import { NgModule } from '@angular/core';
import { OnlineStatusModule } from 'ngx-online-status';
import { ReactiveFormsModule } from '@angular/forms';
import { ZorroModule } from './modules/zorro/zorro.module';
import { HandleEmptyPipe } from './pipes/handle-empty.pipe';

@NgModule({
  declarations: [
    HandleEmptyPipe,
  ],
  imports: [
    OnlineStatusModule,
    ReactiveFormsModule,
    ZorroModule,
  ],
  exports: [
    OnlineStatusModule,
    ReactiveFormsModule,
    ZorroModule,
    HandleEmptyPipe,
  ],
})
export class SharedModule {
}
