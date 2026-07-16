<template>
<footer class="site-footer" @click="closeRegionDropdown">
      <div class="footer-container">
        <div class="footer-links-grid">
          <div class="footer-column">
            <h3 class="column-title">LEGAL</h3>
            <ul class="link-list">
              <li><a href="#">Customer Complaints</a></li>
              <li><router-link to="/terms">Terms & Conditions</router-link></li>
              <li><router-link to="/privacy">Privacy Policy</router-link></li>
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
          <h2 class="legal-disclaimer-title">Legal Disclaimer:</h2>
          
          <p class="legal-notice-paragraph">
            Swychremit is an online platform owned and operated by Swychr Technology USA LLC. Swychr Technology USA LLC is a technology company and software provider; it is not a licensed bank, money transmitter, or financial institution. Swychremit does not accept, hold, custody, or transmit fiat currency or customer funds. All financial transactions, foreign exchange executions, on-ramping, custody, and regional payout (off-ramping) services are provided exclusively by independent, third-party regulated and licensed financial institutions and payment service providers in their respective jurisdictions. Swychremit utilizes blockchain technology and stablecoin (USDC) architecture strictly for backend cross-border routing efficiency. Availability of services is subject to local regulatory restrictions and successful compliance screening by our licensed partners.
          </p>

        </div>
      </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: "FooterView",
  data() {
    return {
      isRegionOpen: false,
      selectedRegion: "International"
    };
  },
  methods: {
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


<style>   
.legal-disclaimer-title{
  color: #ffffff;
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
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.legal-notice-paragraph {
  width: 1500px;
  font-size: 3rem;
  color: #ffffff;
  line-height: 1.5;
  opacity: 0.85;
  font-weight: 700;
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