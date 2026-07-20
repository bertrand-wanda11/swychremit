<template>
  <section class="hero-split-canvas">
    <div class="hero-inner-layout">
      <div class="hero-copy-column">
        <div class="trust-pill-badge">⚡ Real-time secure financial network transfers</div>
        <h1 class="main-headline">Send money globally for less</h1>
        <p class="sub-intro-text">
          Move your money where it matters. Save on cross-border bills, family support, or business
           expansions with guaranteed low fees and institutional exchange rates.
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

                   <a 
  href="https://swychr.com/download" 
  target="_blank" 
  rel="noopener" 
  class="primary-calc-cta-btn"
>
  <span></span> Download the App to get started
</a>
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


  <section class="send-from-grouped-section">
  <div class="destinations-container">
    
    <div class="destinations-header">
      <h1 class="destinations-title">Send From</h1>
    </div>

    <div class="continent-row-block">
      <h3 class="continent-group-title">North America</h3>
      <div class="destinations-flag-grid">
        <div v-for="(country, index) in sendFromNorthAmerica" :key="'na-sf-' + index" class="destination-badge-card">
          <div class="flag-circle-frame">
            <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
          </div>
          <a href="#" class="destination-action-link">Send money from {{ country.name }}</a>
        </div>
      </div>
    </div>

    <div class="continent-row-block">
      <h3 class="continent-group-title">Europe</h3>
      <div class="destinations-flag-grid">
        <div v-for="(country, index) in sendFromEurope" :key="'eu-sf-' + index" class="destination-badge-card">
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
    
    <div class="destinations-header">
      <h1 class="destinations-title">Send To</h1>
    </div>

    <div class="continent-row-block">
      <h3 class="continent-group-title">Africa</h3>
      <div class="destinations-flag-grid">
        <div v-for="(country, index) in spreadsheetAfrica" :key="'af-s-' + index" class="destination-badge-card">
          <div class="flag-circle-frame">
            <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
          </div>
          <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
        </div>
      </div>
    </div>

    <div class="continent-row-block">
      <h3 class="continent-group-title">North America</h3>
      <div class="destinations-flag-grid">
        <div v-for="(country, index) in spreadsheetNorthAmerica" :key="'na-s-' + index" class="destination-badge-card">
          <div class="flag-circle-frame">
            <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
          </div>
          <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
        </div>
      </div>
    </div>

    <div class="continent-row-block">
      <h3 class="continent-group-title">South America</h3>
      <div class="destinations-flag-grid">
        <div v-for="(country, index) in spreadsheetSouthAmerica" :key="'sa-s-' + index" class="destination-badge-card">
          <div class="flag-circle-frame">
            <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
          </div>
          <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
        </div>
      </div>
    </div>

    <div class="continent-row-block">
      <h3 class="continent-group-title">Asia</h3>
      <div class="destinations-flag-grid">
        <div v-for="(country, index) in spreadsheetAsia" :key="'as-s-' + index" class="destination-badge-card">
          <div class="flag-circle-frame">
            <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
          </div>
          <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
        </div>
      </div>
    </div>

    <div class="continent-row-block">
      <h3 class="continent-group-title">Europe</h3>
      <div class="destinations-flag-grid">
        <div v-for="(country, index) in spreadsheetEurope" :key="'eu-s-' + index" class="destination-badge-card">
          <div class="flag-circle-frame">
            <img :src="country.flagUrl" :alt="country.name + ' flag'" class="native-flag-img" />
          </div>
          <a href="#" class="destination-action-link">Send money to {{ country.name }}</a>
        </div>
      </div>
    </div>

  </div>
</section>
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
  


  sendFromNorthAmerica: [
        { name: "United States of America", flagUrl: "https://flagcdn.com/w80/us.png" },
        { name: "Canada", flagUrl: "https://flagcdn.com/w80/ca.png" }
      ],

      // 🇪🇺 Send From - Europe Array
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
        { name: "Benin", flagUrl: "https://flagcdn.com/w80/bj.png" },
        { name: "Botswana", flagUrl: "https://flagcdn.com/w80/bw.png" },
        { name: "Burkina Faso", flagUrl: "https://flagcdn.com/w80/bf.png" },
        { name: "Burundi", flagUrl: "https://flagcdn.com/w80/bi.png" },
        { name: "Cameroon", flagUrl: "https://flagcdn.com/w80/cm.png" },
        { name: "Congo Brazzaville", flagUrl: "https://flagcdn.com/w80/cg.png" },
        { name: "Democratic Republic of Congo", flagUrl: "https://flagcdn.com/w80/cd.png" },
        { name: "Gabon", flagUrl: "https://flagcdn.com/w80/ga.png" },
        { name: "Ghana", flagUrl: "https://flagcdn.com/w80/gh.png" },
        { name: "Guinea Bissau", flagUrl: "https://flagcdn.com/w80/gw.png" },
        { name: "Guinea Conakry", flagUrl: "https://flagcdn.com/w80/gn.png" },
        { name: "Ivory Coast", flagUrl: "https://flagcdn.com/w80/ci.png" },
        { name: "Kenya", flagUrl: "https://flagcdn.com/w80/ke.png" },
        { name: "Liberia", flagUrl: "https://flagcdn.com/w80/lr.png" },
        { name: "Madagascar", flagUrl: "https://flagcdn.com/w80/mg.png" },
        { name: "Malawi", flagUrl: "https://flagcdn.com/w80/mw.png" },
        { name: "Mali", flagUrl: "https://flagcdn.com/w80/ml.png" },
        { name: "Mozambique", flagUrl: "https://flagcdn.com/w80/mz.png" },
        { name: "Namibia", flagUrl: "https://flagcdn.com/w80/na.png" },
        { name: "Niger", flagUrl: "https://flagcdn.com/w80/ne.png" },
        { name: "Nigeria", flagUrl: "https://flagcdn.com/w80/ng.png" },
        { name: "Rwanda", flagUrl: "https://flagcdn.com/w80/rw.png" },
        { name: "Senegal", flagUrl: "https://flagcdn.com/w80/sn.png" },
        { name: "South Africa", flagUrl: "https://flagcdn.com/w80/za.png" },
        { name: "Tanzania", flagUrl: "https://flagcdn.com/w80/tz.png" },
        { name: "Togo", flagUrl: "https://flagcdn.com/w80/tg.png" },
        { name: "Uganda", flagUrl: "https://flagcdn.com/w80/ug.png" },
        { name: "Zambia", flagUrl: "https://flagcdn.com/w80/zm.png" },
        { name: "Zimbabwe", flagUrl: "https://flagcdn.com/w80/zw.png" }
      ],

      // 🗺️ North America Group
      spreadsheetNorthAmerica: [
        { name: "Canada", flagUrl: "https://flagcdn.com/w80/ca.png" }
      ],

      // 🌎 South America Group
      spreadsheetSouthAmerica: [
        { name: "Brazil", flagUrl: "https://flagcdn.com/w80/br.png" }
      ],

      // 🌏 Asia Group
      spreadsheetAsia: [
        { name: "India", flagUrl: "https://flagcdn.com/w80/in.png" },
        { name: "Philippines", flagUrl: "https://flagcdn.com/w80/ph.png" }
      ],

      // 🇪🇺 Europe Group
      spreadsheetEurope: [
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

</style>