import { Currency } from '@constants/currency';

/**
 * Takes a Currency code and returns the corresponding HTML code.
 *
 * @param code: Currency
 * @returns string
 */
export function getCurrencyDisplayByCode(code: Currency): string {
  switch (code) {
    case Currency.EUR:
      return '&euro;';
    case Currency.USD:
      return '&dollar;';
    default:
      return '&euro;';
  }
}

/**
 * Takes a float and returns the two parts in a string array.
 *
 * @param value: number
 * @returns string[]
 */
export function getIntegerAndFractionalPartsFromNumber(value: number): string[] {
  if (!value) return ['', ''];

  let [integer, fractional] = value.toString().split('.');

  if (!fractional || fractional === '') {
    fractional = '00';
  } else if (fractional.length === 1) {
    fractional += '0';
  }

  return [integer, fractional];
}

export function validateRequired<T>(value: T): boolean {
  return value !== undefined && value !== null && value !== '';
}

export function validateMoney(value: number): boolean {
  console.log(value.toString());
  return new RegExp(/^\d+\.?\d{0,2}$/).test(value.toString());
}
