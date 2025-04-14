/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    const navbarToggler = mainNav.querySelector('.navbar-toggler');
    const navbarResponsive = document.getElementById('navbarResponsive');
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        const currentTop = window.scrollY;
		
        // Check if user is scrolling up
        if (currentTop < scrollPos) {
            // Scrolling up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else if (currentTop > scrollPos) {
            // Scrolling down
            mainNav.classList.remove('is-visible');
            
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });

    // Close responsive menu when clicking outside
    document.addEventListener('click', (e) => {
        const isNavbarOpen = navbarResponsive.classList.contains('show');
        const clickedInsideNavbar = mainNav.contains(e.target);
        
        if (isNavbarOpen && !clickedInsideNavbar) {
            navbarToggler.click();
        }
    });

    // Close responsive menu when clicking a nav link (mobile)
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarResponsive.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});
