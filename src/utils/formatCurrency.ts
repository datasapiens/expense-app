const getFormattedCurrency = (currency: string): string => {
  if (currency?.[0] === '-') {
    return `-$${currency?.substring(1)}`
  } else {
    return `$${currency}`
  }
}

export default getFormattedCurrency
