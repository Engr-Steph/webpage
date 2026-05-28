// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // Create mobile menu
    if (hamburger && !document.querySelector('.mobile-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <ul class="mobile-nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#learn">Learn</a></li>
                <li><a href="#format">Format</a></li>
                <li><a href="#curriculum">Curriculum</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        `;
        navbar.appendChild(mobileMenu);
    }

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('active');
            }
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
});

// CTA Button scroll to contact
document.querySelectorAll('.cta-button').forEach(button => {
    if (button.textContent.includes('Start Learning')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const company = document.getElementById('company').value.trim();
        const course = document.getElementById('course').value;
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !course) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Prepare data to send to Google Apps Script
        const formData = {
            name,
            email,
            company,
            course,
            message
        };

        // Send to Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyLgsN_jRqdZ-l8MbXNo9LxZimPfGBa_13LZGJSrdAUfFplKmYgyGIqfpFaRefY3-tjXA/exec';

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(`Thank you, ${name}! We've received your submission and will be in touch soon at ${email}`);
                contactForm.reset();
            } else {
                alert('There was an error submitting your form. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again.');
        });
    });
}

// Add scroll animation for course cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Smooth navigation highlights
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active,
    .mobile-nav-links a.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 2px;
    }

    .mobile-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-white);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: var(--spacing-lg);
        z-index: 99;
    }

    .mobile-menu.active {
        display: block;
    }

    .mobile-nav-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .mobile-nav-links a {
        text-decoration: none;
        color: var(--text-dark);
        font-weight: 500;
        display: block;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }

    @media (min-width: 769px) {
        .mobile-menu {
            display: none !important;
        }
    }
`;
document.head.appendChild(style);
