/**
 * =========================================================================
 * அடியே என் குலசாமியே... ❤️ | SCROLL CONTROLLER & CINEMATIC INTERACTIVITY
 * =========================================================================
 */

class StoryScrollController {
  constructor(audioManager, particleEngine) {
    this.audioManager = audioManager;
    this.particleEngine = particleEngine;
    this.progressBar = document.getElementById('top-progress-bar');
    this.chapters = document.querySelectorAll('.story-chapter');
    this.navDots = document.querySelectorAll('.chapter-nav-dot');

    this.initScrollObserver();
    this.initProgressBar();
    this.initInteractiveComponents();
    this.initLiveLoveClock();
  }

  initProgressBar() {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (this.progressBar) {
        this.progressBar.style.width = scrolled + '%';
      }
    }, { passive: true });
  }

  initScrollObserver() {
    // 1. Reveal on scroll animations
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      revealObserver.observe(el);
    });

    // 2. Chapter mood & theme transition observer
    const chapterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chapterId = entry.target.id;
          const chapterIndex = parseInt(entry.target.getAttribute('data-chapter-index'), 10);

          // Update active navigation dot
          this.navDots.forEach(dot => {
            if (dot.getAttribute('data-target') === chapterId) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });

          // Dynamic Audio & Particle mood shifts
          this.handleChapterMoodShift(chapterIndex, chapterId);
        }
      });
    }, {
      threshold: 0.45
    });

    this.chapters.forEach(chapter => {
      chapterObserver.observe(chapter);
    });

    // Nav dots click handlers
    this.navDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  handleChapterMoodShift(chapterIndex, chapterId) {
    if (!this.audioManager) return;

    if (chapterIndex === 1 || chapterIndex === 2) {
      this.audioManager.setMood('ambient-opening');
      if (this.particleEngine) this.particleEngine.setThemeMood('dark-abyss');
    } else if (chapterIndex >= 3 && chapterIndex <= 5) {
      this.audioManager.setMood('playful');
      if (this.particleEngine) this.particleEngine.setThemeMood('csk');
    } else if (chapterIndex === 6) {
      this.audioManager.setMood('playful');
      if (this.particleEngine) this.particleEngine.setThemeMood('goa');
    } else if (chapterIndex >= 7 && chapterIndex <= 8) {
      this.audioManager.setMood('emotional-promise');
      if (this.particleEngine) this.particleEngine.setThemeMood('crimson');
    } else if (chapterIndex >= 9 && chapterIndex <= 10) {
      this.audioManager.setMood('emotional-promise');
      if (this.particleEngine) this.particleEngine.setThemeMood('warm-gold');
    } else if (chapterIndex >= 11 && chapterIndex <= 14) {
      this.audioManager.setMood('celebration');
      if (this.particleEngine) this.particleEngine.setThemeMood('radiant');
    } else if (chapterIndex >= 15 && chapterIndex <= 18) {
      this.audioManager.setMood('ambient-opening');
      if (this.particleEngine) this.particleEngine.setThemeMood('warm-gold');
    } else if (chapterIndex >= 19 || chapterId === 'chapter-proposal') {
      this.audioManager.setMood('emotional-promise');
      if (this.particleEngine) this.particleEngine.setThemeMood('radiant');
    }
  }

  initInteractiveComponents() {
    // 1. Instagram Request button animation in Chapter 3
    const igBtn = document.getElementById('ig-request-action-btn');
    const igToast = document.getElementById('ig-toast-msg');

    if (igBtn) {
      igBtn.addEventListener('click', () => {
        if (igBtn.classList.contains('state-send')) {
          igBtn.classList.remove('state-send');
          igBtn.classList.add('state-requested');
          igBtn.innerHTML = `<span>Requested ✓</span>`;
          if (igToast) {
            igToast.classList.add('show');
            setTimeout(() => igToast.classList.remove('show'), 3500);
          }
        }
      });
    }

    // 2. Childhood Timeline Switcher in Chapter 13
    const timelineTabs = document.querySelectorAll('.timeline-tab-btn');
    const timelineStages = document.querySelectorAll('.timeline-card-stage');

    timelineTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const stageId = tab.getAttribute('data-stage');
        timelineTabs.forEach(t => t.classList.remove('active'));
        timelineStages.forEach(s => s.classList.remove('active'));

        tab.classList.add('active');
        const targetStage = document.getElementById(stageId);
        if (targetStage) targetStage.classList.add('active');
      });
    });

    // 3. Begin story button scroll in Chapter 1
    const beginBtn = document.getElementById('hero-begin-btn');
    if (beginBtn) {
      beginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const ch2 = document.getElementById('chapter-2');
        if (ch2) ch2.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // 4. One Last Thing button scroll to Proposal
    const lastThingBtn = document.getElementById('last-thing-btn');
    if (lastThingBtn) {
      lastThingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const proposalCh = document.getElementById('chapter-proposal');
        if (proposalCh) proposalCh.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  initLiveLoveClock() {
    const daysEl = document.getElementById('clock-days');
    const hoursEl = document.getElementById('clock-hours');
    const minsEl = document.getElementById('clock-mins');
    const secsEl = document.getElementById('clock-secs');

    if (!daysEl) return;

    // August 9, 2026 at local midnight; the counter counts upward from here.
    const startDate = new Date(2026, 7, 9, 0, 0, 0, 0);

    const updateClock = () => {
      const now = new Date();
      const diffMs = now - startDate;

      if (diffMs > 0) {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diffMs / 1000 / 60) % 60);
        const secs = Math.floor((diffMs / 1000) % 60);

        daysEl.textContent = days;
        hoursEl.textContent = String(hours).padStart(2, '0');
        minsEl.textContent = String(mins).padStart(2, '0');
        secsEl.textContent = String(secs).padStart(2, '0');
      }
    };

    updateClock();
    setInterval(updateClock, 1000);
  }
}

window.StoryScrollController = StoryScrollController;
