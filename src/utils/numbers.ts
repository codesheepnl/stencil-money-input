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

/**
 * Takes integer and fractional as strings and converts them to a floating point number.
 * If empty or invalid, will return NaN or null respectively.
 *
 * @param integer: string
 * @param fractional: string
 * @returns: number
 */
export function calculateFloatFromIntegerAndFractionalStrings(
  integer: string,
  fractional: string
): number {
  if (integer === '' && fractional === '') {
    return null;
  }

  const numberRegex = /^\d+$/;

  if (!numberRegex.test(integer) || !numberRegex.test(fractional)) {
    return NaN;
  }

  const integerInt = parseInt(integer);
  const fractionalInt = parseInt(fractional);

  if (
    Number.isNaN(integerInt) ||
    Number.isNaN(fractionalInt) ||
    integerInt < 0 ||
    fractionalInt < 0
  ) {
    return NaN;
  }

  const float = parseFloat(`${integer}.${fractional}`);

  return Math.round(float * 100) / 100;
}
