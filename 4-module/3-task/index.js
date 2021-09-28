function highlight(table) {
  const elementsTr = table.querySelectorAll('tr:not(:first-child)');
  const elementsTd = table.querySelectorAll('td')

  const arrayElementsTd = Array.from(elementsTd);
  
  arrayElementsTd.map(item =>
      item.dataset.available === 'true'
      ? item.parentNode.classList.add('available'):
      item.dataset.available === 'false'
      ? item.parentNode.classList.add('unavailable') : '');

  arrayElementsTd.map(item =>
      !item.classList.contains('available') && !item.classList.contains('unavailable')
      ?item.parentNode.hidden = true : '');

  for (let k = 0; k < elementsTd.length; k++){
      if (isFinite(elementsTd[k].innerHTML)) {
        if(elementsTd[k].innerHTML < 18){
          elementsTd[k].parentNode.style.textDecoration = "line-through";
      }
    }
  }

  arrayElementsTd.map(item =>
      item.innerHTML === 'm'
      ? item.parentNode.classList.add('male'):
      item.innerHTML === 'f'
      ? item.parentNode.classList.add('female') : '')
}
