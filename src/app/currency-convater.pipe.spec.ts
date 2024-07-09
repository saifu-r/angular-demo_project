import { CurrencyConvaterPipe } from './currency-convater.pipe';

describe('CurrencyConvaterPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyConvaterPipe();
    expect(pipe).toBeTruthy();
  });
});
