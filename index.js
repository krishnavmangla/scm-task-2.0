


// Hero Section Animation
const heroTitle = document.querySelector('.hero h1');
const heroText = document.querySelector('.hero p');

heroTitle.addEventListener('mouseenter', () => {
  heroTitle.style.transform = 'scale(1.1)';
});

heroTitle.addEventListener('mouseleave', () => {
  heroTitle.style.transform = 'scale(1)';
});

// Package Card Hover Effect
const packageCards = document.querySelectorAll('.package');

packageCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const parallaxElement = document.querySelector('.parallax-element');
  const scrollY = window.scrollY;
  parallaxElement.style.transform = `translateY(${scrollY * 0.2}px)`;
});