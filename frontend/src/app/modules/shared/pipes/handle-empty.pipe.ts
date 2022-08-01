import { Pipe, PipeTransform } from '@angular/core';
import { AnalyzeResult } from '../models/analyze-result.model';

@Pipe({
  name: 'handleEmpty',
})
export class HandleEmptyPipe implements PipeTransform {

  transform(value: AnalyzeResult[]): unknown {
    return value?.filter(item => item.value);
  }

}
