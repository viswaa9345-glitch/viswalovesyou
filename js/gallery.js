/**
 * =========================================================================
 * அடியே என் குலசாமியே... ❤️ | GALLERY & LIGHTBOX MANAGER
 * =========================================================================
 */

class MemoryGalleryManager {
  constructor() {
    this.modal = document.getElementById('lightbox-modal');
    this.modalImg = document.getElementById('lightbox-image');
    this.modalCaption = document.getElementById('lightbox-caption');
    this.closeBtn = document.getElementById('lightbox-close-btn');

    this.currentIndex = 0;
    this.galleryItems = [];

    this.initGallery();
    this.bindEvents();
  }

  initGallery() {
    const collageElements = document.querySelectorAll('.collage-item');
    collageElements.forEach((el, index) => {
      const img = el.querySelector('.collage-img');
      const caption = el.querySelector('.collage-caption');
      const src = img ? img.getAttribute('src') : '';
      const captionText = caption ? caption.textContent : '';

      this.galleryItems.push({ src, caption: captionText });

      el.addEventListener('click', () => {
        this.open(index);
      });
    });
  }

  open(index) {
    if (!this.modal || !this.galleryItems[index]) return;
    this.currentIndex = index;
    const item = this.galleryItems[index];

    if (this.modalImg) this.modalImg.src = item.src;
    if (this.modalCaption) this.modalCaption.textContent = item.caption;

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.galleryItems.length;
    this.open(this.currentIndex);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
    this.open(this.currentIndex);
  }

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!this.modal || !this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (this.modal) {
      this.modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (diff < -50) this.next();
        if (diff > 50) this.prev();
      }, { passive: true });
    }
  }
}

window.MemoryGalleryManager = MemoryGalleryManager;
