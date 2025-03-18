function gaming() {
  const button = document.querySelector('.js-button');
      if (!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled');
      } else{
        button.classList.remove('is-toggled')
      }
}

function music() {
  const button = document.querySelector('.js-2');
      if (!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled');
      } else{
        button.classList.remove('is-toggled')
      }
}

function tech() {
  const button = document.querySelector('.js-3');
      if (!button.classList.contains('is-toggled')){
        button.classList.add('is-toggled');
      } else{
        button.classList.remove('is-toggled')
      }
}