import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [],
  imports: [
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzTableModule,
  ],
  exports: [
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzTableModule,
  ],
})
export class ZorroModule {
}
