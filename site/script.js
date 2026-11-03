// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  menu.classList.toggle('hidden');
});

// Simple client-side form validation (no backend in this lab)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  status.textContent = 'Thanks! Your message has been received.';
  form.reset();
});
