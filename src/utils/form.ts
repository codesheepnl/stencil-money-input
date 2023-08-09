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
