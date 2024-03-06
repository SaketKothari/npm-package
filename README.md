# @everapi/freecurrencyapi-js

A simple npm package for currency conversion using the Free Currency API.

## Installation

You can install this package via npm:

```
npm install @everapi/freecurrencyapi-js
```

## Usage

```javascript
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi(APIKEY);

async function convertCurrency(fromCurrency, toCurrency, amount) {
  const currencyData = await freecurrencyapi.latest({
    baseCurrency: fromCurrency,
    targetCurrencies: toCurrency,
  });

  const conversionRate = currencyData.data[toCurrency];
  return conversionRate * amount;
}
```

### Parameters:
- fromCurrency: The currency code you want to convert from.
- toCurrency: The currency code you want to convert to.
- amount: The amount of currency you want to convert.

#

```javascript
const convertedAmount = await convertCurrency('INR', 'USD', 100);
console.log(convertedAmount); // Output: Converted amount in USD
```
