<template>
  <div class="home-view">
  <section class="hero-split-canvas" ref="heroSection" @mousemove="handleHeroMouseMove" @mouseleave="handleHeroMouseLeave">
    <div class="hero-bg-decor" aria-hidden="true">
      <span class="blob blob-a"></span>
      <span class="blob blob-b"></span>
      <span class="blob blob-c"></span>
      <span class="grid-overlay"></span>
      <span class="cursor-spotlight" ref="spotlight"></span>
      <span class="currency-particle cp-1">$</span>
      <span class="currency-particle cp-2">€</span>
      <span class="currency-particle cp-3">£</span>
      <span class="currency-particle cp-4">₦</span>
      <span class="currency-particle cp-5">¥</span>
      <span class="currency-particle cp-6">₹</span>
    </div>

    <div class="hero-inner-layout">
      <div class="hero-copy-column">
        <div class="trust-pill-badge reveal is-visible">{{ $t('hero.badge') }}</div>
        <h1 class="main-headline reveal is-visible">{{ $t('hero.title') }}</h1>
        <p class="sub-intro-text reveal is-visible" style="transition-delay: 90ms">{{ $t('hero.subtitle') }}</p>

        <div class="trust-metrics-row reveal is-visible" style="transition-delay: 160ms">
          <div class="metric-item">
            <strong>{{ countriesCount }}+</strong>
            <span>{{ $t('hero.metrics.countries') }}</span>
          </div>
          <div class="metric-item">
            <strong>24/7</strong>
            <span>{{ $t('hero.metrics.support') }}</span>
          </div>
        </div>

        <div class="store-links-cluster reveal is-visible" style="transition-delay: 220ms">
          <a href="#" class="store-badge-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
          </a>
          <a href="#" class="store-badge-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
          </a>
        </div>
      </div>


      <div class="hero-calculator-column">
        <div class="calculator-panel-box" v-tilt="5">

          <div class="calc-box-header">
            <span class="lock-icon">🔒</span>
          </div>

          <div class="currency-input-container-block">
            <label class="input-label-tag">{{ $t('hero.calc.send') }}</label>

            <div class="input-row-flex">
              <input type="number" v-model="sendAmount" class="numeric-field" @input="calculateConversion" />
              <div class="currency-selector-badge">
                <span class="flag-emoji">🇺🇸</span> <strong>USD</strong>
              </div>
            </div>
          </div>

          <div class="calculation-breakdown-flow-ladder">
            <div class="ladder-step">
              <span class="step-bullet"></span>
              <p class="step-detail-text"><span>$2.99</span> Transfer Processing Fee</p>
            </div>
            <div class="ladder-step">
              <span class="step-bullet accent-bullet"></span>
              <p class="step-detail-text"><span>1 USD = 1,485.50 NGN</span> Standard Mid-Market Rate</p>
            </div>
          </div>

          <div class="currency-input-container-block target-block-theme">
            <label class="input-label-tag">{{ $t('hero.calc.receive') }}</label>
            <div class="input-row-flex">
              <input type="number" :value="receiveAmount" class="numeric-field" readonly />
              <div class="currency-selector-badge clickable-badge">
                <span class="flag-emoji">🇳🇬</span> <strong>NGN</strong> <span class="mini-arrow">▼</span>
              </div>
            </div>
          </div>
          <router-link to="/download" class="calc-submit-btn" v-magnetic="8">
            {{ $t('hero.calc.btn') }}
          </router-link>

        </div>
      </div>

    </div>
  </section>

  <section class="marquee-section" aria-hidden="true">
    <div class="marquee-label">Trusted across 50+ countries worldwide</div>
    <div class="marquee-track">
      <div class="marquee-group">
        <span v-for="(country, index) in marqueeFlags" :key="'m1-' + index" class="marquee-flag">
          <img :src="country.flagUrl" :alt="country.name" />
        </span>
      </div>
      <div class="marquee-group">
        <span v-for="(country, index) in marqueeFlags" :key="'m2-' + index" class="marquee-flag">
          <img :src="country.flagUrl" :alt="country.name" />
        </span>
      </div>
    </div>
  </section>


  <section class="features-section">
    <div class="features-container">

      <div class="section-header-block" v-reveal>
        <h2 class="section-main-title">{{ $t('features.title') }}</h2>
        <p class="section-subtitle-text">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features-card-grid">

        <div class="feature-item-card" v-reveal="0">
          <div class="feature-icon-wrapper mint-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
          </div>
          <h3>{{ $t('features.saveTitle') }}</h3>
          <p>{{ $t('features.saveDesc') }}</p>
        </div>


        <div class="feature-item-card" v-reveal="1">
          <div class="feature-icon-wrapper blue-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
          </div>
          <h3>{{ $t('features.saveTitle') }}</h3>
          <p>{{ $t('features.saveDesc') }}</p>
        </div>

        <div class="feature-item-card" v-reveal="2">
          <div class="feature-icon-wrapper speed-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
          <h3>{{ $t('features.saveTitle') }}</h3>
          <p>{{ $t('features.saveDesc') }}</p>
        </div>


        <div class="feature-item-card" v-reveal="3">
          <div class="feature-icon-wrapper security-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
          </div>
          <h3>{{ $t('features.saveTitle') }}</h3>
          <p>{{ $t('features.saveDesc') }}</p>
        </div>

        <div class="feature-item-card" v-reveal="4">
          <div class="feature-icon-wrapper account-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <h3>{{ $t('features.saveTitle') }}</h3>
          <p>{{ $t('features.saveDesc') }}</p>
        </div>

        <div class="feature-item-card" v-reveal="5">
          <div class="feature-icon-wrapper support-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
          </div>
          <h3>{{ $t('features.saveTitle') }}</h3>
          <p>{{ $t('features.saveDesc') }}</p>
        </div>

      </div>

    </div>
  </section>


  <section class="send-from-grouped-section">
    <div class="destinations-container">

      <div class="destinations-header" v-reveal>
        <h1 class="destinations-title">Send From</h1>
      </div>

      <div class="continent-row-block" v-reveal>
        <h3 class="continent-group-title">North America</h3>
        <div class="destinations-flag-grid">
          <div v-for="(country, index) in sendFromNorthAmerica" :key="'na-sf-' + index" class="destination-badge-card" v-reveal="index % 5">
            <div class="flag-circle-frame">
              <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
            </div>
            <a href="#" class="destination-action-link">Send money from {{ country.name }}</a>
          </div>
        </div>
      </div>

      <div class="continent-row-block" v-reveal>
        <h3 class="continent-group-title">Europe</h3>
        <div class="destinations-flag-grid">
          <div v-for="(country, index) in sendFromEurope" :key="'eu-sf-' + index" class="destination-badge-card" v-reveal="index % 5">
            <div class="flag-circle-frame">
              <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
            </div>
            <a href="#" class="destination-action-link">Send money from {{ country.name }}</a>
          </div>
        </div>
      </div>

    </div>
  </section>


  <section class="spreadsheet-grouped-section">
    <div class="destinations-container">

      <div class="destinations-header" v-reveal>
        <h1 class="destinations-title">Send To</h1>
      </div>

      <div class="continent-row-block" v-reveal>
        <h3 class="continent-group-title">Africa</h3>
        <div class="destinations-flag-grid">
          <div v-for="(country, index) in spreadsheetAfrica" :key="'af-s-' + index" class="destination-badge-card" v-reveal="index % 5">
            <div class="flag-circle-frame">
              <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
            </div>
            <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
          </div>
        </div>
      </div>

      <div class="continent-row-block" v-reveal>
        <h3 class="continent-group-title">Asia</h3>
        <div class="destinations-flag-grid">
          <div v-for="(country, index) in spreadsheetAsia" :key="'as-s-' + index" class="destination-badge-card" v-reveal="index % 5">
            <div class="flag-circle-frame">
              <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
            </div>
            <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="trust-mission-section">
    <div class="trust-mission-container">
      <div class="wise-mission-banner-card" v-reveal>
        <span class="mission-graphic-float">🌍</span>
        <h2 class="mission-giant-title">Ready to send money smarter?</h2>
        <p class="mission-support-copy">Join thousands who trust Swychremit to move money across borders in seconds, with transparent fees and guaranteed rates.</p>
        <router-link to="/download" class="mission-action-pill" v-magnetic="10">Get the App</router-link>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      sendAmount: 1000,
      exchangeRate: 1485.50,
      fee: 2.99,
      receiveAmount: 0,

      countriesCount: 0,

      sendFromNorthAmerica: [
        { name: "United States of America", flagUrl: "https://flagcdn.com/w80/us.png" },
        { name: "Canada", flagUrl: "https://flagcdn.com/w80/ca.png" }
      ],

      sendFromEurope: [
        { name: "United Kingdom", flagUrl: "https://flagcdn.com/w80/gb.png" },
        { name: "Austria", flagUrl: "https://flagcdn.com/w80/at.png" },
        { name: "Belgium", flagUrl: "https://flagcdn.com/w80/be.png" },
        { name: "Bulgaria", flagUrl: "https://flagcdn.com/w80/bg.png" },
        { name: "Croatia", flagUrl: "https://flagcdn.com/w80/hr.png" },
        { name: "Cyprus", flagUrl: "https://flagcdn.com/w80/cy.png" },
        { name: "Czech Republic (Czechia)", flagUrl: "https://flagcdn.com/w80/cz.png" },
        { name: "Denmark", flagUrl: "https://flagcdn.com/w80/dk.png" },
        { name: "Estonia", flagUrl: "https://flagcdn.com/w80/ee.png" },
        { name: "Finland", flagUrl: "https://flagcdn.com/w80/fi.png" },
        { name: "France", flagUrl: "https://flagcdn.com/w80/fr.png" },
        { name: "Germany", flagUrl: "https://flagcdn.com/w80/de.png" },
        { name: "Greece", flagUrl: "https://flagcdn.com/w80/gr.png" },
        { name: "Hungary", flagUrl: "https://flagcdn.com/w80/hu.png" },
        { name: "Iceland", flagUrl: "https://flagcdn.com/w80/is.png" },
        { name: "Ireland", flagUrl: "https://flagcdn.com/w80/ie.png" },
        { name: "Italy", flagUrl: "https://flagcdn.com/w80/it.png" },
        { name: "Latvia", flagUrl: "https://flagcdn.com/w80/lv.png" },
        { name: "Liechtenstein", flagUrl: "https://flagcdn.com/w80/li.png" },
        { name: "Lithuania", flagUrl: "https://flagcdn.com/w80/lt.png" },
        { name: "Luxembourg", flagUrl: "https://flagcdn.com/w80/lu.png" },
        { name: "Malta", flagUrl: "https://flagcdn.com/w80/mt.png" },
        { name: "Monaco", flagUrl: "https://flagcdn.com/w80/mc.png" },
        { name: "Netherlands", flagUrl: "https://flagcdn.com/w80/nl.png" },
        { name: "Norway", flagUrl: "https://flagcdn.com/w80/no.png" },
        { name: "Poland", flagUrl: "https://flagcdn.com/w80/pl.png" },
        { name: "Portugal", flagUrl: "https://flagcdn.com/w80/pt.png" },
        { name: "Romania", flagUrl: "https://flagcdn.com/w80/ro.png" },
        { name: "San Marino", flagUrl: "https://flagcdn.com/w80/sm.png" },
        { name: "Slovakia", flagUrl: "https://flagcdn.com/w80/sk.png" },
        { name: "Slovenia", flagUrl: "https://flagcdn.com/w80/si.png" },
        { name: "Spain", flagUrl: "https://flagcdn.com/w80/es.png" },
        { name: "Sweden", flagUrl: "https://flagcdn.com/w80/se.png" },
        { name: "Switzerland", flagUrl: "https://flagcdn.com/w80/ch.png" },
        { name: "Vatican City", flagUrl: "https://flagcdn.com/w80/va.png" }
      ],

      spreadsheetAfrica: [
        { name: "Cameroon", flagUrl: "https://flagcdn.com/w80/cm.png" },
        { name: "Nigeria", flagUrl: "https://flagcdn.com/w80/ng.png" },
      ],

      spreadsheetAsia: [
        { name: "India", flagUrl: "https://flagcdn.com/w80/in.png" },
      ],
    };
  },
  computed: {
    marqueeFlags() {
      return [
        ...this.sendFromNorthAmerica,
        ...this.spreadsheetAfrica,
        ...this.spreadsheetAsia,
        ...this.sendFromEurope.slice(0, 9)
      ];
    }
  },
  created() {
    this.calculateConversion();
  },
  mounted() {
    this.animateCountUp('countriesCount', 50, 1200);
  },

  methods: {
    calculateConversion() {
      const netSend = this.sendAmount - this.fee;
      if (netSend > 0) {
        this.receiveAmount = parseFloat((netSend * this.exchangeRate).toFixed(2));
      } else {
        this.receiveAmount = 0;
      }
    },
    handleHeroMouseMove(e) {
      const spotlight = this.$refs.spotlight;
      if (!spotlight) return;
      const rect = this.$refs.heroSection.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      spotlight.style.setProperty('--spot-x', `${x}%`);
      spotlight.style.setProperty('--spot-y', `${y}%`);
      spotlight.style.opacity = '1';
    },
    handleHeroMouseLeave() {
      const spotlight = this.$refs.spotlight;
      if (spotlight) spotlight.style.opacity = '0';
    },
    animateCountUp(key, target, duration, decimals = 0) {
      const start = performance.now();
      const factor = Math.pow(10, decimals);
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        this[key] = Math.round(target * eased * factor) / factor;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },
  }
};
</script>

<style scoped>
.hero-split-canvas {
  width: 100%;
  min-height: calc(100vh - 75px);
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.hero-bg-decor {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.35;
}

.blob-a {
  width: 420px;
  height: 420px;
  top: -140px;
  right: -80px;
  background: radial-gradient(circle, var(--clr-purple-400), transparent 70%);
  animation: blobFloat 14s ease-in-out infinite;
}

.blob-b {
  width: 340px;
  height: 340px;
  bottom: -120px;
  left: -100px;
  background: radial-gradient(circle, var(--clr-mint-500), transparent 70%);
  animation: blobFloat 18s ease-in-out infinite reverse;
}

.blob-c {
  width: 260px;
  height: 260px;
  top: 40%;
  left: 55%;
  background: radial-gradient(circle, var(--clr-purple-600), transparent 70%);
  opacity: 0.18;
  animation: blobFloat 16s ease-in-out infinite;
}

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.08); }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(15, 23, 42, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 23, 42, 0.028) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent);
}

.cursor-spotlight {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 400ms ease;
  background: radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(123, 31, 162, 0.10), transparent 70%);
}

.currency-particle {
  position: absolute;
  font-weight: 800;
  color: var(--clr-purple-400);
  opacity: 0.16;
  font-size: 2.2rem;
  animation: currencyDrift 10s ease-in-out infinite;
  user-select: none;
}

.cp-1 { top: 12%; left: 8%; font-size: 2.6rem; animation-duration: 11s; }
.cp-2 { top: 68%; left: 5%; font-size: 1.8rem; animation-duration: 13s; animation-delay: 1s; color: var(--clr-mint-500); }
.cp-3 { top: 20%; left: 46%; font-size: 1.6rem; animation-duration: 9s; animation-delay: 2s; }
.cp-4 { top: 78%; left: 42%; font-size: 2.2rem; animation-duration: 12s; animation-delay: 0.5s; color: var(--clr-mint-500); }
.cp-5 { top: 8%; left: 88%; font-size: 2rem; animation-duration: 14s; animation-delay: 1.5s; }
.cp-6 { top: 55%; left: 92%; font-size: 1.7rem; animation-duration: 10s; animation-delay: 2.5s; }

@keyframes currencyDrift {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.14; }
  50% { transform: translateY(-22px) rotate(8deg); opacity: 0.26; }
}

@media (max-width: 992px) {
  .currency-particle {
    display: none;
  }
}

.hero-inner-layout {
  max-width: 1250px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-copy-column {
  display: flex;
  flex-direction: column;
}

.trust-pill-badge {
  align-self: flex-start;
  background-color: #7B1FA2;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  animation: pillPulse 3.2s ease-in-out infinite;
}

@keyframes pillPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(123, 31, 162, 0.35); }
  50% { box-shadow: 0 0 0 8px rgba(123, 31, 162, 0); }
}

.main-headline {
  font-size: 4rem;
  font-weight: 900;
  color: #7B1FA2;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  background: linear-gradient(100deg, var(--clr-purple-700), var(--clr-purple-500) 35%, var(--clr-mint-500) 60%, var(--clr-purple-600));
  background-size: 250% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: headlineSheen 8s ease-in-out infinite;
}

@keyframes headlineSheen {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.sub-intro-text {
  font-size: 1.25rem;
  font-weight: 500;
  color: #475569;
  line-height: 1.5;
  margin-bottom: 2.5rem;
  max-width: 540px;
}

.trust-metrics-row {
  display: flex;
  gap: 3rem;
  margin-bottom: 2.5rem;
  border-left: 3px solid #00d09c;
  padding-left: 1.5rem;
  box-shadow: -3px 0 12px -4px rgba(0, 208, 156, 0.45);
}

.metric-item {
  display: flex;
  flex-direction: column;
}

.metric-item strong {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f172a;
  font-variant-numeric: tabular-nums;
}

.metric-item span {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 600;
}

.store-links-cluster {
  display: flex;
  gap: 1rem;
}

.store-badge-img img {
  height: 40px;
  display: block;
  transition: transform var(--dur-fast) var(--ease-out-expo);
}

.store-badge-img:hover img {
  transform: translateY(-3px) scale(1.03);
}


.hero-calculator-column {
  animation: panelRise 700ms var(--ease-out-expo) both;
  animation-delay: 120ms;
}

.calculator-panel-box {
  background: #ffffff;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  transition: box-shadow var(--dur-base) ease;
}

.calculator-panel-box:hover {
  box-shadow: 0 30px 60px -12px rgba(123, 31, 162, 0.16);
}

@keyframes panelRise {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.calc-box-header {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  text-align: center;
  margin-bottom: 1.5rem;
}

.currency-input-container-block {
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 0.8rem 1.2rem;
  display: flex;
  flex-direction: column;
  transition: border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease;
}

.currency-input-container-block:focus-within {
  border-color: #00d09c;
  box-shadow: 0 0 0 4px rgba(0, 208, 156, 0.14);
}

.target-block-theme {
  background-color: #ffffff;
}

.input-label-tag {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 4px;
}

.input-row-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.numeric-field {
  border: none;
  background: transparent;
  font-size: 1.8rem;
  font-weight: 700;
  color: #0f172a;
  width: 60%;
  outline: none;
}

.currency-selector-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 6px 14px;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  transition: transform var(--dur-fast) ease;
}

.clickable-badge:hover {
  transform: translateY(-1px);
}

.target-block-theme .currency-selector-badge {
  background-color: #f1f5f9;
}

.flag-emoji { font-size: 1.2rem; }

.calculation-breakdown-flow-ladder {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.calculation-breakdown-flow-ladder::before {
  content: '';
  position: absolute;
  top: 1.5rem;
  left: 1.85rem;
  width: 2px;
  height: calc(100% - 3rem);
  background-color: #e2e8f0;
}

.ladder-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 2;
}

.step-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #cbd5e1;
}

.accent-bullet {
  background-color: #00d09c;
  box-shadow: 0 0 0 4px rgba(0, 208, 156, 0.18);
  animation: bulletGlow 2.4s ease-in-out infinite;
}

@keyframes bulletGlow {
  0%, 100% { box-shadow: 0 0 0 4px rgba(0, 208, 156, 0.18); }
  50% { box-shadow: 0 0 0 7px rgba(0, 208, 156, 0.05); }
}

.step-detail-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #64748b;
}

.step-detail-text span {
  color: #0f172a;
  font-weight: 700;
}



.calc-submit-btn {
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  box-sizing: border-box;
  padding: 16px 24px;
  margin-top: 20px;
  background-color: #8c1bc1;
  background-image: linear-gradient(135deg, var(--clr-purple-600), var(--clr-purple-500));
  color: #ffffff !important;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none !important;
  border-radius: 14px;
  border: none;
  box-shadow: 0 4px 14px rgba(140, 27, 193, 0.3);
  transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.calc-submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
  transform: skewX(-20deg);
  transition: left 650ms var(--ease-out-expo);
}

.calc-submit-btn:hover::before {
  left: 130%;
}

.calc-submit-btn:hover {
  background-color: #7916a8;
  box-shadow: 0 6px 20px rgba(140, 27, 193, 0.4);
}

@media (max-width: 992px) {
  .hero-split-canvas {
    padding: 2rem 1rem !important;
    min-height: auto;
    background-color: #f8fafc;
  }

  .hero-inner-layout {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden;
  }

  .hero-copy-column {
    align-items: center !important;
    width: 100% !important;
    padding: 0 0.5rem !important;
  }

  .main-headline {
    font-size: 2.2rem !important;
    letter-spacing: -1px !important;
    text-align: center;
    line-height: 1.2;
  }

  .sub-intro-text {
    font-size: 1rem !important;
    text-align: center;
    margin-bottom: 1.5rem !important;
    padding: 0 5px;
  }

  .trust-metrics-row {
    width: 100% !important;
    justify-content: center !important;
    gap: 1.5rem !important;
    border-left: none !important;
    border-bottom: 2px solid #e2e8f0 !important;
    padding-bottom: 1rem !important;
  }

  .store-links-cluster {
    display: flex !important;
    justify-content: center !important;
    gap: 0.8rem !important;
    width: 100% !important;
    flex-wrap: wrap;
  }

  .store-badge-img img {
    height: 36px !important;
    max-width: 130px;
  }

  .hero-calculator-column {
    width: 100% !important;
    padding: 0 !important;
  }

  .calculator-panel-box {
    width: 100% !important;
    max-width: 100% !important;
    padding: 1.5rem 1rem !important;
    border-radius: 20px !important;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.04) !important;
  }

  .numeric-field {
    font-size: 1.4rem !important;
    width: 55% !important;
  }

  .currency-selector-badge {
    padding: 6px 10px !important;
    font-size: 0.85rem !important;
  }
}

.marquee-section {
  width: 100%;
  background: linear-gradient(180deg, #fcfbfe, #ffffff);
  padding: 2.25rem 0 2.5rem;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  overflow: hidden;
}

.marquee-label {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--clr-ink-300);
  margin-bottom: 1.25rem;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 32s linear infinite;
}

.marquee-section:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding-right: 2.5rem;
}

.marquee-flag {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid var(--clr-border);
  box-shadow: var(--shadow-sm);
  opacity: 0.85;
  transition: opacity 200ms ease, transform 200ms ease;
}

.marquee-flag:hover {
  opacity: 1;
  transform: scale(1.12);
}

.marquee-flag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

.features-section {
  width: 100%;
  background-color: #ffffff;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
}

.features-container {
  max-width: 1250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header-block {
  text-align: center;
  max-width: 700px;
  margin-bottom: 4.5rem;
}

.section-main-title {
  font-size: 2.5rem;
  font-weight: 800;
  color:  #7B1FA2;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle-text {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 500;
  line-height: 1.6;
}


.features-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem 2rem;
  width: 100%;
}

.feature-item-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid #f1f5f9;
  transition: transform 320ms var(--ease-out-expo), box-shadow 320ms var(--ease-out-expo), border-color 320ms ease;
}

.feature-item-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  border-color: #e2e8f0;
}

.feature-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 320ms var(--ease-out-expo);
}

.feature-item-card:hover .feature-icon-wrapper {
  transform: scale(1.12) rotate(-6deg);
}

.f-svg {
  width: 24px;
  height: 24px;
}

.mint-theme { background-color: #e2fef7; }
.mint-theme .f-svg { fill: #00d09c; }

.blue-theme { background-color: #e0f2fe; }
.blue-theme .f-svg { fill: #0284c7; }

.speed-theme { background-color: #fef3c7; }
.speed-theme .f-svg { fill: #d97706; }

.security-theme { background-color: #ede9fe; }
.security-theme .f-svg { fill: #7c3aed; }

.account-theme { background-color: #dbeafe; }
.account-theme .f-svg { fill: #2563eb; }

.support-theme { background-color: #fce7f3; }
.support-theme .f-svg { fill: #db2777; }

.feature-item-card:has(.mint-theme):hover { border-color: #b6f5e3; box-shadow: 0 20px 45px rgba(0, 208, 156, 0.18); }
.feature-item-card:has(.blue-theme):hover { border-color: #bce4fb; box-shadow: 0 20px 45px rgba(2, 132, 199, 0.18); }
.feature-item-card:has(.speed-theme):hover { border-color: #fbe3a8; box-shadow: 0 20px 45px rgba(217, 119, 6, 0.18); }
.feature-item-card:has(.security-theme):hover { border-color: #d9cffb; box-shadow: 0 20px 45px rgba(124, 58, 237, 0.18); }
.feature-item-card:has(.account-theme):hover { border-color: #bcd7fb; box-shadow: 0 20px 45px rgba(37, 99, 235, 0.18); }
.feature-item-card:has(.support-theme):hover { border-color: #f9c9e2; box-shadow: 0 20px 45px rgba(219, 39, 119, 0.18); }

.feature-item-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color:  #7B1FA2;
  margin-bottom: 0.75rem;
}

.feature-item-card p {
  font-size: 0.95rem;
  font-weight: 500;
  color: #64748b;
  line-height: 1.6;
}


@media (max-width: 992px) {
  .features-section {
    padding: 4rem 1.2rem;
  }

  .section-header-block {
    margin-bottom: 3rem;
  }

  .section-main-title {
    font-size: 1.85rem;
    letter-spacing: -0.5px;
  }

  .section-subtitle-text {
    font-size: 1rem;
  }

  .features-card-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem;
  }

  .feature-item-card {
    padding: 1.5rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .feature-icon-wrapper {
    margin-bottom: 1rem;
  }
}


.send-from-grouped-section {
  width: 100%;
  background-color: #fcfbfe;
  padding: 4rem 2rem 6rem 2rem;
  display: flex;
  justify-content: center;
}

.send-from-grouped-section .destinations-container {
  max-width: 1200px;
  width: 100%;
}

.send-from-grouped-section .destinations-title{
  color: #7B1FA2;
  font-weight: 700;
   font-size: 3rem;
    letter-spacing: 0.5rem;
}

.send-from-grouped-section .continent-row-block {
  margin-top: 3.5rem;
  width: 100%;
  text-align: left;
}

.send-from-grouped-section .continent-group-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #7B1FA2;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f1f0f4;
  padding-bottom: 0.5rem;
}

.send-from-grouped-section .destinations-flag-grid {
  display: grid !important;
  grid-template-columns: repeat(5, 1fr) !important;
  gap: 2rem;
  width: 100%;
}

.destination-badge-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 260ms var(--ease-out-expo);
}

.destination-badge-card:hover {
  transform: translateY(-3px);
}

.flag-circle-frame {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid var(--clr-border);
  box-shadow: var(--shadow-sm);
  transition: transform 260ms var(--ease-out-expo), box-shadow 260ms ease;
}

.destination-badge-card:hover .flag-circle-frame {
  transform: scale(1.1);
  box-shadow: 0 8px 18px rgba(123, 31, 162, 0.18);
}

.native-flag-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.destination-action-link {
  color: var(--clr-ink-500);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: color 200ms ease;
}

.destination-badge-card:hover .destination-action-link {
  color: var(--clr-purple-600);
}


@media (max-width: 992px) {
  .send-from-grouped-section .destinations-flag-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 600px) {
  .send-from-grouped-section {
    padding: 2rem 1rem !important;
  }
  .send-from-grouped-section .continent-group-title {
    text-align: center;
    font-size: 1.4rem;
  }
  .send-from-grouped-section .destinations-flag-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem !important;
  }
  .send-from-grouped-section .destination-badge-card {
    flex-direction: column !important;
    text-align: center !important;
  }
}


.spreadsheet-grouped-section {
  width: 100%;
  background-color: #ffffff;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.spreadsheet-grouped-section .destinations-container {
  max-width: 1200px;
  width: 100%;
}

.spreadsheet-grouped-section .destinations-title{
    color: #7B1FA2;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
}

.continent-row-block {
  margin-top: 3.5rem;
  width: 100%;
  text-align: left;
}
.spreadsheet-grouped-section .continent-group-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #7B1FA2;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f5f5f5;
  padding-bottom: 0.5rem;
}

.continent-row-block .destinations-flag-grid {
  display: grid !important;
  grid-template-columns: repeat(5, 1fr) !important;
  gap: 2rem;
  width: 100%;
}

/* Responsive Overrides */
@media (max-width: 992px) {
  .continent-row-block .destinations-flag-grid { grid-template-columns: repeat(3, 1fr) !important; }
}
@media (max-width: 600px) {
  .spreadsheet-grouped-section { padding: 2rem 1rem !important; }
  .spreadsheet-grouped-section .continent-group-title { text-align: center; }
  .continent-row-block .destinations-flag-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
  .spreadsheet-grouped-section .destination-badge-card { flex-direction: column !important; text-align: center !important; }
}



.trust-mission-section {
  width: 100%;
  background-color: #ffffff;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
}

.trust-mission-container {
  max-width: 1250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.wise-mission-banner-card {
  width: 100%;
  height: 93%;
  background: linear-gradient(135deg, var(--clr-purple-700), var(--clr-purple-600) 55%, var(--clr-purple-500));
  border-radius: 32px;
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wise-mission-banner-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(255,255,255,0.14), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(0,208,156,0.22), transparent 45%);
  pointer-events: none;
}

.mission-graphic-float {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  animation: floatBounce 4s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes floatBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.mission-giant-title {
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -2px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.mission-support-copy {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  max-width: 650px;
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
}

.mission-action-pill {
  background-color: #ffffff;
  color:  #7B1FA2;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: transform 220ms var(--ease-out-expo), box-shadow 220ms ease;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 24px rgba(0,0,0,0.15);
}

.mission-action-pill:hover {
  box-shadow: 0 16px 34px rgba(0,0,0,0.2);
}


@media (max-width: 992px) {
  .trust-mission-section {
    padding: 4rem 1.2rem;
  }

  .trust-mission-container {
    gap: 3.5rem;
  }


  .wise-mission-banner-card {
    padding: 3.5rem 1.5rem;
    border-radius: 24px;
  }

  .mission-giant-title {
    font-size: 2.2rem;
    letter-spacing: -1px;
  }

  .mission-support-copy {
    font-size: 1rem;
  }
}

</style>
