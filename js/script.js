// Navbar scroll effect
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Add active class to clicked link
    link.classList.add('active');
    
    // Get target section
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section');

// Only add scroll listener for active state if sections exist
if (sections.length > 0) {
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe attraction cards
const cards = document.querySelectorAll('.attraction-card');
cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Hero button interaction
const heroButton = document.querySelector('.hero-button');
if (heroButton) {
  heroButton.addEventListener('click', () => {
    alert('Bắt đầu lên kế hoạch cho chuyến đi của bạn đến Đà Nạng! Thường thì điều này sẽ mở giao diện đặt phòng hoặc lên kế hoạch.');
  });
}

// Attraction card click interaction
const attractionCards = document.querySelectorAll('.attraction-card');
attractionCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.card-title').textContent;
    console.log(`Clicked on: ${title}`);
    // This would typically navigate to a detail page
  });
});
