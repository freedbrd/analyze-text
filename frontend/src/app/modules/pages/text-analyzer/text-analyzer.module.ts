import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAnalyzerComponent } from './text-analyzer.component';
import { RouterModule } from '@angular/router';
import { AnalyzerResultComponent } from './components/analyzer-result/analyzer-result.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TextAnalyzerComponent,
    AnalyzerResultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: TextAnalyzerComponent},
    ])
  ],
})
export class TextAnalyzerModule { }
