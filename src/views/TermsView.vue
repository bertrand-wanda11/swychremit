<template>
  <div class="terms-page">
    <header class="terms-hero">
      <div class="terms-hero-container">
        <span class="terms-tagline">Legal Agreement</span>
        <h1 class="terms-main-title">TERMS AND CONDITIONS (T&amp;Cs)</h1>
        <p class="terms-update-date">Last Updated: July 14, 2026</p>
      </div>
    </header>

    <main class="terms-split-container">
      
      <aside class="terms-sidebar-nav">
        <div class="sticky-wrapper">
          <h4 class="nav-header">Agreement Sections</h4>
          <ul class="nav-links-list">
            <li v-for="(section, index) in termsSections" :key="'nav-' + index">
              <a :href="'#' + section.id" class="nav-anchor-link" @click.prevent="scrollToSection(section.id)">
                {{ section.title }}
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <article class="terms-content-body">
        <div class="terms-intro-block">
          <p>
            These Terms and Conditions (“Terms”) constitute a legally binding agreement between you (“User”, “Sender”, or “you”) and <strong>Swychr Technology USA LLC</strong> (“Swychr”, “Swychremit”, “we”, “us”, or “our”). These Terms govern your access to and use of the <strong>Swychremit</strong> website, platform, and cross-border money transfer routing technology (collectively, the “Services”).
          </p>
          <p class="intro-accent">
            By accessing or using Swychremit, you agree to be bound by these Terms. If you do not agree to these Terms, you must immediately cease using the platform.
          </p>
        </div>

        <section v-for="(section, index) in termsSections" :key="'sec-' + index" :id="section.id" class="content-section">
          <h2 class="section-block-title">{{ section.title }}</h2>
          <div class="section-block-text" v-html="section.content"></div>
        </section>
      </article>

    </main>
  </div>
</template>


<script>
export default {
  name: "TermsView",
  data() {
    return {
      termsSections: [
        {
          id: "nature-of-services",
          title: "1. THE NATURE OF OUR SERVICES (TECHNOLOGY PROVIDER DISCLAIMER)",
          content: `
            <ul>
              <li><strong>Non-Financial Institution Status:</strong> <strong>Swychremit</strong> is a technology platform and software provider. <strong>Swychr Technology USA LLC is not a licensed bank, Money Services Business (MSB), money transmitter, or depository financial institution.</strong></li>
              <li><strong>No Custody of Funds:</strong> We do not hold, custody, manage, or take possession of client funds or fiat currency at any point in the transaction lifecycle.</li>
              <li><strong>Licensed Intermediaries:</strong> All financial services, including the collection of fiat funds (on-ramping), compliance screening, custody, foreign exchange execution, and ultimate delivery of local currency (off-ramping), are executed exclusively by our network of regulated and licensed third-party financial partners (“Licensed Partners”) in the respective sending and receiving jurisdictions.</li>
              <li><strong>Digital Asset Routing:</strong> You acknowledge and understand that behind Swychremit’s user interface, the underlying technology automatically routes your transaction by converting on-ramped fiat funds into USD Coin (USDC), a pegged digital stablecoin, or other USD stablecoins for cross-border transit, before utilizing digital asset liquidity payout partners for final delivery to the beneficiary.</li>
            </ul>
          `
        },
        {
          id: "eligibility",
          title: "2. ELIGIBILITY AND ACCOUNT REGISTRATION",
          content: `
            <ul>
              <li><strong>Age and Capacity:</strong> You must be at least 18 years old and possess the legal capacity to enter into a binding contract to use the Services.</li>
              <li><strong>Permitted Jurisdictions:</strong> Services are only available to residents of select sending countries (including the United States, United Kingdom, and European SEPA countries) sending to designated corridors in Africa, Asia, and South America. You may not use the platform if you reside in a prohibited jurisdiction.</li>
              <li><strong>KYC/AML Compliance:</strong> To comply with global anti-money laundering (AML), counter-terrorist financing (CTF), and "Know Your Customer" (KYC) regulations, our Licensed Partners require identity verification. You agree to provide accurate, complete, and verifiable information (including government IDs, proof of address, and source of funds if requested). Your account access is contingent upon successful verification by these Licensed Partners.</li>
            </ul>
          `
        },
        {
          id: "transactions-fees",
          title: "3. TRANSACTIONS, FEES, AND EXCHANGE RATES",
          content: `
            <ul>
              <li><strong>Transaction Instructions:</strong> Once you submit a remittance request, the instruction is sent to our Licensed Partners for processing. You are solely responsible for ensuring the absolute accuracy of the beneficiary's details (e.g., bank account numbers, mobile wallet IDs, full legal names). <span class="warning-text">Swychremit cannot reverse or recall a transaction once it has been processed on the blockchain or settled by local payout partners.</span></li>
              <li><strong>Fees:</strong> Swychremit charges a technology service fee, alongside any partner transaction fees on the interface prior to your confirmation.</li>
              <li><strong>Exchange Rates:</strong> Foreign exchange rates are calculated dynamically at the time of the transaction. The rate provided includes a commercial spread applied to cover the costs of fiat-to-USDC conversion, network (gas) fees, and USDC-to-local currency liquidation. By confirming the transaction, you agree to the specified rate.</li>
            </ul>
          `
        },
        {
          id: "refunds-cancellations",
          title: "4. REFUNDS AND CANCELLATIONS",
          content: `
            <ul>
              <li><strong>Irreversibility:</strong> Because transactions utilize instant digital asset settlement (USDC) and real-time local banking/mobile money networks, transfers are generally instantaneous and irreversible. In some cases, transaction could take up to 12 hours from initiation to settlement. In such cases until settlement we are able to process a refund but this would be really being treated on a case by case basis.</li>
              <li><strong>Failed Transfers:</strong> If a transaction fails to execute due to a system error on our platform or rejection by a Licensed Partner, the funds will be returned to the Sender's source account by the relevant on-ramp partner or any other applicable method practicable. Swychremit is not liable for delayed refunds resulting from third-party banking processing timelines.</li>
            </ul>
          `
        },
        {
          id: "prohibited-uses",
          title: "5. PROHIBITED USES",
          content: `
            <p>You agree not to use Swychremit for any unlawful activities, including but not limited to:</p>
            <ul>
              <li>Transactions violating international sanctions (OFAC, UN, EU, UK compliance lists).</li>
              <li>Funding terrorism, money laundering, fraud, or phishing schemes.</li>
              <li>Purchasing illegal goods, narcotics, or unregulated financial products.</li>
              <li>Attempting to bypass platform transaction limits or structuring transactions to evade regulatory reporting thresholds.</li>
            </ul>
          `
        },
        {
          id: "limitation-of-liability",
          title: "6. LIMITATION OF LIABILITY & DISCLAIMER OF WARRANTIES",
          content: `
            <ul>
              <li><strong>As-Is Basis:</strong> The Swychremit platform is provided on an "as-is" and "as-available" basis without warranties of any kind.</li>
              <li><strong>Third-Party Reliance:</strong> Swychremit shall not be held liable for any failures, delays, regulatory interventions, freezes, or liquidations caused by its Licensed Partners, blockchain network congestion, or stablecoin smart contract vulnerabilities.</li>
              <li><strong>Cap on Liability:</strong> To the maximum extent permitted by applicable law, Swychr Technology USA LLC, its directors, and affiliates shall not be liable for any indirect, incidental, or consequential damages. Our total liability to you for any single claim arising out of the use of the platform shall be limited to the technology service fee paid by you for the specific transaction in question.</li>
            </ul>
          `
        },
        {
          id: "governing-law",
          title: "7. GOVERNING LAW AND JURISDICTION",
          content: `
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms shall be settled through binding arbitration administered by the American Arbitration Association (AAA).</p>
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
.terms-page {
  width: 100%;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif; /* Explicit Montserrat Requirement */
  box-sizing: border-box;
}

/* Page Header Hero Banner */
.terms-hero {
  width: 100%;
  background-color: #fcfbfe; 
  border-bottom: 1px solid #efeaf6;
  padding: 7rem 2rem 4rem 2rem;
  display: flex;
  justify-content: center;
}

.terms-hero-container {
  max-width: 1200px;
  width: 100%;
  text-align: left;
}

.terms-tagline {
  font-size: 0.85rem;
  font-weight: 700;
  color:  #7B1FA2;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 0.5rem;
}

.terms-main-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a0830; /* Swychr Deep Purple Slate */
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.terms-update-date {
  font-size: 0.95rem;
  color: #6c5e7e;
  margin: 0;
}

/* Split-Screen Main Container */
.terms-split-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem 6rem 2rem;
  display: flex;
  gap: 4rem;
  box-sizing: border-box;
}

/* Left Sticky Sidebar */
.terms-sidebar-nav {
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
.terms-content-body {
  flex: 1;
  text-align: left;
}

.terms-intro-block {
  margin-bottom: 3.5rem;
}

.terms-intro-block p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5c4e6e;
  margin-bottom: 1.25rem;
}

.terms-intro-block .intro-accent {
  font-size: 1.15rem;
  font-weight: 500;
  border-left: 3px solid #3b1565;
  padding-left: 1.5rem;
  color: #3b1565;
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

.warning-text {
  color: #d11a2a;
  font-weight: 600;
}

/* ==========================================================================
   📱 TABLET & MOBILE RESPONSIVE ADAPTATIONS
   ========================================================================== */
@media (max-width: 850px) {
  .terms-split-container {
    flex-direction: column;
    padding: 3rem 1.25rem;
    gap: 2rem;
  }

  .terms-sidebar-nav {
    display: none; /* Hides sidebar navigation on smaller layouts */
  }

  .terms-hero {
    padding: 5rem 1.25rem 3rem 1.25rem;
  }

  .terms-main-title {
    font-size: 2rem;
  }

  .terms-intro-block {
    padding-left: 1rem;
  }

  .terms-intro-block p {
    font-size: 1.05rem;
  }

  .section-block-title {
    font-size: 1.25rem;
  }
}
</style>