// Converts 100000 into $100,000
export const formatListingPrice = (price: number) => {
  const options = {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 0,
  };
  return price.toLocaleString('en-EN', options);
};

// Converts 1800 into 1,800
export const formatNums = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Adds FULL and HALF baths
export const bathMath = (full: number, half: number) => {
  return full + (half / 2);
};

// Converts Data string into Locale format
export const formatDate = (listedDate: Date) => {
  const date = new Date(listedDate);
  return date.toLocaleDateString('en-EN');
}
