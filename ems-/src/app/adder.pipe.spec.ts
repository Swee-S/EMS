import { AdderPipe } from './adder.pipe';

describe('AdderPipe', () => {
  it('create an instance', () => {
    const pipe = new AdderPipe();
    expect(pipe).toBeTruthy();
  });
});
