function truncate(str, maxlength) {
  if (str.length >= maxlenght){
    let result =  str.slice(0, maxlenght) + '…';
     return result;
  }
  if (str.length < maxlenght){
      let result2 = str;
      return result2;
  }
}
