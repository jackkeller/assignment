export const formatListingPrice = (price: number) => {
  const options = {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 0,
  };
  return price.toLocaleString('en-EN', options);
};

export const formatNums = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const bathMath = (full: number, half: number) => {
  return full + (half / 2);
};

export const formatDate = (listedDate: Date) => {
  const date = new Date(listedDate);
  return date.toLocaleDateString('en-EN');
}
