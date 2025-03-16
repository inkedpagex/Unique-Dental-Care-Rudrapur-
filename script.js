// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// Gallery Implementation
const galleryGrid = document.querySelector('.gallery-grid');

// Create gallery items
const galleryImages = [
    'review/WhatsApp Image 2025-03-16 at 1.34.51 PM.jpeg',
    'review/WhatsApp Image 2025-03-16 at 1.34.52 PM.jpeg',
    'review/WhatsApp Image 2025-03-16 at 1.34.55 PM.jpeg',
    'review/WhatsApp Image 2025-03-16 at 1.34.56 PM.jpeg',
    'review/WhatsApp Image 2025-03-16 at 1.34.57 PM.jpeg'
'review/WhatsApp Image 2025-03-16 at 1.34.58 PM.jpeg'
'review/WhatsApp Image 2025-03-16 at 1.34.59 PM.jpeg'
'review/WhatsApp Image 2025-03-16 at 1.34.60 PM.jpeg'
'review/WhatsApp Image 2025-03-16 at 1.34.61 PM.jpeg'
'review/WhatsApp Image 2025-03-16 at 1.34.62 PM.jpeg'
'review/WhatsApp Image 2025-03-16 at 1.34.63 PM.jpeg'
];

galleryImages.forEach((imagePath, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', index * 100);
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Dental Care Gallery Image';
    
    item.appendChild(img);
    galleryGrid.appendChild(item);
    
    // Lightbox functionality
    item.addEventListener('click', () => {
        lightbox.innerHTML = `
            <img src="${imagePath}" alt="Dental Care Gallery Image">
            <span class="lightbox-close">&times;</span>
        `;
        lightbox.classList.add('active');
        
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    });
});

// Create lightbox container if it doesn't exist
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Testimonials Implementation
const testimonials = [
    {
        name: 'Priya Sharma',
        text: 'Outstanding dental care! Dr. Haneef and his team are professional and caring. My smile has never looked better!'
    },
    {
        name: 'Chirag',
        text: 'The best dental experience I\'ve ever had. The clinic is modern, clean, and the staff is extremely friendly.'
    },
    {
        name: 'Meera Patel',
        text: 'I\'m so happy with my dental implants! Dr. Haneef is truly skilled and made the whole process comfortable.'
    },
    {
        name: 'Abhay Singh',
        text: 'Excellent service and very reasonable pricing. The clinic uses modern technology and the results are amazing!'
    },
    {
        name: 'Neha Gupta',
        text: 'Dr. Haneef explained everything clearly and made me feel at ease. The root canal treatment was painless!'
    }
];

// Initialize testimonials slider
const testimonialsWrapper = document.querySelector('.testimonials-slider .swiper-wrapper');

testimonials.forEach((testimonial, index) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <i class="fas fa-user-circle testimonial-icon"></i>
            <h3>${testimonial.name}</h3>
            <p>${testimonial.text}</p>
        </div>
    `;
    testimonialsWrapper.appendChild(slide);
});

// Initialize Swiper
const swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Service Card Hover Animation
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Know More Button Click Handler
document.querySelectorAll('.know-more').forEach(button => {
    button.addEventListener('click', function() {
        const serviceName = this.parentElement.querySelector('h3').textContent;
        alert(`More information about ${serviceName} coming soon!`);
    });
});

// Mobile Menu Functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});
