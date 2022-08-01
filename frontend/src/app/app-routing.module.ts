import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefreshComponent } from './modules/shared/components/refresh/refresh.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/text-analyzer/text-analyzer.module').then(m => m.TextAnalyzerModule)
  },
  {
    path: 'refresh',
    component: RefreshComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
