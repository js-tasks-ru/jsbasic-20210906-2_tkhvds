function makeDiagonalRed(table) {
  const elementsTd = table.querySelectorAll('td')
  const arrayElementsTd = Array.from(elementsTd);
  
  arrayElementsTd.map(item =>
  item.innerHTML[0] === item.innerHTML[2] ? item.style.backgroundColor = 'red' : '' )

}
