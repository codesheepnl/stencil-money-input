import { Currency } from '@constants/currency';

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

export function isValidNumberInput(input: string): boolean {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(input);
}
