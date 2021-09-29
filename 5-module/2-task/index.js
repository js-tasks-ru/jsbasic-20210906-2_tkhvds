function toggleText() {
  const buttonToggle = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

 
  buttonToggle.addEventListener('click', function cluck(){
    if(text.hasAttribute('hidden')){
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', 'true');
    }
  })
 
}
