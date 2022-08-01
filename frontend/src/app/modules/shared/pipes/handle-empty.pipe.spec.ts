import { HandleEmptyPipe } from './handle-empty.pipe';

const letterList = [
  {
    letter: 'l',
    value: 0,
  },
  {
    letter: 'k',
    value: 2,
  },
];

describe('HandleEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new HandleEmptyPipe();
    expect(pipe).toBeTruthy();
  });

  it('filter empty values', () => {
    const pipe = new HandleEmptyPipe();
    expect(pipe.transform(letterList)).toEqual([
      {
        letter: 'k',
        value: 2,
      },
    ]);
  });
});
