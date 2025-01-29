// Theme Toggle
const themeToggle = document.getElementById('themeToggle');

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    themeToggle.textContent = '🌞';
    document.documentElement.style.setProperty('--bg', 'var(--light-bg)');
    document.documentElement.style.setProperty('--text', 'var(--light-text)');
    document.documentElement.style.setProperty(
      '--accent',
      'var(--light-accent)'
    );
  } else {
    themeToggle.textContent = '🌙';
    document.documentElement.style.setProperty('--bg', 'var(--dark-bg)');
    document.documentElement.style.setProperty('--text', 'var(--dark-text)');
    document.documentElement.style.setProperty(
      '--accent',
      'var(--dark-accent)'
    );
  }
}

themeToggle.addEventListener('click', toggleTheme);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! I will respond shortly.');
  this.reset();
});

// Scroll Animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.skill-item, .project-card').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
});
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});
