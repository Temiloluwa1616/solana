// ============================================
// $NEWYEARPUMP - Crypto Wallet JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeButtons();
    initializeScrollAnimations();
    initializeNewsletterForm();
    initializeWalletAnimation();
    initializeParticles();
});

// ============================================
// BUTTON INTERACTIONS
// ============================================

function initializeButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Show alert message
            const buttonText = this.textContent;
            if (buttonText.includes('Started') || buttonText.includes('Wallet')) {
                showNotification('🎄 Coming Soon! Wallet creation feature launching soon!');
            } else if (buttonText.includes('Learn')) {
                showNotification('📚 Explore our documentation and guides!');
            } else if (buttonText.includes('Buy')) {
                showNotification('💳 Redirecting to purchase page...');
            } else if (buttonText.includes('Subscribe')) {
                showNotification('✅ Thank you for subscribing!');
            }
            
            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe buy cards
    document.querySelectorAll('.buy-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe roadmap items
    document.querySelectorAll('.roadmap-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// NEWSLETTER FORM
// ============================================

function initializeNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    const emailInput = document.querySelector('.email-input');
    const submitButton = form.querySelector('.btn');
    
    submitButton.addEventListener('click', function(e) {
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            showNotification('✅ Successfully subscribed to $NEWYEARPUMP newsletter!');
            emailInput.value = '';
            
            // Simulate API call
            simulateEmailSubscription(email);
        } else if (email === '') {
            showNotification('⚠️ Please enter your email address!');
        } else {
            showNotification('❌ Please enter a valid email address!');
        }
    });
    
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });
}

// ============================================
// EMAIL VALIDATION
// ============================================

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ============================================
// SIMULATE EMAIL SUBSCRIPTION
// ============================================

function simulateEmailSubscription(email) {
    console.log('Subscribing:', email);
    // Here you would normally make an API call
    // axios.post('/api/subscribe', { email: email })
    //   .then(response => console.log('Subscription successful'))
    //   .catch(error => console.error('Subscription failed', error));
}

// ============================================
// WALLET ANIMATION
// ============================================

function initializeWalletAnimation() {
    const walletCard = document.querySelector('.wallet-card');
    
    if (walletCard) {
        walletCard.addEventListener('mouseenter', function() {
            this.style.animation = 'walletFlip 0.6s ease';
        });
        
        walletCard.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #C41E3A 0%, #FF6B6B 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.4s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// ============================================
// PARTICLE EFFECTS
// ============================================

function initializeParticles() {
    // Create confetti on button clicks (for festive feel)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h3');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    statCards.forEach(card => observer.observe(card));
}

function animateCounter(element) {
    const finalText = element.textContent;
    const numberMatch = finalText.match(/[\d.]+/);
    
    if (numberMatch) {
        const finalNumber = parseFloat(numberMatch[0]);
        const unit = finalText.replace(numberMatch[0], '').trim();
        let currentNumber = 0;
        const increment = finalNumber / 50;
        const suffix = finalText.includes('M') ? 'M' : finalText.includes('+') ? '+' : '%';
        
        const interval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                element.textContent = finalText;
                clearInterval(interval);
            } else {
                element.textContent = currentNumber.toFixed(1) + suffix;
            }
        }, 30);
    }
}

// Initialize counter animation when page loads
setTimeout(animateCounters, 500);

// ============================================
// DYNAMIC HOVER EFFECTS
// ============================================

document.querySelectorAll('.feature-card, .buy-card, .roadmap-item, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.perspective = '1000px';
    });
});

// ============================================
// MOBILE MENU (if needed)
// ============================================

function initializeMobileMenu() {
    const nav = document.querySelector('.navbar');
    
    if (window.innerWidth <= 768) {
        // Mobile-specific adjustments
        nav.style.position = 'sticky';
    }
}

window.addEventListener('resize', initializeMobileMenu);
initializeMobileMenu();

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.src) {
                    observer.unobserve(img);
                }
            }
        });
    });
}

// ============================================
// FESTIVE EASTER EGG
// ============================================

let newYearPumpClicks = 0;

document.querySelector('.logo').addEventListener('click', function() {
    newYearPumpClicks++;
    if (newYearPumpClicks === 5) {
        showNotification('🎉 You found the secret! Happy New Year 2026! 🎆');
        newYearPumpClicks = 0;
    }
});

console.log('%c$NEWYEARPUMP - Festive Crypto Wallet', 'color: #C41E3A; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to the most festive blockchain experience! 🎄', 'color: #FFD700; font-size: 14px;');
