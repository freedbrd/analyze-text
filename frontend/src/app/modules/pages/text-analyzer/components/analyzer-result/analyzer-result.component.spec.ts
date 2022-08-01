import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerResultComponent } from './analyzer-result.component';
import { HandleEmptyPipe } from '../../../../shared/pipes/handle-empty.pipe';
import { NzTableModule } from 'ng-zorro-antd/table';

const letterList = [
  {
    letter: 'l',
    value: 1,
  },
  {
    letter: 'k',
    value: 2,
  },
];

describe('AnalyzerResultComponent', () => {
  let component: AnalyzerResultComponent;
  let fixture: ComponentFixture<AnalyzerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzerResultComponent, HandleEmptyPipe ],
      imports: [NzTableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill the table', () => {
    component.textAnalyzeList = letterList;

    fixture.detectChanges();

    const trCollection = document.getElementsByTagName('tr');
    const array = Array.from(trCollection);

    expect(array.some(item => item?.innerText.includes(letterList[0].letter))).toBeTrue();
    expect(array.some(item => item?.innerText.includes(letterList[1].letter))).toBeTrue();
  });
});
