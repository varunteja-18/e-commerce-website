let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.classList.toggle('inactive');
}

navbar.onclick = () => {
    navbar.classList.remove('active')
    navbar.classList.add('inactive')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
