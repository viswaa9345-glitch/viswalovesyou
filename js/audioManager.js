/**
 * =========================================================================
 * அடியே என் குலசாமியே... ❤️ | AUDIO MANAGER & CINEMATIC SOUND ENGINE
 * =========================================================================
 * 
 * Features:
 * 1. Web Audio API synthesized dynamic romantic acoustic chords & ambient pads.
 * 2. HTML5 <audio> player support for custom MP3 tracks (e.g., Pottala Muttaye).
 * 3. Smooth volume fading, chapter-aware emotional chord progressions.
 * 4. User-friendly floating controls (Play/Pause, Mute, Volume).
 */

class StoryAudioManager {
  constructor(config) {
    this.config = config || (window.STORY_CONFIG ? window.STORY_CONFIG.audio : {});
    this.audioCtx = null;
    this.isMuted = false;
    this.isPlaying = false;
    this.masterVolume = this.config.defaultVolume || 0.15;
    this.currentMood = 'ambient-opening';
    this.htmlAudio = null;
    this.hasCustomTrack = false;
    this.synthInterval = null;

    this.initElements();
    this.setupHtmlAudio();
  }

  initElements() {
    this.musicPill = document.getElementById('music-toggle-btn');
    this.statusText = document.getElementById('music-status-text');
    this.songNameEl = document.getElementById('music-song-name');
    this.volumeIcon = document.getElementById('music-volume-icon');

    if (this.musicPill) {
      this.musicPill.addEventListener('click', () => this.togglePlayPause());
    }
  }

  setupHtmlAudio() {
    if (this.config.customTrackUrl) {
      this.htmlAudio = new Audio();
      this.htmlAudio.src = this.config.customTrackUrl;
      this.htmlAudio.loop = true;
      this.htmlAudio.volume = this.masterVolume;

      this.htmlAudio.addEventListener('canplaythrough', () => {
        this.hasCustomTrack = true;
        if (this.songNameEl && this.config.trackTitle) {
          this.songNameEl.textContent = this.config.trackTitle;
        }
      });

      this.htmlAudio.addEventListener('error', () => {
        // Fallback gracefully to Web Audio Synthesizer
        this.hasCustomTrack = false;
        if (this.songNameEl) {
          this.songNameEl.textContent = "Cinematic Ambient";
        }
      });
    }
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.masterGainNode = this.audioCtx.createGain();
        this.masterGainNode.gain.setValueAtTime(this.masterVolume, this.audioCtx.currentTime);
        this.masterGainNode.connect(this.audioCtx.destination);
      }
    }

    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  start() {
    this.initAudioContext();
    this.isPlaying = true;

    if (this.hasCustomTrack && this.htmlAudio) {
      this.htmlAudio.play().catch(() => {
        // Autoplay policy or format fallback
        this.startSynth();
      });
    } else {
      this.startSynth();
    }

    this.updateUIState();
  }

  startSynth() {
    if (!this.audioCtx || this.synthInterval) return;

    // Musical chord frequencies for emotional romantic progressions
    const moodChordMap = {
      'ambient-opening': [
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23], // G7
        [261.63, 329.63, 392.00, 493.88]  // Cmaj7
      ],
      'playful': [
        [293.66, 369.99, 440.00, 554.37], // Dmaj7
        [220.00, 277.18, 329.63, 440.00], // A
        [246.94, 293.66, 369.99, 440.00], // Bm7
        [196.00, 246.94, 293.66, 369.99]  // Gmaj7
      ],
      'emotional-promise': [
        [174.61, 220.00, 261.63, 329.63, 392.00], // Fmaj9
        [261.63, 329.63, 392.00, 523.25],        // C
        [196.00, 246.94, 293.66, 392.00],        // G
        [220.00, 261.63, 329.63, 440.00]         // Am
      ],
      'celebration': [
        [293.66, 369.99, 440.00, 587.33], // D (Bright)
        [246.94, 311.13, 369.99, 493.88], // B (Warm)
        [196.00, 246.94, 293.66, 392.00], // G
        [220.00, 277.18, 329.63, 440.00]  // A
      ]
    };

    let chordIndex = 0;

    const playNextChord = () => {
      if (!this.isPlaying || !this.audioCtx) return;

      const chords = moodChordMap[this.currentMood] || moodChordMap['ambient-opening'];
      const chord = chords[chordIndex % chords.length];
      chordIndex++;

      const now = this.audioCtx.currentTime;
      const duration = 4.5; // slow, breathing pad

      chord.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, now);
        filter.frequency.exponentialRampToValueAtTime(1400, now + duration * 0.4);
        filter.frequency.exponentialRampToValueAtTime(450, now + duration);

        const noteVolume = (0.045 / (chord.length * 0.7));
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(noteVolume, now + 1.2 + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGainNode);

        osc.start(now);
        osc.stop(now + duration + 0.1);
      });
    };

    playNextChord();
    this.synthInterval = setInterval(playNextChord, 4200);
  }

  stopSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  setMood(mood) {
    if (this.currentMood !== mood) {
      this.currentMood = mood;
    }
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.start();
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.htmlAudio && this.hasCustomTrack) {
      this.htmlAudio.pause();
    }
    this.stopSynth();
    this.updateUIState();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    const targetGain = this.isMuted ? 0 : this.masterVolume;

    if (this.masterGainNode && this.audioCtx) {
      this.masterGainNode.gain.setTargetAtTime(targetGain, this.audioCtx.currentTime, 0.1);
    }
    if (this.htmlAudio) {
      this.htmlAudio.muted = this.isMuted;
    }

    this.updateUIState();
  }

  updateUIState() {
    if (!this.musicPill) return;

    if (this.isPlaying && !this.isMuted) {
      this.musicPill.classList.add('playing');
      if (this.statusText) this.statusText.textContent = 'PLAYING';
      if (this.volumeIcon) this.volumeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    } else {
      this.musicPill.classList.remove('playing');
      if (this.statusText) this.statusText.textContent = this.isMuted ? 'MUTED' : 'PAUSED';
      if (this.volumeIcon) this.volumeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
    }
  }
}

// Global instance helper
window.StoryAudioManager = StoryAudioManager;
