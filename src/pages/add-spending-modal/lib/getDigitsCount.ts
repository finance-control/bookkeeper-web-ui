export const getDigitsCount = (number: number): number => {
  const numberString = number.toString()
  if (numberString.includes('.')) {
    const parts = numberString.split('.')
    if (Array.isArray(parts) && parts.length > 1) {
      return parts.pop()!.length
    }
  }
  return 0;
}