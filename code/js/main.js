/* ===== ATHENA MARTIAL GYM - MAIN JS ===== */

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScroll();
});

/* === MOBILE MENU === */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav');
  
  function setMenuAria(isOpen) {
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const isOpen = navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active', isOpen);
      setMenuAria(isOpen);
    });
    
    // Close menu on link click
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        setMenuAria(false);
      });
    });
  }
}

/* === SMOOTH SCROLL (fallback pour navigateurs) === */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* Formulaire : envoi classique vers envoi-formulaire.php (socle, SAT 5). Plus de Formspree. */

/* === NOTIFICATION TOAST === */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: ${type === 'success' ? '#1db854' : '#e63946'};
    color: white;
    padding: 16px 24px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

/* === ANIMATIONS === */
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
`;
document.head.appendChild(style);

/* === FAQ ZIGZAG === */
/* Chaque question ouvre/ferme uniquement sa propre réponse. */
function initFaq() {
  const faqList = document.querySelector('.faq-list');
  if (!faqList) return;

  faqList.classList.add('is-enhanced');

  faqList.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });
}

document.addEventListener('DOMContentLoaded', initFaq);
