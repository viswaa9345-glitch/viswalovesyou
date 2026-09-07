/**
 * =========================================================================
 * அடியே என் குலசாமியே... ❤️ | CANVAS PARTICLES & AMBIENT VISUAL EFFECTS
 * =========================================================================
 */

class AmbientParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 55;
    this.themeMood = 'dark-abyss';
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.mouse = { x: this.width / 2, y: this.height / 2, active: false };

    this.resize();
    this.initParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.canvas) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      radius: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -(Math.random() * 0.5 + 0.2), // gentle upwards drift
      alpha: Math.random() * 0.6 + 0.2,
      maxAlpha: Math.random() * 0.7 + 0.3,
      alphaSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      baseColor: this.getThemeColor()
    };
  }

  getThemeColor() {
    if (this.themeMood === 'csk' || this.themeMood === 'warm-gold' || this.themeMood === 'radiant') {
      return { r: 223, g: 184, b: 114 }; // Gold
    } else if (this.themeMood === 'goa') {
      return { r: 245, g: 160, b: 80 }; // Sunset orange
    } else if (this.themeMood === 'crimson') {
      return { r: 224, g: 75, b: 104 }; // Rose crimson
    }
    return { r: 200, g: 210, b: 240 }; // Cool starlight
  }

  setThemeMood(mood) {
    this.themeMood = mood;
    const color = this.getThemeColor();
    this.particles.forEach(p => {
      p.baseColor = color;
    });
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });
    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Movement
      p.x += p.speedX;
      p.y += p.speedY;

      // Alpha pulse
      p.alpha += p.alphaSpeed;
      if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
        p.alphaSpeed *= -1;
      }

      // Wrap around bounds
      if (p.y < 0) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;

      // Draw particle glow
      const { r, g, b } = p.baseColor;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${p.alpha * 0.8})`;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

class ButterflyFlight {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'butterfly-flight';
    const colors = ['#d9a8ff', '#f4b8dc', '#b992ff', '#f3d28b'];

    for (let index = 0; index < 4; index++) {
      const butterfly = document.createElement('span');
      butterfly.className = 'butterfly';
      butterfly.innerHTML = '<span class="butterfly-wing butterfly-wing-upper-left"></span><span class="butterfly-wing butterfly-wing-lower-left"></span><span class="butterfly-wing butterfly-wing-upper-right"></span><span class="butterfly-wing butterfly-wing-lower-right"></span><span class="butterfly-body"></span>';
      butterfly.style.setProperty('--start-x', `${8 + Math.random() * 84}%`);
      butterfly.style.setProperty('--flight-x', `${(Math.random() - 0.5) * 380}px`);
      butterfly.style.setProperty('--flight-y', `${-105 - Math.random() * 35}vh`);
      butterfly.style.setProperty('--flight-duration', `${24 + Math.random() * 15}s`);
      butterfly.style.setProperty('--flight-delay', `${-Math.random() * 24}s`);
      butterfly.style.setProperty('--butterfly-scale', `${0.72 + Math.random() * 0.48}`);
      butterfly.style.setProperty('--butterfly-color', colors[index % colors.length]);
      this.container.appendChild(butterfly);
    }

    document.body.appendChild(this.container);
  }
}

/**
 * Confetti & Golden Sparkles Cannon for Proposal Celebration
 */
class ConfettiCannon {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.pieces = [];
    this.isActive = false;
    this.colors = [
      '#dfb872', '#f7e6b5', '#b88a38', '#ffffff', '#e04b68', '#f8c300'
    ];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  fire(count = 140) {
    this.isActive = true;
    const originX = this.canvas.width / 2;
    const originY = this.canvas.height / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 5;
      const size = Math.random() * 8 + 4;
      const isHeart = Math.random() > 0.6;

      this.pieces.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: size,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.18,
        drag: 0.96,
        alpha: 1,
        isHeart: isHeart
      });
    }

    if (!this.animating) {
      this.animating = true;
      this.animate();
    }
  }

  drawHeart(x, y, size, color, alpha) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.scale(size / 10, size / 10);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
    this.ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
    this.ctx.fillStyle = color;
    this.ctx.globalAlpha = alpha;
    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.pieces.length - 1; i >= 0; i--) {
      const p = this.pieces[i];
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.alpha -= 0.005;

      if (p.alpha <= 0 || p.y > this.canvas.height + 50) {
        this.pieces.splice(i, 1);
        continue;
      }

      if (p.isHeart) {
        this.drawHeart(p.x, p.y, p.size, p.color, p.alpha);
      } else {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.ctx.restore();
      }
    }

    if (this.pieces.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.animating = false;
    }
  }
}

// Global exposure
window.AmbientParticleEngine = AmbientParticleEngine;
window.ButterflyFlight = ButterflyFlight;
window.ConfettiCannon = ConfettiCannon;
