function highlight(table) {
  const elementsTr = table.querySelectorAll('tr:not(:first-child)');
  const elementsTd = table.querySelectorAll('td')

  const arrayElementsTd = Array.from(elementsTd);
  const arrayElementsTr = Array.from(elementsTr);

  arrayElementsTd.filter(function(item){
      if (item.dataset.available === 'false') item.parentNode.classList.add('unavailable');

      if (item.dataset.available === 'true') item.parentNode.classList.add('available');
      

      if (item.innerHTML === 'm') item.parentNode.classList.add('male');

      if (item.innerHTML === 'f') item.parentNode.classList.add('female');

      if (isFinite(item.innerHTML)) {
          if(item.innerHTML < 18){
              item.parentNode.style.textDecoration = "line-through";
          }
      }

  });

  arrayElementsTd.filter(function(item) {

    if (item.hasAttribute('data-available') ){
        item.parentNode.hidden = false;
    } else {
        item.parentNode.hidden = true;
    }
})
}
