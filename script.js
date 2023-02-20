let harmburger = document.querySelector('.harmburger');
let nav = document.querySelector('#navbar ul');
let closeIcon = document.querySelector('.close-icon');

harmburger.addEventListener('click', () => {
    nav.classList.add('open')
})

closeIcon.addEventListener('click', () => {
    nav.classList.remove('open')
})
