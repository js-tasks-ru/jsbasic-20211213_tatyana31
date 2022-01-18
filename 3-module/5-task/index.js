function getMinMax(str) {
  let parts = str.split(" ");
  let numericParts = parts.map(p => Number(p)).filter(p => !isNaN(p));

  return {
    min: numericParts.reduce((minItem, current) => current < minItem ? current : minItem, numericParts[0]),
    max: numericParts.reduce((maxItem, current) => current > maxItem ? current : maxItem, numericParts[0])
  };
}

console.log(getMinMax('1 и -5.8 или 10 хотя 34 + -5.3 и 73'));