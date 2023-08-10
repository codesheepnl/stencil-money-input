import {
  calculateFloatFromIntegerAndFractionalStrings,
  getIntegerAndFractionalPartsFromNumber,
} from '@utils/numbers';

describe('Numbers util tests', () => {
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

  test.each([
    { integer: '1', fractional: '99', expected: 1.99 },
    { integer: '314', fractional: '11', expected: 314.11 },
    { integer: '314', fractional: '00', expected: 314 },
    { integer: '', fractional: '11', expected: NaN },
    { integer: '0', fractional: '11', expected: 0.11 },
    { integer: '', fractional: '', expected: null },
    { integer: '-1', fractional: '00', expected: NaN },
    { integer: '', fractional: '-1', expected: NaN },
    { integer: 'gibberish', fractional: '', expected: NaN },
    { integer: '', fractional: 'gibberish', expected: NaN },
    { integer: 'gibberish', fractional: 'gibberish', expected: NaN },
  ])(
    'calculateFloatFromIntegerAndFractionalStrings should return correct value for %o',
    ({ integer, fractional, expected }) => {
      const result = calculateFloatFromIntegerAndFractionalStrings(integer, fractional);
      expect(result).toEqual(expected);
    }
  );
});
