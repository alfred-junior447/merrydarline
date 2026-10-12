/**
 * ============================================
 * SITE VITRINE MERRY & LUMËA
 * Décoration de Noël - Lyon, France
 * 
 * SCRIPT PRINCIPAL (JavaScript Vanilla)
 * ============================================
 */

/**
 * ============================================
 * 1. ATTENTE DU CHARGEMENT DU DOM
 * ============================================
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de toutes les fonctionnalités
    initMenuMobile();
    initScrollEffects();
    initProductFilters();
    initGiftFilters();
    initLightbox();
    initGoogleMaps();
    initFormValidation();
    initSmoothScroll();
});

/**
 * ============================================
 * 2. MENU MOBILE (HAMBURGER)
 * ============================================
 */
function initMenuMobile() {
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    const menuLinks = document.querySelectorAll('.nav-mobile-link');
    
    if (!menuToggle || !navMobile) return;
    
    // Toggle du menu
    menuToggle.addEventListener('click', function() {
        const isActive = this.classList.toggle('active');
        navMobile.classList.toggle('active');
        
        // Accessibilité
        this.setAttribute('aria-expanded', isActive);
        navMobile.setAttribute('aria-hidden', !isActive);
        
        // Empêcher le scroll du body
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    
    // Fermer le menu lors du clic sur un lien
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            navMobile.setAttribute('aria-hidden', 'true');
        });
    });
    
    // Fermer le menu lors du clic en dehors
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navMobile.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            navMobile.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMobile.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            navMobile.setAttribute('aria-hidden', 'true');
        }
    });
}

/**
 * ============================================
 * 3. EFFETS AU SCROLL
 * ============================================
 */
function initScrollEffects() {
    const header = document.querySelector('.header');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const animatedElements = document.querySelectorAll('.hero, .about-content, .product-card, .gallery-item, .testimonial-card, .contact-card, .contact-form');
    
    // Header qui change au scroll
    window.addEventListener('scroll', function() {
        // Header scrolled
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Bouton retour en haut
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        
        // Animations au scroll (Intersection Observer)
        checkAnimatedElements();
    });
    
    // Bouton retour en haut
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Intersection Observer pour les animations
    function checkAnimatedElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
    
    // Initialiser au chargement
    checkAnimatedElements();
}

/**
 * ============================================
 * 4. FILTRES DES PRODUITS
 * ============================================
 */
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productsGrid = document.getElementById('productsGrid');
    
    if (!filterBtns.length || !productCards.length || !productsGrid) return;
    
    // Gestion des boutons de filtre
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Mise à jour de la classe active
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Animation de filtrage
            productsGrid.style.opacity = '0.5';
            
            setTimeout(() => {
                filterProducts(filter);
                productsGrid.style.opacity = '1';
            }, 200);
        });
    });
    
    // Filtrer les produits
    function filterProducts(filter) {
        productCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }
}

/**
 * ============================================
 * 4 bis. FILTRES DES CADEAUX PAR TRANCHE D'ÂGE
 * ============================================
 */
function initGiftFilters() {
    const filterBtns = document.querySelectorAll('.gift-filter-btn');
    const giftGroups = document.querySelectorAll('.gift-group');
    const giftsGrid = document.getElementById('giftsGrid');

    if (!filterBtns.length || !giftGroups.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Mise à jour de la classe active
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const age = this.getAttribute('data-age');

            // Animation de filtrage (identique aux produits)
            if (giftsGrid) {
                giftsGrid.style.opacity = '0.5';
            }

            setTimeout(() => {
                giftGroups.forEach(group => {
                    const groupAge = group.getAttribute('data-age');
                    if (age === 'all' || groupAge === age) {
                        group.style.display = 'block';
                    } else {
                        group.style.display = 'none';
                    }
                });
                if (giftsGrid) {
                    giftsGrid.style.opacity = '1';
                }
            }, 200);
        });
    });
}

/**
 * ============================================
 * 5. LIGHTBOX (GALERIE)
 * ============================================
 */
function initLightbox() {
    const galleryLinks = document.querySelectorAll('.gallery-link');
    
    if (!galleryLinks.length) return;
    
    // Créer la lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Fermer la galerie">
                <i class="fas fa-times"></i>
            </button>
            <button class="lightbox-nav prev" aria-label="Image précédente">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="lightbox-nav next" aria-label="Image suivante">
                <i class="fas fa-chevron-right"></i>
            </button>
            <img src="" alt="Image de la galerie" loading="lazy">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-nav.prev');
    const lightboxNext = lightbox.querySelector('.lightbox-nav.next');
    
    let currentIndex = 0;
    const images = [];
    
    // Collecter toutes les images
    galleryLinks.forEach(link => {
        images.push({
            src: link.getAttribute('href'),
            alt: link.querySelector('img').getAttribute('alt')
        });
    });
    
    // Ouvrir la lightbox
    galleryLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    // Fermer la lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
    });
    
    lightboxNext.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
    });
    
    // Navigation clavier
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex].src;
            lightboxImg.alt = images[currentIndex].alt;
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex].src;
            lightboxImg.alt = images[currentIndex].alt;
        }
    });
}

/**
 * ============================================
 * 6. GOOGLE MAPS
 * ============================================
 */
function initGoogleMaps() {
    // Vérifier si l'API Google Maps est chargée
    if (typeof google === 'undefined') {
        console.warn('Google Maps API non chargée. Utilisez le fallback.');
        return;
    }
    
    // Coordonnées de l'entreprise (exemple pour Lyon)
    const coordinates = { lat: 45.764043, lng: 4.835659 };
    const mapContainer = document.getElementById('map');
    
    if (!mapContainer) return;
    
    // Initialiser la carte
    const map = new google.maps.Map(mapContainer, {
        center: coordinates,
        zoom: 16,
        gestureHandling: 'greedy',
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
            {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.fill',
                stylers: [{ color: '#2b4148' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#f8c967' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            }
        ]
    });
    
    // Ajouter un marqueur
    new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'Merry & LUMËA - Décoration de Noël',
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#c41e3a',
            fillOpacity: 1,
            strokeWeight: 0
        }
    });
    
    // Ajouter un info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; color: #333;">
                <h3 style="margin: 0 0 10px 0; color: #c41e3a;">Merry & LUMËA</h3>
                <p style="margin: 0; font-size: 14px;">123 Rue de la République<br>69002 Lyon, France</p>
                <p style="margin: 10px 0 0 0; font-size: 14px;">
                    <a href="tel:+33612345678" style="color: #c41e3a; text-decoration: none;">
                        +33 6 12 34 56 78
                    </a>
                </p>
            </div>
        `
    });
    
    google.maps.event.addListener(map, 'idle', function() {
        infoWindow.open(map);
    });
    
    // Gestion des erreurs
    google.maps.event.addListener(map, 'error', function() {
        console.error('Erreur de chargement de Google Maps');
    });
}

/**
 * ============================================
 * 7. VALIDATION DU FORMULAIRE
 * ============================================
 */
function initFormValidation() {
    const form = document.querySelector('form[name="contact"]');
    
    if (!form) return;
    
    // Validation en temps réel
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Champs requis
        if (field.required && !value) {
            isValid = false;
            errorMessage = 'Ce champ est obligatoire';
        }
        
        // Validation email
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Veuillez entrer une adresse email valide';
            }
        }
        
        // Validation téléphone
        if (field.id === 'phone' && value) {
            const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Veuillez entrer un numéro de téléphone valide';
            }
        }
        
        // Afficher/Masquer l'erreur
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        if (!isValid) {
            field.classList.add('error');
            const errorEl = document.createElement('span');
            errorEl.className = 'error-message';
            errorEl.textContent = errorMessage;
            errorEl.style.cssText = 'color: #c41e3a; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
            field.parentElement.appendChild(errorEl);
        } else {
            field.classList.remove('error');
        }
        
        return isValid;
    }
    
    // Soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isFormValid = true;
        
        // Valider tous les champs
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            // Scroll vers le premier champ invalide
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }
        
        // Si tout est valide, soumettre le formulaire
        // (Netlify Forms gère automatiquement la soumission)
        form.submit();
    });
}

/**
 * ============================================
 * 8. SCROLL DOUX POUR LES LIENS INTERNES
 * ============================================
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Vérifier si c'est un lien interne
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calculer la position (en tenant compte du header fixe)
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Mettre à jour l'URL sans recharger la page
                history.pushState(null, null, href);
            }
        });
    });
}

/**
 * ============================================
 * 9. FONCTIONNALITÉS SUPPLÉMENTAIRES
 * ============================================
 */

// Détection du mode sombre
function detectDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
}

// Gestion du chargement des images (lazy loading)
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Le lazy loading natif est supporté
        return;
    }
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.removeAttribute('loading');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => observer.observe(img));
}

// Initialiser toutes les fonctionnalités supplémentaires
detectDarkMode();
initLazyLoading();

/**
 * ============================================
 * 10. GESTION DES ERREURS
 * ============================================
 */

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Gestion des erreurs de chargement des images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Remplacer par une image de fallback
            this.src = 'images/placeholder.jpg';
            this.alt = 'Image non disponible';
        });
    });
});

/**
 * ============================================
 * 11. FONCTIONS UTILITAIRES
 * ============================================
 */

// Debounce function pour optimiser les événements de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * ============================================
 * 12. EXPORT DES FONCTIONS (si nécessaire)
 * ============================================
 */

// Exporter les fonctions pour un éventuel usage externe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initMenuMobile,
        initScrollEffects,
        initProductFilters,
    initGiftFilters,
        initLightbox,
        initGoogleMaps,
        initFormValidation,
        initSmoothScroll
    };
}
