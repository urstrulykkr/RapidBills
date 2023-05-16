const countryList = [
  { value: 'Japan', text: 'Japan', cur: 'JPY' },
  { value: 'United Kingdom', text: 'United Kingdom', cur: 'GBP' },
  { value: 'Australia', text: 'Australia', cur: 'AUD' },
  { value: 'India', text: 'India', cur: 'INR' },
  { value: 'Indonesia', text: 'Indonesia', cur: 'IDR' },
  { value: 'United States', text: 'United States', cur: 'USD' },
  { value: 'China', text: 'China', cur: 'CNY' },
  { value: 'Germany', text: 'Germany', cur: 'EUR' },
  { value: 'Russia', text: 'Russia', cur: 'JPY' },
  { value: 'Brazil', text: 'Brazil', cur: 'BRL' },
  { value: 'Canada', text: 'Canada', cur: 'CAD' },
  { value: 'Turkey', text: 'Turkey', cur: 'TRY' },
  { value: 'Saudi Arabia', text: 'Saudi Arabia', cur: 'SAR' },
  { value: 'South Africa', text: 'South Africa' , cur: 'KRW'},
  { value: 'France', text: 'France' , cur: 'EUR'},
  { value: 'Italy', text: 'Italy' , cur: 'EUR'},
  { value: 'South Korea', text: 'South Korea' , cur: 'KRW'},
  { value: 'Spain', text: 'Spain' , cur: 'EUR'},
  { value: 'Netherlands', text: 'Netherlands' , cur: 'EUR'},
  { value: 'Mexico', text: 'Mexico' , cur: 'MXN'},
]

countryList.sort((a, b) => {
  const textA = a.text.toUpperCase();
  const textB = b.text.toUpperCase();

  if (textA < textB) {
    return -1;
  }
  if (textA > textB) {
    return 1;
  }

  return 0;
});

export default countryList
