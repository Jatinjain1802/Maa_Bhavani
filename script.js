/**
 * Maa Bhawani Construction - Premium Website Logic
 * 
 * LEARNING NOTES:
 * 1. Preloader: Hides the loading screen after page loads
 * 2. Particles: Creates floating gold dots using DOM manipulation
 * 3. IntersectionObserver: Triggers animations when elements enter viewport
 * 4. Counter Animation: Increments numbers smoothly from 0 to target
 * 5. Gallery Filter: Shows/hides items based on category
 */

// ===== 1. PRELOADER =====
// LEARNING: `window.load` waits for ALL images to download.
// On slow connections (like GitHub Pages), images may take long → preloader stuck!
// FIX: We use TWO strategies:
//   1. Hide after `load` event + 1.5s delay (ideal case)
//   2. Fallback: Always hide after 4s even if images haven't loaded (safety net)

const preloader = document.getElementById('preloader');

function hidePreloader() {
    if (preloader && !preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
    }
}

// Strategy 1: Wait for page load, then hide after animation finishes
window.addEventListener('load', () => {
    setTimeout(hidePreloader, 1500);
});

// Strategy 2: FALLBACK — hide after 4 seconds no matter what
// This prevents the preloader from getting stuck if images fail to load
setTimeout(hidePreloader, 4000);

// ===== 2. PARTICLE EFFECT =====
// Creates floating gold particles in the hero section for a premium feel
// document.createElement() creates a new HTML element dynamically
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        // Math.random() gives a number between 0 and 1
        // We use it to randomize position, size, and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ===== 3. NAVBAR SCROLL EFFECT =====
// classList.add/remove toggles CSS classes based on scroll position
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== 4. MOBILE MENU TOGGLE =====
const mobileNav = document.getElementById('mobileNav');
function toggleMenu() {
    mobileNav.classList.toggle('active');
}

// ===== 5. SCROLL ANIMATIONS (IntersectionObserver) =====
// IntersectionObserver watches elements and fires a callback when they enter/exit the viewport
// threshold: 0.1 means "trigger when 10% of element is visible"
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for siblings (e.g., service cards appear one after another)
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 80); // 80ms delay between each element
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ===== 6. COUNTER ANIMATION =====
// Counts from 0 to the data-target value with smooth animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 60; // Higher = slower animation
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    // Math.ceil() rounds UP to nearest integer
                    counter.innerText = Math.ceil(current) + (target === 100 ? '%' : '+');
                    // requestAnimationFrame is smoother than setTimeout for animations
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + (target === 100 ? '%' : '+');
                }
            };
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===== 7. SMOOTH SCROLL =====
// Intercepts clicks on anchor links (#about, #services etc.) for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump-to behavior
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== 8. GALLERY FILTER =====
// querySelectorAll returns a NodeList (like an array) of matching elements
// We add click listeners to filter buttons and show/hide gallery items
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' from all buttons, add to clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                // Show with staggered animation
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 60);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                // Hide after fade-out animation completes
                setTimeout(() => { item.style.display = 'none'; }, 400);
            }
        });
    });
});

// ===== 9. LIGHTBOX (Image Viewer Modal) =====
// LEARNING: This is how you build a "modal" — a fullscreen overlay.
// We track which image is currently shown using `currentIndex` (a state variable).
// We listen for clicks on gallery items, and keyboard events for navigation.

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxLocation = document.getElementById('lightboxLocation');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxOverlay = document.querySelector('.lightbox-overlay');

// `currentIndex` tracks which image is open. This is a "state variable".
let currentIndex = 0;

// `getVisibleItems()` returns only the gallery items that are currently visible
// (after filtering). This way, prev/next only cycles through shown images.
function getVisibleItems() {
    return Array.from(galleryItems).filter(item => item.style.display !== 'none');
}

// Opens the lightbox with the image at `index`
function openLightbox(index) {
    const visibleItems = getVisibleItems();
    if (index < 0 || index >= visibleItems.length) return;
    
    currentIndex = index;
    const item = visibleItems[index];
    
    // Get image src and overlay text from the gallery item
    const imgSrc = item.querySelector('img').src;
    const title = item.querySelector('.gallery-overlay h4')?.textContent || '';
    const location = item.querySelector('.gallery-overlay p')?.textContent || '';
    
    // Update the lightbox elements
    lightboxImg.src = imgSrc;
    lightboxTitle.textContent = title;
    lightboxLocation.textContent = location;
    
    // Show the lightbox
    lightbox.classList.add('active');
    // Prevent body from scrolling while lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    const visibleItems = getVisibleItems();
    // The `%` operator wraps around: if we're at last image, go to first
    currentIndex = (currentIndex + 1) % visibleItems.length;
    openLightbox(currentIndex);
}

function prevImage() {
    const visibleItems = getVisibleItems();
    // Adding length before subtracting ensures we don't go negative
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    openLightbox(currentIndex);
}

// Add click event to each gallery item
galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const visibleItems = getVisibleItems();
        // `indexOf` finds the position of this item in the visible array
        const index = visibleItems.indexOf(item);
        if (index !== -1) openLightbox(index);
    });
});

// Close/Navigate buttons
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// KEYBOARD SUPPORT: Escape to close, Arrow keys to navigate
// This is an important UX feature — users expect keyboard controls on modals
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// ===== 10. BEFORE/AFTER COMPARISON SLIDER =====
// LEARNING: This is a drag-based UI component.
// Key concepts:
//   - getBoundingClientRect(): Gets element's position & size on screen
//   - Mouse events: mousedown (start drag), mousemove (dragging), mouseup (stop drag)
//   - Touch events: Same thing but for mobile (touchstart, touchmove, touchend)
//   - Percentage calculation: (mouseX - elementLeft) / elementWidth * 100

function initCompareSlider(slider) {
    const beforeDiv = slider.querySelector('.compare-before');
    const handle = slider.querySelector('.compare-handle');
    const beforeImg = slider.querySelector('.compare-img-before');
    let isDragging = false;

    // This function moves the slider handle to where the mouse/finger is
    function moveSlider(x) {
        // getBoundingClientRect() returns {left, top, width, height} of the element
        const rect = slider.getBoundingClientRect();

        // Calculate what percentage across the slider the mouse is
        let percent = ((x - rect.left) / rect.width) * 100;

        // Clamp between 2% and 98% so the handle doesn't disappear at edges
        percent = Math.max(2, Math.min(98, percent));

        // Move the handle line to that position
        handle.style.left = percent + '%';
        // Clip the "before" div to that width (revealing/hiding the before image)
        beforeDiv.style.width = percent + '%';
        // The before image needs a fixed width matching the slider's full width
        // so it doesn't squish as we clip the container
        beforeImg.style.width = rect.width + 'px';
    }

    // MOUSE events (desktop)
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        moveSlider(e.clientX);
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        moveSlider(e.clientX);
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // TOUCH events (mobile) — same logic, different event names
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        moveSlider(e.touches[0].clientX);
    });
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        moveSlider(e.touches[0].clientX);
    });
    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Set the before image width on load so it doesn't squish
    window.addEventListener('load', () => {
        const rect = slider.getBoundingClientRect();
        beforeImg.style.width = rect.width + 'px';
    });
    window.addEventListener('resize', () => {
        const rect = slider.getBoundingClientRect();
        beforeImg.style.width = rect.width + 'px';
    });
}

// Initialize all sliders on the page
document.querySelectorAll('.compare-slider').forEach(initCompareSlider);
