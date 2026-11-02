<template>
  <div class="country-cta-page">
    <div class="container">
      <div class="hero-card">
        <h1>Send Money to {{ formattedCountryName }} Instantly</h1>
        <p class="subtitle">
          Transfer money directly to bank accounts and mobile money wallets across {{ formattedCountryName }} with Swychremit.
        </p>

        <a
          href="https://play.google.com/store/apps/details?id=com.swychr.swych_remit&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-download-btn"
        >
          Download Swychremit App
        </a>
      </div>

      <div class="country-article">
        <h2>Fast and Reliable Transfers to {{ formattedCountryName }}</h2>
        <p>
          Need to support family, pay tuition, or handle business transactions in {{ formattedCountryName }}? 
          Swychremit guarantees low transaction fees, transparent exchange rates, and rapid settlement into local bank accounts and popular mobile wallets.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryDestinationView",
  computed: {
    countrySlug() {
      return this.$route.params.country || "";
    },
    formattedCountryName() {
      return this.countrySlug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  }
};
</script>

<style scoped>
.country-cta-page {
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
}
.hero-card {
  text-align: center;
  margin-bottom: 40px;
}
.hero-card h1 {
  font-size: 2.2rem;
  color: #1a1a2e;
}
.subtitle {
  color: #555;
  margin: 15px 0 25px;
}
.cta-download-btn {
  display: inline-block;
  background-color: #6c2bd9;
  color: #fff;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
}
.country-article {
  line-height: 1.7;
  color: #333;
}
</style>