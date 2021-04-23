const navbar = document.querySelector('.navbar');
const nav_link = document.querySelectorAll('.nav-link');
navbar.addEventListener('click', (e) => {
    for (let i = 0; i < nav_link.length; i++) {
        nav_link[i].classList.remove('active');
    }
    e.target.classList.add('active');
});