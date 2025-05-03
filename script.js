// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.className = `${savedTheme}-theme`;
  updateThemeIcon();
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark');
  }
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-theme')) {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

// Mobile Navigation
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  hamburger.classList.toggle('active');

  // Toggle theme toggle visibility
  const themeToggle = document.querySelector('.theme-toggle');
  if (window.innerWidth <= 768) {
    if (navLinks.classList.contains('nav-active')) {
      themeToggle.style.display = 'flex';
    } else {
      themeToggle.style.display = 'none';
    }
  }
});

// Close menu when clicking on a link or anywhere outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    const isClickInsideNav =
      navLinks.contains(e.target) ||
      hamburger.contains(e.target) ||
      e.target === themeToggle ||
      themeToggle.contains(e.target);

    if (!isClickInsideNav) {
      navLinks.classList.remove('nav-active');
      hamburger.classList.remove('active');
      document.querySelector('.theme-toggle').style.display = 'none';
    }
  }
});
// Close menu when clicking on a link
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('nav-active');
      hamburger.classList.remove('active');
      document.querySelector('.theme-toggle').style.display = 'none';
    }
  });
});
// Project Filtering (only for projects.html)
if (filterBtns.length > 0) {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('fade-in');
        }
      });
    });
  });
}

// Contact Form Submission (only for contact.html)
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
      const response = await simulateFormSubmission({
        name,
        email,
        subject,
        message,
      });
      showNotification('Message sent successfully!', 'success');
      contactForm.reset();
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error');
    }
  });
}

// Simulate form submission
function simulateFormSubmission(formData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        resolve({ status: 'success', message: 'Message sent successfully' });
      } else {
        reject(new Error('Incomplete form data'));
      }
    }, 1500);
  });
}

// Notification System
function showNotification(message, type = 'info') {
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) existingNotification.remove();

  const notification = document.createElement('div');
  notification.classList.add('notification', type);
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('hide');
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// Contact Form Submission
if (document.getElementById('contactForm')) {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading state
    formStatus.textContent = 'Sending message...';
    formStatus.className = 'form-status';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.className = 'form-status success';
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      formStatus.textContent =
        'Oops! There was a problem sending your message. Please try again.';
      formStatus.className = 'form-status error';
    }

    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  });
}
