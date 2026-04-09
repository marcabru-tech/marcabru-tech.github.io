/* ═══════════════════════════════════════════════════════════════════
   script.js — portfolio animations & interactions
   Guilherme Machado | Marcabru Tech
═══════════════════════════════════════════════════════════════════ */

'use strict';

// ─── Particle Canvas ─────────────────────────────────────────────────────────
(function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = 0, H = 0;
    const PARTICLE_COUNT = 80;
    const particles = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() { this.reset(true); }
        reset(initial = false) {
            this.x  = Math.random() * W;
            this.y  = initial ? Math.random() * H : H + 10;
            this.r  = Math.random() * 1.5 + 0.3;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = -(Math.random() * 0.4 + 0.1);
            this.alpha = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.y < -10 || this.x < -10 || this.x > W + 10) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 245, 255, ${this.alpha})`;
            ctx.fill();
        }
    }

    // Initialise particles
    function init() {
        particles.length = 0;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    // Draw connecting lines between nearby particles
    function drawConnections() {
        const MAX_DIST = 120;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const opacity = (1 - dist / MAX_DIST) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    let animFrame;
    function loop() {
        ctx.clearRect(0, 0, W, H);
        drawConnections();
        for (const p of particles) {
            p.update();
            p.draw();
        }
        animFrame = requestAnimationFrame(loop);
    }

    resize();
    init();
    loop();

    window.addEventListener('resize', () => {
        resize();
        init();
    });
})();


// ─── Typing Effect ────────────────────────────────────────────────────────────
(function initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const phrases = [
        'automação inteligente',
        'integração de sistemas',
        'liderança tech',
        'inovação contínua',
        'inteligência artificial',
    ];
    let phraseIdx = 0;
    let charIdx   = 0;
    let deleting  = false;
    let paused    = false;

    function tick() {
        const phrase = phrases[phraseIdx];

        if (paused) {
            paused = false;
            setTimeout(tick, 1500);
            return;
        }

        if (!deleting) {
            el.textContent = phrase.slice(0, ++charIdx);
            if (charIdx === phrase.length) {
                deleting = true;
                paused = true;
            }
            setTimeout(tick, 65);
        } else {
            el.textContent = phrase.slice(0, --charIdx);
            if (charIdx === 0) {
                deleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
            }
            setTimeout(tick, 35);
        }
    }

    setTimeout(tick, 800);
})();


// ─── Navbar: scroll state + active section highlighting ──────────────────────
(function initNavbar() {
    const navbar  = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    // Scroll class
    function onScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();


// ─── Mobile menu toggle ───────────────────────────────────────────────────────
(function initMobileMenu() {
    const btn  = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => menu.classList.add('hidden'));
    });
})();


// ─── Scroll Reveal ────────────────────────────────────────────────────────────
(function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealEls.forEach(el => io.observe(el));
})();


// ─── Animated Counters ────────────────────────────────────────────────────────
(function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    const DURATION = 1600; // ms

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const start  = performance.now();

        function step(now) {
            const elapsed  = now - start;
            const progress = Math.min(elapsed / DURATION, 1);
            // ease-out quad
            const eased    = 1 - (1 - progress) * (1 - progress);
            el.textContent = Math.round(eased * target) + (el.dataset.suffix || '+');
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // Trigger counters when stat cards enter viewport
    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(c => io.observe(c));
})();


// ─── Skill bars ───────────────────────────────────────────────────────────────
(function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar[data-width]');
    if (!bars.length) return;

    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.dataset.width + '%';
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    bars.forEach(bar => io.observe(bar));
})();


// ─── Contact form validation ──────────────────────────────────────────────────
(function initContactForm() {
    const form    = document.getElementById('contact-form');
    if (!form) return;

    const fields = {
        name:    { el: document.getElementById('name'),    errEl: document.getElementById('name-error'),    validate: v => v.trim().length >= 2 },
        email:   { el: document.getElementById('email'),   errEl: document.getElementById('email-error'),   validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
        subject: { el: document.getElementById('subject'), errEl: document.getElementById('subject-error'), validate: v => v.trim().length >= 2 },
        message: { el: document.getElementById('message'), errEl: document.getElementById('message-error'), validate: v => v.trim().length >= 10 },
    };

    const submitBtn   = document.getElementById('submit-btn');
    const btnText     = document.getElementById('btn-text');
    const btnSpinner  = document.getElementById('btn-spinner');
    const successMsg  = document.getElementById('form-success');

    function validateField(key) {
        const { el, errEl, validate } = fields[key];
        const valid = validate(el.value);
        el.classList.toggle('input-error', !valid);
        errEl.classList.toggle('hidden', valid);
        return valid;
    }

    // Live validation on blur
    Object.keys(fields).forEach(key => {
        fields[key].el.addEventListener('blur', () => validateField(key));
        fields[key].el.addEventListener('input', () => {
            if (fields[key].el.classList.contains('input-error')) validateField(key);
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        const allValid = Object.keys(fields).map(validateField).every(Boolean);
        if (!allValid) return;

        // Simulate submit
        submitBtn.disabled = true;
        btnText.textContent = 'A enviar…';
        btnSpinner.classList.remove('hidden');

        setTimeout(() => {
            submitBtn.disabled = false;
            btnText.textContent = 'Enviar Mensagem';
            btnSpinner.classList.add('hidden');
            successMsg.classList.remove('hidden');
            form.reset();
            setTimeout(() => successMsg.classList.add('hidden'), 6000);
        }, 1800);
    });
})();
