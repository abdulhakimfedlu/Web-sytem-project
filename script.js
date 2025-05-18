const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isExpanded = navLinks.classList.contains('active');
  menuToggle.setAttribute('aria-expanded', isExpanded);
  menuToggle.querySelector('ion-icon').setAttribute('name', isExpanded ? 'close-outline' : 'menu-outline');
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('ion-icon').setAttribute('name', 'menu-outline');
    }
  });
});

const form = document.querySelector('.contact-form');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';

  if (nameInput.value.trim().length < 2) {
    nameError.style.display = 'block';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.style.display = 'block';
    isValid = false;
  }

  if (messageInput.value.trim().length < 10) {
    messageError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});