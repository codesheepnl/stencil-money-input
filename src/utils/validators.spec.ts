import { validateMoney, validateRequired } from '@src/utils/validators';

describe('Validators util tests', () => {
  test.each([
    { value: '', expected: false },
    { value: 0, expected: true },
    { value: 2, expected: true },
    { value: 'value', expected: true },
    { value: undefined, expected: false },
    { value: null, expected: false },
  ])('validateRequired should validate values for %o', ({ value, expected }) => {
    const result = validateRequired<any>(value);
    expect(result).toEqual(expected);
  });

  test.each([
    { value: 1.99, expected: true },
    { value: 1, expected: true },
    { value: 0.11, expected: true },
    { value: NaN, expected: false },
    { value: null, expected: false },
    { value: undefined, expected: false },
  ])('validateMoney should validate values for %o', ({ value, expected }) => {
    const result = validateMoney(value);
    expect(result).toEqual(expected);
  });
});
