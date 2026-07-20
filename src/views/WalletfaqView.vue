<template>
  <div class="page-container">
    <div class="content-card">
      <div class="badge">SwyChr Wallet</div>
      <h1>SwyChr Wallet FAQs</h1>
      <p class="lead">Manage multi-currency balances, wallet funding, and withdrawals.</p>
      
      <hr />

      <div class="faq-list">
        <div class="faq-box">
          <h3>What is the SwyChr Wallet?</h3>
          <p>It allows you to store, convert, and hold funds in multiple currencies like USD, NGN, GBP, and EUR safely.</p>
        </div>
        <div class="faq-box">
          <h3>Are there fees to hold funds?</h3>
          <p>No, holding money in your SwyChr Wallet is completely free of monthly maintenance fees.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-container { min-height: 80vh; background: #fafafa; padding: 60px 20px; display: flex; justify-content: center; font-family: 'Montserrat', sans-serif; }
.content-card { background: #fff; max-width: 850px; width: 100%; padding: 40px; border-radius: 20px; border: 1px solid #f0e6f5; }
.badge { display: inline-block; background: #f3e8ff; color: #8c1bc1; font-size: 0.75rem; font-weight: 700; padding: 6px 14px; border-radius: 100px; text-transform: uppercase; margin-bottom: 12px; }
h1 { font-size: 2rem; color: #1a1a2e; margin-bottom: 8px; }
.lead { color: #666; font-size: 1rem; margin-bottom: 20px; }
hr { border: 0; height: 1px; background: #eee; margin-bottom: 30px; }
.faq-box { margin-bottom: 20px; background: #faf5ff; padding: 18px; border-radius: 12px; border: 1px solid #f0d8ff; }
.faq-box h3 { color: #8c1bc1; margin-bottom: 6px; font-size: 1.1rem; }
</style>