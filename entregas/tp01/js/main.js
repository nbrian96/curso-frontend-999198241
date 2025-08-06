document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada correctamente =)');

    initBackToTopButton();
    autoCollapseNavbar();
});

function initBackToTopButton() {
    const btnTop = document.getElementById('btn-top');

    if (!btnTop) return;

    window.addEventListener('scroll', () => {
        btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

function autoCollapseNavbar() {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                // Usa el método de Bootstrap para colapsar
                const collapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                collapse.hide();
            }
        });
    });
};