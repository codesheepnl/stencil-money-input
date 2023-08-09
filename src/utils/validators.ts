
/**
 * Validates a value of type T for truthiness.
 * 
 * @param value: T
 * @returns: boolean
 */
export function validateRequired<T>(value: T): boolean {
  return value !== undefined && value !== null && value !== '';
}

/**
 * Validates if a currency is in the correct format.
 * 
 * @param value: number
 * @returns: boolean
 */
export function validateMoney(value: number): boolean {
  return new RegExp(/^\d+\.?\d{0,2}$/).test(value.toString());
}
