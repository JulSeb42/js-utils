const convertPrice = (num, currency) => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency || "EUR"
  });
  return formatter.format(num);
};

module.exports = convertPrice;