

export const usdCurrencyFormatter = (value) => {
  return Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export const formatters = {
  usdCurrencyFormatter
}