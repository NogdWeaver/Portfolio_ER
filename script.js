/**
 * ============================================
 * SCRIPT PRINCIPAL - PORTFOLIO SISR
 * ============================================
 * Gestion de la navigation mobile et validation du formulaire de contact
 */

// ============================================
// NAVIGATION MOBILE
// ============================================

/**
 * Initialise le menu de navigation mobile
 * Gère l'ouverture/fermeture du menu hamburger
 */
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Vérifie que les éléments existent (présents sur toutes les pages)
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Toggle de la classe active sur le menu et le bouton
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Ferme le menu si on clique sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Ferme le menu si on clique en dehors
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
});

// ============================================
// VALIDATION DU FORMULAIRE DE CONTACT
// ============================================

/**
 * Valide le formulaire de contact
 * Vérifie chaque champ et affiche les messages d'erreur appropriés
 */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Si le formulaire n'existe pas (pas sur la page contact), on sort
    if (!contactForm) {
        return;
    }

    // Références aux éléments du formulaire
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameGroup = document.getElementById('nameGroup');
    const emailGroup = document.getElementById('emailGroup');
    const messageGroup = document.getElementById('messageGroup');
    
    const formSuccess = document.getElementById('formSuccess');

    /**
     * Valide le champ nom
     * @param {string} name - Le nom à valider
     * @returns {boolean} - True si valide, False sinon
     */
    function validateName(name) {
        // Le nom doit contenir au moins 2 caractères et uniquement des lettres, espaces et tirets
        const nameRegex = /^[a-zA-ZÀ-ÿ\s\-]{2,}$/;
        return nameRegex.test(name.trim());
    }

    /**
     * Valide l'adresse email
     * @param {string} email - L'email à valider
     * @returns {boolean} - True si valide, False sinon
     */
    function validateEmail(email) {
        // Expression régulière pour valider un email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }

    /**
     * Valide le message
     * @param {string} message - Le message à valider
     * @returns {boolean} - True si valide, False sinon
     */
    function validateMessage(message) {
        // Le message doit contenir au moins 10 caractères
        return message.trim().length >= 10;
    }

    /**
     * Affiche une erreur sur un champ
     * @param {HTMLElement} group - Le groupe de formulaire contenant le champ
     */
    function showError(group) {
        group.classList.add('error');
    }

    /**
     * Masque l'erreur sur un champ
     * @param {HTMLElement} group - Le groupe de formulaire contenant le champ
     */
    function hideError(group) {
        group.classList.remove('error');
    }

    /**
     * Valide tous les champs du formulaire
     * @returns {boolean} - True si tous les champs sont valides
     */
    function validateForm() {
        let isValid = true;

        // Validation du nom
        if (!validateName(nameInput.value)) {
            showError(nameGroup);
            isValid = false;
        } else {
            hideError(nameGroup);
        }

        // Validation de l'email
        if (!validateEmail(emailInput.value)) {
            showError(emailGroup);
            isValid = false;
        } else {
            hideError(emailGroup);
        }

        // Validation du message
        if (!validateMessage(messageInput.value)) {
            showError(messageGroup);
            isValid = false;
        } else {
            hideError(messageGroup);
        }

        return isValid;
    }

    // Validation en temps réel pour chaque champ
    nameInput.addEventListener('blur', function() {
        if (validateName(nameInput.value)) {
            hideError(nameGroup);
        } else {
            showError(nameGroup);
        }
    });

    emailInput.addEventListener('blur', function() {
        if (validateEmail(emailInput.value)) {
            hideError(emailGroup);
        } else {
            showError(emailGroup);
        }
    });

    messageInput.addEventListener('blur', function() {
        if (validateMessage(messageInput.value)) {
            hideError(messageGroup);
        } else {
            showError(messageGroup);
        }
    });

    // Suppression de l'erreur lors de la saisie
    nameInput.addEventListener('input', function() {
        if (validateName(nameInput.value)) {
            hideError(nameGroup);
        }
    });

    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            hideError(emailGroup);
        }
    });

    messageInput.addEventListener('input', function() {
        if (validateMessage(messageInput.value)) {
            hideError(messageGroup);
        }
    });

    // Gestion de la soumission du formulaire
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi réel du formulaire

        // Valide tous les champs
        if (validateForm()) {
            // Affiche le message de succès
            formSuccess.classList.add('show');
            
            // Fait défiler vers le haut pour voir le message de succès
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Réinitialise le formulaire après 3 secondes
            setTimeout(function() {
                contactForm.reset();
                formSuccess.classList.remove('show');
                
                // Réinitialise les états d'erreur
                hideError(nameGroup);
                hideError(emailGroup);
                hideError(messageGroup);
            }, 5000);

            // Log des données (pour debug - à retirer en production)
            console.log('Formulaire soumis avec succès :');
            console.log('Nom:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Message:', messageInput.value);
        } else {
            // Fait défiler vers le premier champ en erreur
            const firstError = document.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
});

// ============================================
// AMÉLIORATION DE L'EXPÉRIENCE UTILISATEUR
// ============================================

/**
 * Ajoute un effet de smooth scroll pour les ancres
 */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll pour les liens d'ancrage (si présents)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

/**
 * Ajoute un effet de transition lors du chargement de la page
 */
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.3s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// ACCORDION CARTE DE RÉGION - PAGE EXPERIENCE
// ============================================

/**
 * Gère l'accordion pour afficher/masquer la carte de région
 * Animation douce avec gestion de l'accessibilité
 */
document.addEventListener('DOMContentLoaded', function() {
    const regionMapToggle = document.getElementById('regionMapToggle');
    const regionMapContent = document.getElementById('regionMapContent');
    
    // Vérifie que les éléments existent (présents uniquement sur la page experience)
    if (regionMapToggle && regionMapContent) {
        regionMapToggle.addEventListener('click', function() {
            const isExpanded = regionMapToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle de l'état
            const newState = !isExpanded;
            regionMapToggle.setAttribute('aria-expanded', newState);
            regionMapContent.setAttribute('aria-hidden', !newState);
            
            // Animation CSS gérée par les classes et max-height
            // Le CSS s'occupe de l'animation via la transition sur max-height
        });
        
        // Gestion du clavier (Accessibilité)
        regionMapToggle.addEventListener('keydown', function(event) {
            // Entrée ou Espace pour activer
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                regionMapToggle.click();
            }
        });
    }
});
