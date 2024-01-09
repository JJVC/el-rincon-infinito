document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
            navbar.classList.add('fixed-navbar');
    });

    // Asegura que la barra de navegación esté en la parte superior al cargar la página
    window.addEventListener('load', function () {
        navbar.classList.add('fixed-navbar');
    });
});

function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    if (window.innerWidth <= 768) { // Agregamos una comprobación del ancho de la pantalla
        navList.classList.toggle('show');
    }
}
