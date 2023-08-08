import { Currency } from '@constants/currency';
import {
  getCurrencyDisplayByCode,
  getIntegerAndFractionalPartsFromNumber,
} from '@src/utils/form';

describe('Form util tests', () => {
  test.each([
    { code: Currency.EUR, html: '&euro;' },
    { code: Currency.USD, html: '&dollar;' },
    { code: 'something-else-that-should-return-default-case', html: '&euro;' },
  ])(
    'getCurrencyDisplayByCode should return the correct html code for %s',
    ({ code, html }) => {
      const result = getCurrencyDisplayByCode(code as Currency);
      expect(result).toEqual(html);
    }
  );

  test.each([
    { number: 1, expected: ['1', '00'] },
    { number: 1.1, expected: ['1', '10'] },
    { number: 1.11, expected: ['1', '11'] },
    { number: undefined, expected: ['', ''] },
  ])(
    'getIntegerAndFractionalPartsFromNumber should return correct parts for %o',
    ({ number, expected }) => {
      const result = getIntegerAndFractionalPartsFromNumber(number);
      expect(result).toEqual(expected);
    }
  );
});
