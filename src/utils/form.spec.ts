import { Currency } from '@constants/currency';
import { getCurrencyDisplayByCode } from '@utils/form';

describe('Form util tests', () => {
  test.each([
    { code: Currency.EUR, html: '&euro;' },
    { code: Currency.USD, html: '&dollar;' },
    { code: 'something-else-that-should-return-default-case', html: '&euro;' },
  ])('getCurrencyDisplayByCode should return the correct html code for %s', ({ code, html }) => {
    const result = getCurrencyDisplayByCode(code as Currency);
    expect(result).toEqual(html);
  });
});
