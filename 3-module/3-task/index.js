function camelize(str) {
  return str.split('-').map(
      (value, index) => index !== 0 ? 
      value[0].toUpperCase() + value.slice(1) : 
      value).join('');
}
