// ==================== HOME SLIDER ====================

const homeSwiper = new Swiper('.home-slider', {
    loop: true,
    grabCursor: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


// ==================== NAVBAR ====================

const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}


// ==================== SEARCH FORM ====================

const searchForm = document.querySelector(".header .search-form");
const searchBtn = document.querySelector("#search-btn");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        searchForm.classList.toggle("active");
    });
}


// ==================== CONTACT INFORMATION ====================

const contactInfo = document.querySelector(".contact-info");

// Close button inside contact information
const closeContactInfo = document.querySelector("#close-contact-info");

if (closeContactInfo) {
    closeContactInfo.addEventListener("click", () => {
        contactInfo.classList.remove("active");
    });
}


// Contact button/icon in header
const contactBtn = document.querySelector("#contact-btn");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        contactInfo.classList.add("active");
    });
}


const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('#home, #about, #services, #projects, #contact-us');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(
                '.navbar a[href="#' + entry.target.id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.4
});

sections.forEach(section => {
    observer.observe(section);
});
