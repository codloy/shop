export function formatAsCurrency(currency: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MNT',

    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
    // currencySign: '₮',
    currencyDisplay: 'symbol',
  });

  const formattedAmount = formatter.format(currency);

  return formattedAmount.replace('MNT', '₮');
}
