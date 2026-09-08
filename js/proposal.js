/**
 * =========================================================================
 * அடியே என் குலசாமியே... ❤️ | PROPOSAL INTERACTION & CELEBRATION
 * =========================================================================
 */

class ProposalExperience {
  constructor(audioManager, confettiCannon) {
    this.audioManager = audioManager;
    this.confettiCannon = confettiCannon;
    this.config = window.STORY_CONFIG ? window.STORY_CONFIG.proposal : null;

    this.yesBtn = document.getElementById('proposal-yes-btn');
    this.noBtn = document.getElementById('proposal-no-btn');
    this.toast = document.getElementById('playful-toast');
    this.celebrationOverlay = document.getElementById('celebration-overlay');
    this.replayBtn = document.getElementById('celebration-replay-btn');

    this.playfulIndex = 0;
    this.avoidCount = 0;

    // Set initial styling for absolute layout dynamic dodging
    if (this.noBtn) {
      this.noBtn.style.position = 'relative';
      this.noBtn.style.transition = 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }

    this.bindEvents();
  }

  bindEvents() {
    // 1. Click YES Button
    if (this.yesBtn) {
      this.yesBtn.addEventListener('click', () => this.triggerCelebration());
    }

    // 2. Continuous Runaway Evasion when Cursor gets close or hovers
    const handleCloseEvasion = (e) => {
      if (!this.noBtn) return;
      
      const btnRect = this.noBtn.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width / 2;
      const btnCenterY = btnRect.top + btnRect.height / 2;

      // Extract client coords
      let clientX, clientY;
      if (e.type === 'touchmove' || e.type === 'touchstart') {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const distance = Math.hypot(clientX - btnCenterX, clientY - btnCenterY);

      // If cursor is within 140px, trigger evasion
      if (distance < 140) {
        this.handlePlayfulDodge(clientX, clientY);
      }
    };

    window.addEventListener('mousemove', handleCloseEvasion);
    window.addEventListener('touchmove', handleCloseEvasion, { passive: true });

    if (this.noBtn) {
      this.noBtn.addEventListener('mouseenter', (e) => this.handlePlayfulDodge(e.clientX, e.clientY));
      this.noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        this.handlePlayfulDodge(touch.clientX, touch.clientY);
      }, { passive: false });
      
      this.noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handlePlayfulDodge();
      });
    }

    // 3. Replay Button
    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', () => {
        if (this.celebrationOverlay) {
          this.celebrationOverlay.classList.remove('active');
        }
        // Reset button position
        if (this.noBtn) {
          this.noBtn.style.transform = 'translate(0px, 0px)';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  handlePlayfulDodge(mouseX = 0, mouseY = 0) {
    this.avoidCount++;

    // Calculate a random offset that moves it far enough away
    const maxOffset = 180;
    const minOffset = 80;
    
    let randomX = (Math.random() - 0.5) * maxOffset * 2.2;
    let randomY = (Math.random() - 0.5) * maxOffset * 1.5;

    // Assure translation is at least minOffset
    if (Math.abs(randomX) < minOffset) randomX = randomX < 0 ? -minOffset : minOffset;
    if (Math.abs(randomY) < minOffset) randomY = randomY < 0 ? -minOffset : minOffset;

    if (this.noBtn) {
      this.noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Show witty romantic responses on every 3rd evade or initially
    if (this.avoidCount % 2 === 1) {
      const responses = (this.config && this.config.playfulNoResponses) || [
        "Are you sure? Viswajith is still waiting... 😉",
        "Think carefully, my sweet Kula Saamiye! ❤️",
        "Error 404: 'No' button is out of order! 😂",
        "I said I would wait, but don't keep me waiting too long! 😜",
        "Only one correct answer exists! Click YES! 💍✨",
        "There is no escaping my love, Sowmya! ❤️"
      ];

      const message = responses[this.playfulIndex % responses.length];
      this.playfulIndex++;
      this.showToast(message);
    }

    // Make YES button pulse more intensely
    if (this.yesBtn) {
      this.yesBtn.style.transform = 'scale(1.18)';
      setTimeout(() => {
        if (this.yesBtn) this.yesBtn.style.transform = '';
      }, 350);
    }
  }

  showToast(message) {
    if (!this.toast) return;
    this.toast.textContent = message;
    this.toast.classList.add('show');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      if (this.toast) this.toast.classList.remove('show');
    }, 2500);
  }

  triggerCelebration() {
    // 1. Show Celebration Overlay
    if (this.celebrationOverlay) {
      this.celebrationOverlay.classList.add('active');
    }

    // 2. Fire Confetti Cannon waves
    if (this.confettiCannon) {
      this.confettiCannon.fire(180);
      setTimeout(() => this.confettiCannon.fire(140), 1200);
      setTimeout(() => this.confettiCannon.fire(120), 2500);
    }

    // 3. Trigger Celebration Audio Mood
    if (this.audioManager) {
      this.audioManager.setMood('celebration');
      if (!this.audioManager.isPlaying) {
        this.audioManager.start();
      }
    }
  }
}

window.ProposalExperience = ProposalExperience;
