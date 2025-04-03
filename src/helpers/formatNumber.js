export default function formatNumber(number) {
  const newIntlNumber = new Intl.NumberFormat().format(number);
  return newIntlNumber;
}
