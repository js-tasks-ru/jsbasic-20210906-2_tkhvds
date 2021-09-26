function makeDiagonalRed(table) {
  let td = table.querySelectorAll('td');
  for (let j = 0; j < td.length; j+=6){
    td[j].style.backgroundColor = 'red';
 }
}
