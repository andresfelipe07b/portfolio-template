const hamburger = document.querySelector('.hamburger');
const navbarOptions = document.querySelector('.navbar-options');

hamburger.addEventListener('click', () => {
    // Toggle active class
    hamburger.classList.toggle('active');
    navbarOptions.classList.toggle('active');
    document.body.classList.toggle('menu-open');

});

// Cerrar el menú al hacer click en un enlace
document.querySelectorAll('.navbar-options a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarOptions.classList.remove('active');
        document.body.classList.remove('menu-open');

    });
});
