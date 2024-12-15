document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initSkillAnimation();
    initWorkFilter();
    initContactForm();
    initScrollAnimation();
  });
  
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.global-nav a');
  
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
  
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
  }
  
  function initSkillAnimation() {
    const skillLevels = document.querySelectorAll('.skill-level');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
  
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                skillBar.style.width = level + '%';
                skillObserver.unobserve(skillBar);
            }
        });
    }, observerOptions);
  
    skillLevels.forEach(skillBar => {
        skillObserver.observe(skillBar);
    });
  }
  
  function initWorkFilter() {
    const workItems = document.querySelectorAll('.work-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
  
            workItems.forEach(item => {
                item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
            });
  
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
  }
  
  function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // フォーム送信の処理は後で追加する
        alert('お問い合わせありがとうございます。近日中にご連絡いたします。');
        contactForm.reset();
    });
  }
  
  function initScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
  
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
  }
  