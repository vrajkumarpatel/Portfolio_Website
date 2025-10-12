// Enhanced theme toggle with smooth transition and particle updates
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Particle configurations for different themes
const particleConfigs = {
  dark: {
    color: "#38bdf8",
    opacity: 0.4,
    lineColor: "#38bdf8",
    lineOpacity: 0.3
  },
  light: {
    color: "#3b82f6",
    opacity: 0.6,
    lineColor: "#8b5cf6",
    lineOpacity: 0.4
  }
};

function updateParticles(theme) {
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
    const pJS = window.pJSDom[0].pJS;
    const config = particleConfigs[theme];
    
    // Update particle colors and opacity
    pJS.particles.color.value = config.color;
    pJS.particles.opacity.value = config.opacity;
    pJS.particles.line_linked.color = config.lineColor;
    pJS.particles.line_linked.opacity = config.lineOpacity;
    
    // Refresh particles
    pJS.fn.particlesRefresh();
  }
}

themeToggle.addEventListener("click", () => {
  // Add transition class for smooth theme change
  body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  
  // Toggle theme
  body.classList.toggle("light-mode");
  const isLightMode = body.classList.contains("light-mode");
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
  
  // Update particles based on theme
  updateParticles(isLightMode ? "light" : "dark");
  
  // Remove transition after animation completes
  setTimeout(() => {
    body.style.transition = '';
  }, 500);
  
  // Animate the toggle button
  themeToggle.style.transform = 'rotate(180deg) scale(1.2)';
  setTimeout(() => {
    themeToggle.style.transform = '';
  }, 300);
});

// Apply saved theme and particles
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  // Update particles after a short delay to ensure particles.js is loaded
  setTimeout(() => updateParticles("light"), 1000);
}

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

// Enhanced navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll-to-top button with enhanced animation
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = "flex";
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.transform = "translateY(0)";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.transform = "translateY(20px)";
    setTimeout(() => {
      if (window.scrollY <= 400) {
        scrollTopBtn.style.display = "none";
      }
    }, 300);
  }
});
scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Typed text
var typed = new Typed(".typing", {
    strings: ["AI Research Student", "Machine Learning Engineer", "Intelligent Systems Developer", "Data Science Enthusiast"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

// AOS animations
AOS.init({ duration: 1200, once: true, easing: "ease-in-out-sine" });

// Particles.js with theme support
particlesJS.load("particles-js", "particles.json", function() {
  // Initialize particles with current theme
  const isLightMode = body.classList.contains("light-mode");
  setTimeout(() => updateParticles(isLightMode ? "light" : "dark"), 100);
});

// Loading Screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loading-screen').classList.add('hidden');
    setTimeout(() => {
      document.querySelector('.loading-screen').style.display = 'none';
    }, 500);
  }, 2000);
});

// Scroll Progress
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
});


// Skills Progress Animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress-fill');
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
      });
    }
  });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

// Enhanced typing animation with more effects
const typingElement = document.querySelector('.typing');
if (typingElement) {
  typingElement.addEventListener('animationend', () => {
    typingElement.style.animation = 'none';
    setTimeout(() => {
      typingElement.style.animation = 'gradientShift 3s ease-in-out infinite, blink 0.7s infinite';
    }, 100);
  });
}

// Section visibility animations
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Enhanced card animations on scroll
const cards = document.querySelectorAll('.highlight-item, .project-card, .achievement-card, .detail-card, .timeline-content');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
      entry.target.classList.add('animate-in');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

cards.forEach(card => {
  cardObserver.observe(card);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced loading screen with better animations
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transform = 'scale(1.1)';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1500);
});

// Animated statistics counter
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  
  updateCounter();
}

// Statistics counter observer
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCounter(stat, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

// Observe stats section
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Enhanced profile image interactions
const profileImage = document.querySelector('.home-section .image img');
if (profileImage) {
  // Add subtle mouse movement effect
  profileImage.addEventListener('mousemove', (e) => {
    const rect = profileImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) / 20;
    const moveY = (y - centerY) / 20;
    
    profileImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  });
  
  // Reset on mouse leave
  profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = '';
  });
  
  // Add gentle click effect
  profileImage.addEventListener('click', () => {
    profileImage.style.animation = 'none';
    setTimeout(() => {
      profileImage.style.animation = 'elegant-float 8s ease-in-out infinite, gentle-glow 4s ease-in-out infinite alternate';
    }, 100);
  });
}
