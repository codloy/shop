export function convertToTugrug(amountInMungu: number): number {
  const amountInTugrug = parseFloat(amountInMungu + '') / 100;

  return amountInTugrug;
}
