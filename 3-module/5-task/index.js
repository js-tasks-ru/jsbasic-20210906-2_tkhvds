function getMinMax(str) {
  let result = {};
  let allValues = str.split(' ');
  let arrayNumbers = [];
  for (let i = 0; i < allValues.length; i++){
      if( isFinite(allValues[i])) arrayNumbers.push(allValues[i]);
  }
  result.min = Math.min.apply(null, arrayNumbers);
  result.max = Math.max.apply(null, arrayNumbers);
 return result;
}
