<template>
  <div class="privacy-page">
    <header class="privacy-hero">
      <div class="privacy-hero-container">
        <span class="privacy-tagline">Data Protection</span>
        <h1 class="privacy-main-title">PRIVACY POLICY</h1>
        <p class="privacy-update-date">Last Updated: July 14, 2026</p>
      </div>
    </header>

    <main class="privacy-split-container">
      
      <aside class="privacy-sidebar-nav">
        <div class="sticky-wrapper">
          <h4 class="nav-header">Policy Sections</h4>
          <ul class="nav-links-list">
            <li v-for="(section, index) in privacySections" :key="'nav-' + index">
              <a :href="'#' + section.id" class="nav-anchor-link" @click.prevent="scrollToSection(section.id)">
                {{ section.title }}
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <article class="privacy-content-body">
        <div class="privacy-intro-block">
          <p>
            <strong>Swychr Technology USA LLC</strong> (“Swychr”, “we”, “us”, or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy details how we handle information gathered through our remittance platform, <strong class="brand-accent">Swychremit</strong>.
          </p>
        </div>

        <section v-for="(section, index) in privacySections" :key="'sec-' + index" :id="section.id" class="content-section">
          <h2 class="section-block-title">{{ section.title }}</h2>
          <div class="section-block-text" v-html="section.content"></div>
        </section>
      </article>

    </main>
  </div>
</template>


<script>
export default {
  name: "PrivacyView",
  data() {
    return {
      privacySections: [
        {
          id: "information-we-collect",
          title: "1. INFORMATION WE COLLECT",
          content: `
            <p>To facilitate global cross-border routing and comply with international regulations, we collect:</p>
            <ul>
              <li><strong>Sender Identity Data:</strong> Full legal name, residential address, email address, phone number, date of birth, and nationality.</li>
              <li><strong>Compliance Documentation (KYC):</strong> Government-issued identification, tax identification numbers, or biometric data (e.g., selfies for identity verification), collected directly or securely passed to our Licensed Partners.</li>
              <li><strong>Beneficiary Data:</strong> Legal name, physical location, bank account numbers, swift/IBAN details, or mobile money wallet details of the recipient.</li>
              <li><strong>Transaction and Financial Data:</strong> Funding source information, transaction amounts, payment method, timestamps, and geolocation data.</li>
            </ul>
          `
        },
        {
          id: "how-we-use-information",
          title: "2. HOW WE USE YOUR INFORMATION",
          content: `
            <p>We use your personal data to:</p>
            <ul>
              <li>Operate and optimize the <strong>Swychremit</strong> technology interface.</li>
              <li>Transmit required compliance and identity data to our Licensed Partners to authorize, clear, and execute transactions.</li>
              <li>Detect, investigate, and prevent financial crimes, fraud, money laundering, and unauthorized access.</li>
              <li>Comply with legal obligations imposed by regulatory bodies in sending and receiving corridors.</li>
            </ul>
          `
        },
        {
          id: "data-sharing-transfers",
          title: "3. DATA SHARING AND CROSS-BORDER TRANSFERS",
          content: `
            <ul>
              <li><strong>Sharing with Licensed Partners:</strong> Because we are a technology provider and do not move money, <strong>we must share your transaction and compliance data with our regulated financial partners</strong> responsible for handling your funds in the US, Europe (SEPA), UK, and destination countries.</li>
              <li><strong>Global Infrastructure:</strong> Your data will be transferred to, stored, and processed in the United States and other global operating hubs. We implement strict data protection agreements (such as Standard Contractual Clauses for European/UK users) to guarantee a high level of security.</li>
              <li><strong>No Sale of Data:</strong> <strong>Swychremit</strong> does not sell, rent, or trade your personal data to third parties for marketing purposes.</li>
            </ul>
          `
        },
        {
          id: "data-retention-rights",
          title: "4. DATA RETENTION AND EXTRA-TERRITORIAL RIGHTS",
          content: `
            <ul>
              <li><strong>Retention:</strong> Due to financial compliance regulations (such as Bank Secrecy Act and European AML Directives), your personal identity and transaction records must be retained by us and our partners for a mandatory period (typically between 5 to 7 years) after account closure.</li>
              <li><strong>Your Rights:</strong> Depending on your jurisdiction (e.g., GDPR in the EU/UK, CCPA in California), you may have the right to access, correct, or restrict the processing of your data. However, please note that our statutory obligations to retain records for financial crime prevention supersede requests for data deletion.</li>
            </ul>
          `
        },
        {
          id: "security-measures",
          title: "5. SECURITY MEASURES",
          content: `
            <p>We implement robust technical security protocols, including End-to-End SSL encryption, secure API integrations, and multi-factor authentication (MFA) to safeguard data transit between your device, our platform, and our financial partners.</p>
          `
        }
      ]
    };
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth"
        });
      }
    }
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ==========================================================================
   🖥️ DESKTOP LAYOUT AND THEME STYLING
   ========================================================================== */
.privacy-page {
  width: 100%;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

/* Page Header Hero Banner */
.privacy-hero {
  width: 100%;
  background-color: #fcfbfe; 
  border-bottom: 1px solid #efeaf6;
  padding: 7rem 2rem 4rem 2rem;
  display: flex;
  justify-content: center;
}

.privacy-hero-container {
  max-width: 1200px;
  width: 100%;
  text-align: left;
}

.privacy-tagline {
  font-size: 0.85rem;
  font-weight: 700;
  color: #00d293; /* Swychr Mint Green */
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 0.5rem;
}

.privacy-main-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a0830; /* Swychr Deep Purple Slate */
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.privacy-update-date {
  font-size: 0.95rem;
  color: #6c5e7e;
  margin: 0;
}

/* Split-Screen Main Container */
.privacy-split-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem 6rem 2rem;
  display: flex;
  gap: 4rem;
  box-sizing: border-box;
}

/* Left Sticky Sidebar */
.privacy-sidebar-nav {
  width: 280px;
  flex-shrink: 0;
  text-align: left;
}

.sticky-wrapper {
  position: sticky;
  top: 100px; /* Anchors sidebar while scrolling down */
}

.nav-header {
  font-size: 1rem;
  font-weight: 700;
  color: #1a0830;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 1.25rem 0;
  border-bottom: 2px solid #efeaf6;
  padding-bottom: 0.5rem;
}

.nav-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-anchor-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: #6c5e7e;
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
  line-height: 1.4;
}

.nav-anchor-link:hover {
  color: #3b1565; /* Swychr Core Purple */
  padding-left: 4px;
}

/* Right Content Body Column */
.privacy-content-body {
  flex: 1;
  text-align: left;
}

.privacy-intro-block {
  margin-bottom: 3.5rem;
  border-left: 4px solid #3b1565;
  padding-left: 1.5rem;
}

.privacy-intro-block p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #3b1565;
  font-weight: 500;
  margin: 0;
}

.privacy-intro-block .brand-accent {
  color: #00d293;
  font-weight: 700;
}

.content-section {
  margin-bottom: 3.5rem;
  border-bottom: 1px solid #f5f3f7;
  padding-bottom: 2.5rem;
}

.content-section:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.section-block-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a0830;
  margin: 0 0 1.5rem 0;
}

/* Nested elements formatting */
.section-block-text::v-html p,
.section-block-text p {
  font-size: 1rem;
  line-height: 1.75;
  color: #5c4e6e;
  margin: 0 0 1.25rem 0;
}

.section-block-text::v-html ul,
.section-block-text ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-block-text::v-html li,
.section-block-text li {
  font-size: 1rem;
  line-height: 1.7;
  color: #5c4e6e;
  padding-left: 1.5rem;
  position: relative;
}

.section-block-text::v-html li::before,
.section-block-text li::before {
  content: "•";
  color: #00d293; /* Swychr Mint Green list bullets */
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: -2px;
}

.section-block-text::v-html li strong,
.section-block-text li strong {
  color: #1a0830;
}

/* ==========================================================================
   📱 TABLET & MOBILE RESPONSIVE ADAPTATIONS
   ========================================================================== */
@media (max-width: 850px) {
  .privacy-split-container {
    flex-direction: column;
    padding: 3rem 1.25rem;
    gap: 2rem;
  }

  .privacy-sidebar-nav {
    display: none; /* Hides sidebar navigation on smaller layouts */
  }

  .privacy-hero {
    padding: 5rem 1.25rem 3rem 1.25rem;
  }

  .privacy-main-title {
    font-size: 2rem;
  }

  .privacy-intro-block {
    padding-left: 1rem;
  }

  .privacy-intro-block p {
    font-size: 1.05rem;
  }

  .section-block-title {
    font-size: 1.25rem;
  }
}
</style>