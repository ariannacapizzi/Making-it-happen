var button = document.querySelector('button');

button.addEventListener('click', function(e) {
  e.currentTarget.classList.add('submitted');
})