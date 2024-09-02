export function convertToMungu(amountInTugrug: number): number {
  const amountInMungu = Number(BigInt(Math.round(amountInTugrug * 100) + ''));

  return amountInMungu;
}
