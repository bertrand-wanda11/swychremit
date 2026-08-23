<template>
  <div class="about-page">
    <header class="about-hero">
      <div class="about-hero-decor" aria-hidden="true">
        <span class="blob blob-a"></span>
        <span class="blob blob-b"></span>
      </div>
      <div class="about-hero-container">
        <span class="about-tagline reveal is-visible">Who We Are</span>
        <h1 class="about-main-title reveal is-visible" style="transition-delay: 70ms">
          Building the fastest way to send money home
        </h1>
        <p class="about-hero-subtext reveal is-visible" style="transition-delay: 140ms">
          Swychremit connects families, freelancers, and businesses across borders with transparent rates,
          bank-grade security, and transfers that land in seconds — not days.
        </p>
      </div>
    </header>

    <main class="about-body">

      <section class="about-mission-section">
        <div class="about-mission-card" v-reveal>
          <span class="mission-tag">Our Mission</span>
          <p>
            To dismantle the high fees and slow transfer speeds that burden families sending money across borders —
            by connecting directly to local bank rails and mobile money wallets across Africa and worldwide, so that
            moving money home is as easy as sending a message.
          </p>
        </div>
      </section>

      <section class="about-stats-section">
        <div class="about-stats-grid">
          <div class="about-stat-box" v-reveal="0">
            <h2>{{ countries }}+</h2>
            <span>Supported Countries</span>
          </div>
          <div class="about-stat-box" v-reveal="1">
            <h2>&lt; 60s</h2>
            <span>Average Delivery Time</span>
          </div>
          <div class="about-stat-box" v-reveal="2">
            <h2>24/7</h2>
            <span>Customer Support</span>
          </div>
        </div>
      </section>

      <section class="about-values-section">
        <div class="about-section-header" v-reveal>
          <h2>What we stand for</h2>
          <p>The principles behind every transfer we route.</p>
        </div>

        <div class="about-values-grid">
          <div class="about-value-card" v-reveal="0">
            <div class="value-icon mint-theme">
              <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            </div>
            <h3>Transparency</h3>
            <p>The rate you see at checkout is the exact rate applied — no hidden markups, no surprise fees.</p>
          </div>

          <div class="about-value-card" v-reveal="1">
            <div class="value-icon speed-theme">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
            <h3>Speed</h3>
            <p>Most corridor transfers settle in under 60 seconds, direct to bank accounts and mobile wallets.</p>
          </div>

          <div class="about-value-card" v-reveal="2">
            <div class="value-icon security-theme">
              <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" style="opacity:0"/><path d="M12 2 4 5.5V11c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5.5L12 2zm0 9.99h6c-.46 3.6-2.86 6.8-6 7.8V12H6V6.9l6-2.7v7.79z"/></svg>
            </div>
            <h3>Security</h3>
            <p>End-to-end encryption and strict AML/KYC compliance, backed by licensed financial partners.</p>
          </div>

          <div class="about-value-card" v-reveal="3">
            <div class="value-icon account-theme">
              <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <h3>Accessibility</h3>
            <p>Direct rails into local banks and mobile money wallets across Africa and beyond — built for everyone.</p>
          </div>
        </div>
      </section>

      <section class="about-story-section">
        <div class="about-story-card" v-reveal>
          <span class="mission-tag">Our Story</span>
          <h2>From a simple frustration to a global network</h2>
          <p>
            Swychremit was created with a clear mission: to dismantle the high fees and slow transfer speeds
            that burden families sending money across borders.
          </p>
          <p>
            By connecting directly to local bank rails and mobile money wallets across Africa and worldwide,
            Swychremit makes cross-border payments as easy as sending a message — routed through
            <strong>Swychr Technology USA LLC</strong>, our technology and software provider.
          </p>
        </div>
      </section>

      <section class="about-cta-section">
        <div class="about-cta-card" v-reveal>
          <span class="cta-graphic">🌍</span>
          <h2>Join thousands sending smarter</h2>
          <p>Download the app and send your first transfer in minutes.</p>
          <router-link to="/download" class="about-cta-btn" v-magnetic="10">Get the App</router-link>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const countries = ref(0);

const countUp = (target, setter, duration, decimals = 0) => {
  const start = performance.now();
  const factor = Math.pow(10, decimals);
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setter(Math.round(target * eased * factor) / factor);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

onMounted(() => {
  countUp(50, (v) => (countries.value = v), 1100);
});
</script>

<style scoped>
.about-page {
  width: 100%;
  background-color: #ffffff;
}

.about-hero {
  width: 100%;
  background: linear-gradient(155deg, var(--clr-purple-800), var(--clr-purple-600) 55%, var(--clr-purple-700));
  padding: 7rem 2rem 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.about-hero-decor {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.blob-a {
  width: 380px;
  height: 380px;
  top: -160px;
  left: -60px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.16), transparent 70%);
}

.blob-b {
  width: 420px;
  height: 420px;
  bottom: -220px;
  right: -100px;
  background: radial-gradient(circle, rgba(0, 208, 156, 0.28), transparent 70%);
}

.about-hero-container {
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-tagline {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: #f3e8ff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.about-main-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.about-hero-subtext {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

.about-body {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-mission-section {
  margin-top: -3rem;
  position: relative;
  z-index: 2;
}

.about-mission-card {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid var(--clr-border);
  box-shadow: var(--shadow-lg);
  padding: 2.5rem 2.5rem;
}

.mission-tag {
  display: inline-block;
  background: linear-gradient(120deg, #f3e8ff, #ece0ff);
  color: var(--clr-purple-500);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.about-mission-card p {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--clr-purple-800);
  line-height: 1.6;
  border-left: 4px solid var(--clr-purple-600);
  padding-left: 1.25rem;
}

.about-stats-section {
  padding: 4rem 0 2rem;
}

.about-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.about-stat-box {
  background: linear-gradient(135deg, var(--clr-purple-700), var(--clr-purple-600));
  color: #ffffff;
  padding: 2rem 1rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: var(--shadow-purple);
  transition: transform 260ms var(--ease-out-expo), box-shadow 260ms ease;
}

.about-stat-box:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-purple-lg);
}

.about-stat-box h2 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
  font-variant-numeric: tabular-nums;
}

.about-stat-box span {
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.9;
}

.about-values-section {
  padding: 3rem 0;
}

.about-section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
}

.about-section-header h2 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--clr-purple-600);
  letter-spacing: -0.02em;
  margin-bottom: 0.6rem;
}

.about-section-header p {
  color: var(--clr-ink-400);
  font-size: 1.05rem;
}

.about-values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.about-value-card {
  background: #ffffff;
  border: 1px solid var(--clr-surface-100);
  border-radius: 20px;
  padding: 1.75rem;
  transition: transform 300ms var(--ease-out-expo), box-shadow 300ms var(--ease-out-expo), border-color 300ms ease;
}

.about-value-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--clr-border);
}

.value-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: transform 300ms var(--ease-out-expo);
}

.about-value-card:hover .value-icon {
  transform: scale(1.1) rotate(-6deg);
}

.value-icon svg {
  width: 22px;
  height: 22px;
}

.mint-theme { background-color: #e2fef7; }
.mint-theme svg { fill: #00d09c; }

.speed-theme { background-color: #fef3c7; }
.speed-theme svg { fill: #d97706; }

.security-theme { background-color: #ede9fe; }
.security-theme svg { fill: #7c3aed; }

.account-theme { background-color: #dbeafe; }
.account-theme svg { fill: #2563eb; }

.about-value-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--clr-ink-900);
  margin-bottom: 0.5rem;
}

.about-value-card p {
  font-size: 0.9rem;
  color: var(--clr-ink-400);
  line-height: 1.6;
}

.about-story-section {
  padding: 3rem 0;
}

.about-story-card {
  background: var(--clr-surface-50);
  border: 1px solid var(--clr-surface-100);
  border-radius: 24px;
  padding: 2.5rem;
}

.about-story-card h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--clr-ink-900);
  margin: 0.5rem 0 1.25rem 0;
}

.about-story-card p {
  font-size: 1rem;
  color: var(--clr-ink-500);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.about-story-card p:last-child {
  margin-bottom: 0;
}

.about-cta-section {
  padding: 3rem 0 5rem;
}

.about-cta-card {
  background: linear-gradient(135deg, var(--clr-purple-700), var(--clr-purple-600) 55%, var(--clr-purple-500));
  border-radius: 28px;
  padding: 3.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.about-cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.14), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(0, 208, 156, 0.22), transparent 45%);
  pointer-events: none;
}

.cta-graphic {
  font-size: 2.75rem;
  display: block;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  animation: ctaFloat 4s ease-in-out infinite;
}

@keyframes ctaFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.about-cta-card h2 {
  font-size: 1.9rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
  position: relative;
  z-index: 1;
}

.about-cta-card p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.75rem;
  position: relative;
  z-index: 1;
}

.about-cta-btn {
  display: inline-block;
  background: #ffffff;
  color: var(--clr-purple-600);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 220ms ease;
}

.about-cta-btn:hover {
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .about-hero {
    padding: 6rem 1.25rem 8rem 1.25rem;
  }

  .about-main-title {
    font-size: 2rem;
  }

  .about-hero-subtext {
    font-size: 1rem;
  }

  .about-body {
    padding: 0 1.25rem;
  }

  .about-mission-card {
    padding: 1.75rem;
  }

  .about-mission-card p {
    font-size: 1.05rem;
  }

  .about-stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .about-values-grid {
    grid-template-columns: 1fr;
  }

  .about-story-card {
    padding: 1.75rem;
  }

  .about-cta-card {
    padding: 2.5rem 1.5rem;
    border-radius: 22px;
  }

  .about-cta-card h2 {
    font-size: 1.5rem;
  }
}
</style>
