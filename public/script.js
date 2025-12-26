// Smooth scrolling and interactive animations
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add click to copy functionality for contact info
    const emailElement = document.querySelector('.contact-item span');
    if (emailElement && emailElement.textContent.includes('@')) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Click to copy';

        emailElement.addEventListener('click', function () {
            navigator.clipboard.writeText(this.textContent).then(function () {
                // Show temporary feedback
                const originalText = emailElement.textContent;
                emailElement.textContent = 'Copied!';
                emailElement.style.color = '#27ae60';

                setTimeout(() => {
                    emailElement.textContent = originalText;
                    emailElement.style.color = '';
                }, 1000);
            });
        });
    }

    // Add typing animation to the name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add progress bars for skills (optional enhancement)
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('skill-item-animate');
    });



    // Add theme toggle buttons (both visible)
    let isDarkMode = false;

    // Dark mode button
    const darkModeButton = document.createElement('button');
    darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeButton.className = 'theme-button dark-mode-button';
    darkModeButton.title = 'Modo Oscuro';
    darkModeButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        background: #1a1a1a;
        color: white;
        border: 2px solid #333;
        padding: 15px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${isDarkMode ? '0.5' : '1'};
    `;

    // Light mode button
    const lightModeButton = document.createElement('button');
    lightModeButton.innerHTML = '<i class="fas fa-sun"></i>';
    lightModeButton.className = 'theme-button light-mode-button';
    lightModeButton.title = 'Modo Claro';
    lightModeButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 95px;
        background: #f8f9fa;
        color: #f39c12;
        border: 2px solid #e0e0e0;
        padding: 15px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 1000;
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${isDarkMode ? '1' : '0.5'};
    `;

    // Function to apply dark mode with maximum contrast
    function applyDarkMode() {
        // Background ultra oscuro
        document.body.style.background = '#000000';
        document.body.style.color = '#ffffff';

        const container = document.querySelector('.container');
        if (container) {
            container.style.background = '#0d0d0d';
            container.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.9)';
            container.style.border = '1px solid #1a1a1a';
        }

        const header = document.querySelector('.header');
        if (header) {
            header.style.background = 'linear-gradient(135deg, #0a1929 0%, #1a2332 100%)';
        }

        // Update all sections with maximum contrast
        document.querySelectorAll('.section-content').forEach(el => {
            el.style.color = '#f0f0f0';
        });

        document.querySelectorAll('.section-content p').forEach(el => {
            el.style.color = '#e8e8e8';
        });

        document.querySelectorAll('.experience-item, .education-item, .skill-item, .language-item').forEach(el => {
            el.style.background = '#1a1a1a';
            el.style.color = '#ffffff';
            el.style.borderColor = '#2a2a2a';
            el.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';
        });

        // Certificados y workshops con contraste máximo
        document.querySelectorAll('.certification-item').forEach(el => {
            el.style.background = '#1a1a1a';
            el.style.borderColor = '#2a2a2a';
            el.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';
        });

        document.querySelectorAll('.certification-item h4').forEach(el => {
            el.style.color = '#ffffff';
            el.style.fontWeight = '600';
        });

        document.querySelectorAll('.section-title').forEach(el => {
            el.style.color = '#60a5fa';
            el.style.borderBottomColor = '#60a5fa';
        });

        document.querySelectorAll('.section-title::after').forEach(el => {
            el.style.background = '#ef4444';
        });

        document.querySelectorAll('.job-title, .degree, .skill-name, .language').forEach(el => {
            el.style.color = '#ffffff';
        });

        document.querySelectorAll('.company, .institution, .level').forEach(el => {
            el.style.background = '#2a2a2a';
            el.style.color = '#60a5fa';
        });

        document.querySelectorAll('.period, .year').forEach(el => {
            el.style.background = '#1a1a1a';
            el.style.color = '#a0a0a0';
        });

        document.querySelectorAll('.responsibilities li').forEach(el => {
            el.style.color = '#e0e0e0';
        });

        document.querySelectorAll('.skills-legend').forEach(el => {
            el.style.background = '#1a1a1a';
            el.style.color = '#e8e8e8';
            el.style.borderColor = '#2a2a2a';
        });

        document.querySelectorAll('.skills-legend p').forEach(el => {
            el.style.color = '#e0e0e0';
        });

        document.querySelectorAll('.skills-legend strong').forEach(el => {
            el.style.color = '#ffffff';
        });

        // Contact items
        document.querySelectorAll('.contact-item').forEach(el => {
            el.style.color = '#f0f0f0';
        });

        document.querySelectorAll('.contact-item a').forEach(el => {
            el.style.color = '#60a5fa';
        });

        // Stars in skills
        document.querySelectorAll('.star.filled').forEach(el => {
            el.style.color = '#fbbf24';
        });

        document.querySelectorAll('.star:not(.filled)').forEach(el => {
            el.style.color = '#404040';
        });
    }

    // Function to apply light mode - Remove all inline styles to restore CSS defaults
    function applyLightMode() {
        // Remove inline styles from body
        document.body.style.background = '';
        document.body.style.color = '';

        const container = document.querySelector('.container');
        if (container) {
            container.style.background = '';
            container.style.boxShadow = '';
            container.style.border = '';
        }

        const header = document.querySelector('.header');
        if (header) {
            header.style.background = '';
        }

        // Remove all inline styles from sections
        document.querySelectorAll('.section-content').forEach(el => {
            el.style.color = '';
        });

        document.querySelectorAll('.section-content p').forEach(el => {
            el.style.color = '';
        });

        document.querySelectorAll('.experience-item, .education-item, .skill-item, .language-item').forEach(el => {
            el.style.background = '';
            el.style.color = '';
            el.style.borderColor = '';
            el.style.boxShadow = '';
        });

        // Limpiar estilos de certificados y workshops
        document.querySelectorAll('.certification-item').forEach(el => {
            el.style.background = '';
            el.style.borderColor = '';
            el.style.boxShadow = '';
        });

        document.querySelectorAll('.certification-item h4').forEach(el => {
            el.style.color = '';
            el.style.fontWeight = '';
        });

        document.querySelectorAll('.section-title').forEach(el => {
            el.style.color = '';
            el.style.borderBottomColor = '';
        });

        document.querySelectorAll('.job-title, .degree, .skill-name, .language').forEach(el => {
            el.style.color = '';
        });

        document.querySelectorAll('.company, .institution, .level').forEach(el => {
            el.style.background = '';
            el.style.color = '';
        });

        document.querySelectorAll('.period, .year').forEach(el => {
            el.style.background = '';
            el.style.color = '';
        });

        document.querySelectorAll('.responsibilities li').forEach(el => {
            el.style.color = '';
        });

        document.querySelectorAll('.skills-legend').forEach(el => {
            el.style.background = '';
            el.style.color = '';
            el.style.borderColor = '';
        });

        document.querySelectorAll('.skills-legend p').forEach(el => {
            el.style.color = '';
        });

        document.querySelectorAll('.skills-legend strong').forEach(el => {
            el.style.color = '';
        });

        // Remove inline styles from contact items
        document.querySelectorAll('.contact-item').forEach(el => {
            el.style.color = '';
        });

        document.querySelectorAll('.contact-item a').forEach(el => {
            el.style.color = '';
        });

        // Remove inline styles from stars
        document.querySelectorAll('.star.filled').forEach(el => {
            el.style.color = '';
        });

        document.querySelectorAll('.star:not(.filled)').forEach(el => {
            el.style.color = '';
        });
    }

    // Dark mode button click
    darkModeButton.addEventListener('click', function () {
        if (!isDarkMode) {
            isDarkMode = true;
            applyDarkMode();
            darkModeButton.style.opacity = '0.5';
            lightModeButton.style.opacity = '1';
            darkModeButton.style.transform = 'scale(0.9)';
            lightModeButton.style.transform = 'scale(1)';
        }
    });

    // Light mode button click
    lightModeButton.addEventListener('click', function () {
        if (isDarkMode) {
            isDarkMode = false;
            applyLightMode();
            darkModeButton.style.opacity = '1';
            lightModeButton.style.opacity = '0.5';
            darkModeButton.style.transform = 'scale(1)';
            lightModeButton.style.transform = 'scale(0.9)';
        }
    });

    // Hover effects
    darkModeButton.addEventListener('mouseenter', function () {
        if (!isDarkMode) {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
        }
    });

    darkModeButton.addEventListener('mouseleave', function () {
        if (!isDarkMode) {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        }
    });

    lightModeButton.addEventListener('mouseenter', function () {
        if (isDarkMode) {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
        }
    });

    lightModeButton.addEventListener('mouseleave', function () {
        if (isDarkMode) {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        }
    });

    // document.body.appendChild(darkModeButton);
    // document.body.appendChild(lightModeButton);

    // Add smooth scrolling for any internal links
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

    // Add loading animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';

    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

// Add CSS for skill animation
const style = document.createElement('style');
style.textContent = `
    .skill-item-animate {
        opacity: 0;
        animation: slideInLeft 0.6s ease forwards;
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @media (max-width: 768px) {
        .theme-button {
            bottom: 20px;
            width: 50px;
            height: 50px;
            font-size: 16px;
        }
        
        .dark-mode-button {
            left: 20px;
        }
        
        .light-mode-button {
            left: 80px;
        }
    }
`;
document.head.appendChild(style);