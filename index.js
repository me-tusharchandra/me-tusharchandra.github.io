// Add smooth scrolling initialization
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');
        
        if (navbarCollapse.classList.contains('show') && 
            !navbarCollapse.contains(e.target) && 
            !navbarToggler.contains(e.target)) {
            navbarCollapse.classList.remove('show');
        }
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                // Trigger the toggler button state change
                document.querySelector('.navbar-toggler').classList.add('collapsed');
            }
        });
    });

    // Existing scroll to top button code
    const toTop = document.querySelector(".to-top");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });

    // Smooth scroll with offset for header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 60;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
