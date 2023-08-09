import { getIntegerAndFractionalPartsFromNumber } from '@utils/numbers';

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
});
