<template>
  <section class="hero-split-canvas">
    <div class="hero-inner-layout">
      
  
      <div class="hero-copy-column">
        <div class="trust-pill-badge">⚡ Real-time secure financial network transfers</div>
        <h1 class="main-headline">Send money globally for less</h1>
        <p class="sub-intro-text">
          Move your money where it matters. Save on cross-border bills, family support, or business expansions with guaranteed low fees and institutional exchange rates.
        </p>

        <div class="trust-metrics-row">
          <div class="metric-item">
            <strong>140+</strong>
            <span>Supported Countries</span>
          </div>
          <div class="metric-item">
            <strong>4.8 ★</strong>
            <span>App Store Rating</span>
          </div>
        </div>

        <div class="store-links-cluster">
          <a href="#" class="store-badge-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
          </a>
          <a href="#" class="store-badge-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
          </a>
        </div>
      </div>

   
      <div class="hero-calculator-column">
        <div class="calculator-panel-box">
          
      
          <div class="calc-box-header">
            <span class="lock-icon">🔒</span> 
          </div>

          <div class="currency-input-container-block">
            <label class="input-label-tag">You send exactly</label>
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
            <label class="input-label-tag">Recipient gets</label>
            <div class="input-row-flex">
              <input type="number" :value="receiveAmount" class="numeric-field" readonly />
              <div class="currency-selector-badge clickable-badge">
                <span class="flag-emoji">🇳🇬</span> <strong>NGN</strong> <span class="mini-arrow">▼</span>
              </div>
            </div>
          </div>

          <button class="primary-calc-cta-btn">Download the App to get started</button>

        </div>
      </div>

    </div>
  </section>


  <section class="features-section">
    <div class="features-container">
      

      <div class="section-header-block">
        <h2 class="section-main-title">Why millions trust SwyChr Remit</h2>
        <p class="section-subtitle-text">Take control of your cross-border money transfers with lower fees, absolute security, and lightning-fast delivery.</p>
      </div>


      <div class="features-card-grid">
        
     
        <div class="feature-item-card">
          <div class="feature-icon-wrapper mint-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
          </div>
          <h3>Save on global fees</h3>
          <p>Send more money back home to anyone at a guaranteed fraction of the cost of traditional banks, with zero hidden surprises.</p>
        </div>

      
        <div class="feature-item-card">
          <div class="feature-icon-wrapper blue-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
          </div>
          <h3>Options at your fingertips</h3>
          <p>Choose exactly how your recipient gets their money: direct to bank accounts, local mobile money wallets, or instant cash pickup hubs.</p>
        </div>

        <div class="feature-item-card">
          <div class="feature-icon-wrapper speed-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
          <h3>Instant execution delivery</h3>
          <p>Enjoy blazing-fast financial routing ecosystems. Most of our global corridor transfers are processed and delivered in minutes.</p>
        </div>

      
        <div class="feature-item-card">
          <div class="feature-icon-wrapper security-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
          </div>
          <h3>Protected bank custody</h3>
          <p>We use rigorous 2-factor authentication, dedicated anti-fraud units, and safeguard your money inside established, licensed financial institutions.</p>
        </div>

        <div class="feature-item-card">
          <div class="feature-icon-wrapper account-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <h3>Onboard in minutes</h3>
          <p>Skip lines completely. Link your preferred payment method, verify your identity safely via our app, and start sending right away.</p>
        </div>

        <div class="feature-item-card">
          <div class="feature-icon-wrapper support-theme">
            <svg viewBox="0 0 24 24" class="f-svg"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
          </div>
          <h3>Human support around the clock</h3>
          <p>Our client service teams are online and available to chat 24/7 inside the app or via call lines whenever you need real-time assistance.</p>
        </div>

      </div>

    </div>
  </section>
<section class="destinations-section">
    <div class="destinations-container">
      
      <div class="destinations-header">
        <h2 class="destinations-title">SwyChr Remit works nearly everywhere</h2>
        <button class="view-all-corridors-btn">Send money</button>
      </div>

      <div class="destinations-flag-grid">
        <div v-for="(country, index) in sendFromCountries" :key="'sf-' + index" class="destination-badge-card">
          <div class="flag-circle-frame">
            <img :src="country.flagUrl" :alt="country.name + ' asset'" class="native-flag-img" />
          </div>
          <a href="#" class="destination-action-link">Send Money from {{ country.name }}</a>
        </div>
      </div>

    </div>
  </section>

  <section class="secondary-destinations-section">
  <div class="destinations-container">
    
    <div class="destinations-header">
      <h2 class="destinations-title">Global Dynamic Corridors</h2>
    </div>

    <div class="destinations-flag-grid">
      <div v-for="(country, index) in customCorridorsList" :key="'cc-' + index" class="destination-badge-card">
        <div class="flag-circle-frame">
          <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
        </div>
        <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
      </div>
    </div>

  </div>
</section>

  <section class="trust-mission-section">
    <div class="trust-mission-container">

      <div class="wise-mission-banner-card">
        <div class="mission-graphic-float">🌍✨</div>
        <h2 class="mission-giant-title">MEET MONEY<br>WITHOUT BORDERS</h2>
        <p class="mission-support-copy">We're building the best way to move, manage, and scale your financial assets across continents. Minimum fees. Maximum ease. Full speed.</p>
        <button class="mission-action-pill">Learn about our mission</button>
      </div>

    </div>
  </section>

<footer class="site-footer" @click="closeRegionDropdown">
      <div class="footer-container">
        <div class="footer-links-grid">
          <div class="footer-column">
            <h3 class="column-title">LEGAL</h3>
            <ul class="link-list">
              <li><a href="#">Customer Complaints</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3 class="column-title">COMPANY</h3>
            <ul class="link-list">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Countries</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3 class="column-title">SUPPORT</h3>
            <ul class="link-list">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">SwyChr Wallet FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <hr class="footer-divider-line" />

        <div class="region-selection-row">
          <span class="region-heading-label">CHOOSE YOUR REGION</span>
          <div class="custom-select-wrapper" @click.stop>
            <button class="select-dropdown-trigger" @click="toggleRegionDropdown">
              {{ selectedRegion }} <span class="dropdown-carat">{{ isRegionOpen ? '▲' : '▼' }}</span>
            </button>
            <div class="region-options-panel" v-if="isRegionOpen">
              <div class="region-option-item active-region" @click="selectRegion('International')">
                <span class="globe-menu-icon">🌐</span>
                <p class="region-text-main">International <span class="lang-subtext">English</span></p>
              </div>
              <div class="region-panel-heading">Countries</div>
              <div class="region-option-item" @click="selectRegion('Brazil')">
                <img src="https://flagcdn.com/w40/br.png" alt="Brazil" class="dropdown-flag-img" />
                <p class="region-text-main">Brazil</p>
              </div>
              <div class="region-option-item" @click="selectRegion('Canada (EN)')">
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" class="dropdown-flag-img" />
                <p class="region-text-main">Canada <span class="lang-subtext">English</span></p>
              </div>
              <div class="region-option-item" @click="selectRegion('Canada (FR)')">
                <img src="https://flagcdn.com/w40/ca.png" alt="Canada" class="dropdown-flag-img" />
                <p class="region-text-main">Canada <span class="lang-subtext">Français</span></p>
              </div>
            </div>
          </div>
        </div>

        <div class="social-links-row">
          <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fweb.facebook.com%2Fswychrglobal&_rdc=1&_rdr#" aria-label="Facebook" class="social-svg-link">
            <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
          </a>
          <a href="https://x.com/swychrglobal?mx=2" aria-label="Twitter" class="social-svg-link">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.instagram.com/swychrglobal" aria-label="Instagram" class="social-svg-link">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/swychrglobal/?viewAsMember=true" aria-label="LinkedIn" class="social-svg-link">
            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://youtube.com/@swychr5767?si=klYIO2TkTMFBq-fi" aria-label="YouTube" class="social-svg-link">
            <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>

        <div class="footer-compliance-wrapper">
          <div class="compliance-text-block">
            <p class="legal-notice-paragraph">
              © SwyChr Remit Corp. SwyChr Remit Corp. DBA SwyChr is licensed as a Money Transmitter by the New York State Department of Financial Services and in Puerto Rico (TM-055), a Foreign Transmittal Agency in Massachusetts, and a Currency Transmitter in Rhode Island. NMLS No. 1179663
            </p>
            <p class="legal-notice-paragraph">
              2093 Philadelphia Pike #1016, Claymont, DE 19703, USA
            </p>
            <p class="legal-notice-paragraph clickable-disclosure">
              For additional licensure information and disclosures, please visit
            </p>
          </div>
          <div class="footer-attribution-brand">
            <div class="yellow-brand-glyph">S</div>
            <span class="copyright-date-stamp">© SwyChr 2026</span>
          </div>
        </div>
      </div>
    </footer>

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
      isRegionOpen: false,
      selectedRegion: "International",


      sendFromCountries: [
        { name: "North America", flagUrl: "https://flagcdn.com/w80/un.png" },
        { name: "United States of America", flagUrl: "https://flagcdn.com/w80/us.png" },
        { name: "Canada", flagUrl: "https://flagcdn.com/w80/ca.png" },
        { name: "Europe", flagUrl: "https://flagcdn.com/w80/eu.png" },
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
      ]
    };
  },
customCorridorsList: [
  { name: "North America", flagUrl: "https://flagcdn.com/w80/un.png" }, // Unified Global icon
  { name: "Canada", flagUrl: "https://flagcdn.com/w80/ca.png" },
  { name: "South America", flagUrl: "https://flagcdn.com/w80/un.png" }, // Unified Global icon
  { name: "Brazil", flagUrl: "https://flagcdn.com/w80/br.png" },
  { name: "Asia", flagUrl: "https://flagcdn.com/w80/un.png" },          // Unified Global icon
  { name: "India", flagUrl: "https://flagcdn.com/w80/in.png" },
  { name: "Philippines", flagUrl: "https://flagcdn.com/w80/ph.png" },
  { name: "Europe", flagUrl: "https://flagcdn.com/w80/eu.png" },         // European Union flag
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
  created() {
    this.calculateConversion();
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
    toggleRegionDropdown() {
      this.isRegionOpen = !this.isRegionOpen;
    },
    selectRegion(regionName) {
      this.selectedRegion = regionName;
      this.isRegionOpen = false;
    },
    closeRegionDropdown() {
      this.isRegionOpen = false;
    }
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
}

.hero-inner-layout {
  max-width: 1250px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
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
}

.main-headline {
  font-size: 4rem;
  font-weight: 900;
  color: #7B1FA2;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
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
}

.metric-item {
  display: flex;
  flex-direction: column;
}

.metric-item strong {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f172a;
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
  transition: border-color 0.2s;
}

.currency-input-container-block:focus-within {
  border-color: #00d09c;
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

.accent-bullet { background-color: #00d09c; }

.step-detail-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #64748b;
}

.step-detail-text span {
  color: #0f172a;
  font-weight: 700;
}

.primary-calc-cta-btn {
  width: 100%;
  padding: 1.2rem;
  background-color: #7B1FA2; 
  color: #ffffff;
  font-weight: 700;
  font-size: 1.05rem;
  border: none;
  border-radius: 16px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.primary-calc-cta-btn:hover {
  background-color: #0f172a;
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

.features-section {
  width: 100%;
  background-color: #ffffff;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid #f1f5f9;
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
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04);
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

.destinations-section {
  width: 100%;
  background-color: #f8fafc;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
}

.destinations-container {
  max-width: 1250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem; /* Tighter padding flow consistent with corporate listings viewports */
}

.destinations-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.destinations-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #7B1FA2; 
  letter-spacing: -1.5px;
}

.view-all-corridors-btn {
  background-color:#7B1FA2;  /* Soft green high-visibility token action badge */
  border: none;
  color: #ffffff;
  padding: 0.75rem 1.8rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 24px;
  cursor: pointer;
}

/* Continent Category Divider Blocks */
.continent-directory-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.continent-group-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #334155;
  padding-bottom: 0.6rem;
}

/* 🚨 EXACT LOOK: Standardized 5-column desktop directory layout frame matching the target layout */
.destinations-flag-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 3rem 1.5rem;
  width: 100%;
}

.destination-badge-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
}

.flag-circle-frame {
  width: 68px; /* Slightly larger dimensions matching your close-up reference precisely */
  height: 68px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
  flex-shrink: 0;
}

.native-flag-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destination-action-link {
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  text-decoration: underline; /* Forces hard anchor underlines on default layout views */
  line-height: 1.4;
  transition: color 0.15s ease;
}

.destination-action-link:hover {
  color: #00d09c;
}

/* Mobile responsive fallback safety rules hooks remaining cleanly sandboxed */
@media (max-width: 1024px) {
  .destinations-flag-grid { grid-template-columns: repeat(3, 1fr) !important; }
}
@media (max-width: 768px) {
  .destinations-title { font-size: 2rem !important; }
  .destinations-flag-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem 1rem !important; }
  .flag-circle-frame { width: 52px !important; height: 52px !important; }
  .destination-action-link { font-size: 0.9rem !important; }
}

.additional-destinations-section {
  width: 100%;
  background-color: #ffffff; /* Alternates cleanly with the soft gray upper layout section */
  padding: 4rem 2rem 6rem 2rem;
  display: flex;
  justify-content: center;
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
  background-color: #7B1FA2; 
  border-radius: 32px;
  padding: 3rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mission-graphic-float {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  animation: floatBounce 4s ease-in-out infinite;
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
}

.mission-support-copy {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  max-width: 650px;
  line-height: 1.2;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.mission-action-pill {
  background-color: #ffffff; 
  color:  #7B1FA2;;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.mission-action-pill:hover {
  background-color: #24355a;
  color: #000000;
  transform: translateY(-1px);
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


.site-footer {
  width: 100%;
  background-color: #7B1FA2; 
  padding: 5rem 2rem 4rem 2rem;
  display: flex;
  justify-content: center;
}

.footer-container {
  max-width: 1250px;
  width: 100%;
  display: flex;
  flex-direction: column;
}


.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.column-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.5px;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #ffffff; 
  margin-bottom: 1.25rem;
  max-width: 90%;
}

.link-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.link-list a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  opacity: 0.9;
  transition: opacity 0.15s ease;
}

.link-list a:hover {
  opacity: 1;
  text-decoration: underline;
}


.footer-divider-line {
  border: none;
  border-top: 1.5px solid #ffffff;
  margin: 4rem 0 3rem 0;
  opacity: 0.8;
}


.region-selection-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.region-heading-label {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.select-dropdown-trigger {
  background: transparent;
  border: 1.5px solid #ffffff;
  color: #ffffff;
  padding: 0.65rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dropdown-carat {
  font-size: 0.65rem;
}


.social-links-row {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.social-links-row a {
  text-decoration: none;
  transition: transform 0.15s ease;
}

.social-links-row a:hover {
  transform: scale(1.15);
}

.soc-icon {
  font-size: 1.35rem;
  font-style: normal;
}


.footer-compliance-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4rem;
}

.compliance-text-block {
  max-width: 850px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.legal-notice-paragraph {
  font-size: 0.88rem;
  color: #ffffff;
  line-height: 1.5;
  opacity: 0.85;
  font-weight: 500;
}

.clickable-disclosure {
  text-decoration: underline;
  cursor: pointer;
}


.footer-attribution-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-bottom: 5px;
}

.yellow-brand-glyph {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff; 
  letter-spacing: -2px;
  line-height: 1;
}

.copyright-date-stamp {
  font-size: 0.85rem;
  color: #ffffff;
  font-weight: 600;
  opacity: 0.9;
  white-space: nowrap;
}


.site-footer {
  width: 100%;
  background-color: #7B1FA2;
  padding: 5rem 2rem 4rem 2rem;
  display: flex;
  justify-content: center;
}
.footer-container { max-width: 1250px; width: 100%; display: flex; flex-direction: column; }
.footer-links-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; width: 100%; }
.column-title {
  font-size: 1.35rem; font-weight: 800; color: #ffffff; letter-spacing: 0.5px; padding-bottom: 0.75rem;
  border-bottom: 2px solid #ffffff; margin-bottom: 1.25rem; max-width: 90%;
}
.link-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
.link-list a { color: #ffffff; text-decoration: none; font-size: 1.05rem; font-weight: 500; opacity: 0.9; }
.link-list a:hover { opacity: 1; text-decoration: underline; }
.footer-divider-line { border: none; border-top: 1.5px solid #ffffff; margin: 4rem 0 3rem 0; opacity: 0.8; }
.region-selection-row { display: flex; align-items: center; gap: 1.25rem; margin-bottom: 2rem; }
.region-heading-label { font-size: 1.5rem; font-weight: 800; color: #ffffff; }
.custom-select-wrapper { position: relative; }
.select-dropdown-trigger {
  background: transparent; border: 1.5px solid #ffffff; color: #ffffff; padding: 0.65rem 1.5rem;
  font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 12px;
}
.region-options-panel {
  position: absolute; bottom: 125%; left: 0; background-color: #ffffff; border-radius: 6px;
  width: 250px; box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2); padding: 0.5rem 0; z-index: 1200; display: flex; flex-direction: column;
}
.region-panel-heading { font-size: 0.85rem; font-weight: 700; color: #64748b; padding: 0.6rem 1.2rem; background-color: #f8fafc; }
.region-option-item { display: flex; align-items: center; gap: 12px; padding: 0.75rem 1.2rem; cursor: pointer; }
.region-option-item:hover { background-color: #f1f5f9; }
.active-region { border-right: 4px solid #7c3aed; }
.dropdown-flag-img { width: 20px; height: 14px; object-fit: cover; }
.region-text-main { font-size: 0.95rem; font-weight: 700; color: #1e293b; }
.lang-subtext { font-weight: 500; color: #94a3b8; margin-left: 4px; }


.social-links-row { display: flex; gap: 1.25rem; margin-bottom: 3rem; }
.social-svg-link { width: 24px; height: 24px; display: inline-block; }
.social-svg-link svg { width: 100%; height: 100%; fill: #ffffff !important; transition: transform 0.2s; }
.social-svg-link:hover svg { fill: #facc15 !important; transform: translateY(-2px); }

.footer-compliance-wrapper { display: flex; justify-content: space-between; align-items: flex-end; gap: 4rem; }
.compliance-text-block { max-width: 850px; display: flex; flex-direction: column; gap: 1.2rem; }
.legal-notice-paragraph { font-size: 0.88rem; color: #ffffff; line-height: 1.5; opacity: 0.85; }
.footer-attribution-brand { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.yellow-brand-glyph { font-size: 2.5rem; font-weight: 900; color: #ffffff !important; }
.copyright-date-stamp { font-size: 0.85rem; color: #ffffff; white-space: nowrap; }


@media (max-width: 992px) {
  .hero-split-canvas, .features-section, .destinations-section, .trust-mission-section { padding: 2.5rem 1rem !important; }
  .hero-inner-layout, .features-card-grid, .destinations-flag-grid, .testimonial-slider-box { grid-template-columns: 1fr !important; gap: 2rem !important; }
  .main-headline { font-size: 2.2rem !important; text-align: center; }
  .section-main-title, .destinations-title, .reviews-title { font-size: 1.8rem !important; text-align: center; }
  .destinations-header, .reviews-header-block { flex-direction: column !important; text-align: center !important; }
  .store-links-cluster, .store-ratings-flex { justify-content: center !important; }
  .calculator-panel-box, .feature-item-card, .destination-badge-card { max-width: 100% !important; width: 100% !important; }
  

  .site-footer { padding: 3.5rem 1.25rem 3rem 1.25rem !important; }
  .footer-container { width: 100% !important; padding: 0 5px !important; }
  .footer-links-grid { grid-template-columns: 1fr !important; gap: 2.2rem !important; }
  .footer-column { text-align: left !important; align-items: flex-start !important; }
  .column-title { max-width: 100% !important; font-size: 1.2rem !important; }
  .region-selection-row { flex-direction: column !important; align-items: flex-start !important; gap: 0.85rem !important; }
  .select-dropdown-trigger, .region-options-panel { width: 100% !important; }
  .social-links-row { justify-content: flex-start !important; gap: 1.5rem !important; }
  .footer-compliance-wrapper { flex-direction: column !important; align-items: flex-start !important; text-align: left !important; gap: 2.5rem !important; }
  .footer-attribution-brand { align-self: flex-start !important; align-items: flex-start !important; }
}
</style>