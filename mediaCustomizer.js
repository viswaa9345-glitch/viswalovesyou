/**
 * =========================================================================
 * அடியே என் குலசாமியே... ❤️ | LIVE MEDIA & PHOTO CUSTOMIZER
 * =========================================================================
 * 
 * Enables Viswajith to upload and customize real photos and music
 * directly from the browser (on mobile or desktop) with persistent local storage.
 */

class StoryMediaCustomizer {
  constructor(audioManager) {
    this.audioManager = audioManager;
    this.storageKey = 'kula_saamiye_media_v1';
    this.customMedia = this.loadSavedMedia();

    this.initUI();
    this.applySavedMedia();
  }

  loadSavedMedia() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.warn('Storage load error:', e);
      return {};
    }
  }

  saveMedia() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.customMedia));
    } catch (e) {
      console.warn('Storage quota exceeded or error:', e);
    }
  }

  initUI() {
    // 1. Create Floating Settings Button
    const floatingBtn = document.createElement('button');
    floatingBtn.id = 'media-customizer-trigger';
    floatingBtn.className = 'media-customizer-trigger';
    floatingBtn.innerHTML = `<span>⚙️ Add Photos</span>`;
    floatingBtn.setAttribute('title', 'Upload your real photos');
    document.body.appendChild(floatingBtn);

    // 2. Create Modal Drawer
    const modal = document.createElement('div');
    modal.id = 'media-customizer-modal';
    modal.className = 'media-customizer-modal';
    modal.innerHTML = `
      <div class="customizer-card">
        <div class="customizer-header">
          <div>
            <h3 class="gold-gradient-text" style="font-size: 1.4rem;">Add Photos</h3>
            <p style="font-size: 0.82rem; color: var(--text-muted);">Customize your love story with your real pictures</p>
          </div>
          <button id="customizer-close-btn" class="customizer-close-btn">✕</button>
        </div>

        <div class="customizer-tabs">
          <button class="customizer-tab-btn" data-tab="tab-photos">📸 Story Photos</button>
        </div>

        <!-- Photos Tab -->
        <div id="tab-photos" class="customizer-tab-content active">
          <div class="photos-upload-grid">
            
            <div class="photo-upload-slot">
              <label>1. Sowmya's Intro Portrait (Ch 1 & 2):</label>
              <input type="file" accept="image/*" data-target-slot="sowmya_intro" class="photo-slot-input">
              <div class="slot-preview" id="prev-sowmya_intro"></div>
            </div>

            <div class="photo-upload-slot">
              <label>2. Goa Story Photo (Ch 6):</label>
              <input type="file" accept="image/*" data-target-slot="goa_story" class="photo-slot-input">
              <div class="slot-preview" id="prev-goa_story"></div>
            </div>

            <div class="photo-upload-slot">
              <label>3. August 9 Couple Photo (Ch 11 & Proposal):</label>
              <input type="file" accept="image/*" data-target-slot="august9_moment" class="photo-slot-input">
              <div class="slot-preview" id="prev-august9_moment"></div>
            </div>

            <div class="photo-upload-slot">
              <label>4. Bringing Her Home Photo (Ch 12):</label>
              <input type="file" accept="image/*" data-target-slot="home_moment" class="photo-slot-input">
              <div class="slot-preview" id="prev-home_moment"></div>
            </div>

            <div class="photo-upload-slot">
              <label>5. Little Sowmya Childhood (Ch 13):</label>
              <input type="file" accept="image/*" data-target-slot="childhood_1" class="photo-slot-input">
              <div class="slot-preview" id="prev-childhood_1"></div>
            </div>

            <div class="photo-upload-slot">
              <label>6. Sowmya Growing Up (Ch 13):</label>
              <input type="file" accept="image/*" data-target-slot="childhood_2" class="photo-slot-input">
              <div class="slot-preview" id="prev-childhood_2"></div>
            </div>

            <div class="photo-upload-slot">
              <label>7. Memory 1 (The Beginning):</label>
              <input type="file" accept="image/*" data-target-slot="memory_1" class="photo-slot-input">
              <div class="slot-preview" id="prev-memory_1"></div>
            </div>

            <div class="photo-upload-slot">
              <label>8. Memory 2 (Shared Smiles):</label>
              <input type="file" accept="image/*" data-target-slot="memory_2" class="photo-slot-input">
              <div class="slot-preview" id="prev-memory_2"></div>
            </div>

          </div>
        </div>

        <div class="customizer-actions">
          <button id="customizer-save-btn" class="btn-primary-gold" style="width: 100%;">
            <span>Apply Changes ✨</span>
          </button>
          <button id="customizer-reset-btn" class="btn-outline-gold" style="width: 100%; margin-top: 8px;">
            <span>Reset to Defaults</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    this.bindEvents(floatingBtn, modal);
  }

  bindEvents(triggerBtn, modal) {
    // Open / Close Modal
    triggerBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    const closeBtn = modal.querySelector('#customizer-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    // Tabs Switcher
    const tabBtns = modal.querySelectorAll('.customizer-tab-btn');
    const tabContents = modal.querySelectorAll('.customizer-tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const content = modal.querySelector(`#${targetTab}`);
        if (content) content.classList.add('active');
      });
    });

    // Photo Slots Upload
    const photoInputs = modal.querySelectorAll('.photo-slot-input');
    photoInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        const slot = input.getAttribute('data-target-slot');
        const file = e.target.files[0];
        if (file && slot) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            const dataUrl = evt.target.result;
            this.customMedia[slot] = dataUrl;
            
            const prev = modal.querySelector(`#prev-${slot}`);
            if (prev) {
              prev.innerHTML = `<img src="${dataUrl}" style="width: 100%; height: 50px; object-fit: cover; border-radius: 6px;">`;
            }
          };
          reader.readAsDataURL(file);
        }
      });
    });

    // Apply & Save
    const saveBtn = modal.querySelector('#customizer-save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        this.saveMedia();
        this.applySavedMedia();
        modal.classList.remove('active');
        alert('Photos & Music applied successfully! ✨');
      });
    }

    // Reset
    const resetBtn = modal.querySelector('#customizer-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset all customized photos and audio?')) {
          localStorage.removeItem(this.storageKey);
          this.customMedia = {};
          location.reload();
        }
      });
    }
  }

  applySavedMedia() {
    // Apply Custom Photos
    const slotMappings = {
      'sowmya_intro': [
        '#chapter-1 .hero-emergence-img',
        '#chapter-2 .luxury-portrait-img',
        '#chapter-3 .ig-avatar-img'
      ],
      'goa_story': [
        '#chapter-6 .goa-polaroid-img'
      ],
      'august9_moment': [
        '#chapter-11 .luxury-portrait-img',
        '#chapter-proposal .proposal-couple-img'
      ],
      'home_moment': [
        '#chapter-12 .hero-emergence-img'
      ],
      'childhood_1': [
        '#stage-childhood .timeline-photo-img'
      ],
      'childhood_2': [
        '#stage-growing .timeline-photo-img'
      ],
      'memory_1': [
        '#chapter-16 .memories-masonry .memory-polaroid-item:nth-child(1) .memory-img'
      ],
      'memory_2': [
        '#chapter-16 .memories-masonry .memory-polaroid-item:nth-child(2) .memory-img'
      ]
    };

    Object.keys(slotMappings).forEach(slot => {
      if (this.customMedia[slot]) {
        const dataUrl = this.customMedia[slot];
        const selectors = slotMappings[slot];
        selectors.forEach(sel => {
          const el = document.querySelector(sel);
          if (el) el.src = dataUrl;
        });
      }
    });
  }
}

window.StoryMediaCustomizer = StoryMediaCustomizer;
