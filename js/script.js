// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const newsletterBtn = newsletterForm.querySelector('.newsletter-btn');
    const newsletterInput = newsletterForm.querySelector('.newsletter-input');
    
    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        
        if (email && isValidEmail(email)) {
            // Simulate form submission
            newsletterBtn.textContent = 'Kaydedildi!';
            newsletterBtn.style.background = '#10b981';
            newsletterInput.value = '';
            
            setTimeout(() => {
                newsletterBtn.textContent = 'Bildirim Al';
                newsletterBtn.style.background = '#fff';
            }, 3000);
        } else {
            showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
        }
    });
}

// Contact form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = contactForm.querySelector('textarea').value.trim();
        
        if (name && email && subject && message && isValidEmail(email)) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Mesaj Gönderildi!';
                submitBtn.style.background = '#10b981';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '#2563eb';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        } else {
            showNotification('Lütfen tüm alanları doldurun ve geçerli bir e-posta adresi girin.', 'error');
        }
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .product-content, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Product showcase interaction
const productShowcase = document.querySelector('.product-showcase');
if (productShowcase) {
    productShowcase.addEventListener('mouseenter', () => {
        const device = productShowcase.querySelector('.humidifier-device');
        device.style.animationPlayState = 'paused';
        device.style.transform = 'scale(1.05)';
    });
    
    productShowcase.addEventListener('mouseleave', () => {
        const device = productShowcase.querySelector('.humidifier-device');
        device.style.animationPlayState = 'running';
        device.style.transform = 'scale(1)';
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Store section coming soon countdown (optional)
function initCountdown() {
    const countdownElement = document.querySelector('.store-countdown');
    if (!countdownElement) return;
    
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">Gün</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">Saat</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">Dakika</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">Saniye</span>
                </div>
            `;
        }
        
        if (distance < 0) {
            clearInterval(countdownTimer);
            if (countdownElement) {
                countdownElement.innerHTML = '<p>Mağaza açıldı!</p>';
            }
        }
    }
    
    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);
}

// Initialize countdown if element exists
document.addEventListener('DOMContentLoaded', initCountdown);

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button or banner
    showInstallPrompt();
});

function showInstallPrompt() {
    // Create install button if it doesn't exist
    if (!document.querySelector('.install-prompt')) {
        const installBtn = document.createElement('button');
        installBtn.className = 'install-prompt';
        installBtn.innerHTML = '<i class="fas fa-download"></i> Uygulamayı Yükle';
        installBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #2563eb;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        installBtn.addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    }
                    deferredPrompt = null;
                    installBtn.remove();
                });
            }
        });
        
        document.body.appendChild(installBtn);
        
        // Auto hide after 10 seconds
        setTimeout(() => {
            if (installBtn.parentNode) {
                installBtn.remove();
            }
        }, 10000);
    }
}

// Offline detection
window.addEventListener('online', () => {
    showNotification('İnternet bağlantısı geri geldi!', 'success');
});

window.addEventListener('offline', () => {
    showNotification('İnternet bağlantısı kesildi. Bazı özellikler çevrimdışı modda çalışacak.', 'warning');
});

// Enhanced form handling with offline support
function enhanceFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                subject: contactForm.querySelectorAll('input[type="text"]')[1].value,
                message: contactForm.querySelector('textarea').value,
                timestamp: new Date().toISOString()
            };
            
            if (navigator.onLine) {
                // Try to send immediately
                fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                }).then(response => {
                    if (response.ok) {
                        showNotification('Mesajınız başarıyla gönderildi!', 'success');
                        contactForm.reset();
                    } else {
                        throw new Error('Server error');
                    }
                }).catch(() => {
                    // Store for later sync if online
                    storeFormData('contactFormData', formData);
                    showNotification('Mesajınız kaydedildi, bağlantı geri geldiğinde gönderilecek.', 'info');
                });
            } else {
                // Store for later sync
                storeFormData('contactFormData', formData);
                showNotification('Mesajınız kaydedildi, bağlantı geri geldiğinde gönderilecek.', 'info');
            }
        });
    }
    
    if (newsletterForm) {
        const newsletterBtn = newsletterForm.querySelector('.newsletter-btn');
        const newsletterInput = newsletterForm.querySelector('.newsletter-input');
        
        newsletterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                const emailData = {
                    email: email,
                    timestamp: new Date().toISOString()
                };
                
                if (navigator.onLine) {
                    fetch('/api/newsletter', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(emailData)
                    }).then(response => {
                        if (response.ok) {
                            showNotification('E-posta listesine başarıyla eklendi!', 'success');
                            newsletterInput.value = '';
                        } else {
                            throw new Error('Server error');
                        }
                    }).catch(() => {
                        storeFormData('newsletterData', emailData);
                        showNotification('E-posta adresiniz kaydedildi, bağlantı geri geldiğinde işlenecek.', 'info');
                    });
                } else {
                    storeFormData('newsletterData', emailData);
                    showNotification('E-posta adresiniz kaydedildi, bağlantı geri geldiğinde işlenecek.', 'info');
                }
            } else {
                showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
            }
        });
    }
}

function storeFormData(key, data) {
    const existingData = JSON.parse(localStorage.getItem(key) || '[]');
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
}

// Initialize enhanced form handling
document.addEventListener('DOMContentLoaded', enhanceFormHandling);
