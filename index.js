import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi(
  'fca_live_OuF0BNMBpfk39l6XIVJVpLvdqRtEvQk8Trdnevpf'
);

export async function convertCurrency(fromCurrency, toCurrency, amount) {
  const currencyData = await freecurrencyapi.latest({
    baseCurrency: fromCurrency,
    targetCurrencies: toCurrency,
  });

  const conversionRate = currencyData.data[toCurrency];
  return conversionRate * amount;
}
