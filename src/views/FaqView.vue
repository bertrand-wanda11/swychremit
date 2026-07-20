<template>
  <div class="page-container">
    <div class="content-card">
      <div class="badge">Help Center</div>
      <h1>General FAQs</h1>
      <p class="lead">Answers to common questions about transfers and account management.</p>
      
      <hr />

      <div class="faq-list">
        <div class="faq-box">
          <h3>How long does a transfer take?</h3>
          <p>Most transactions sent to mobile money or bank accounts complete within 60 seconds.</p>
        </div>
        <div class="faq-box">
          <h3>What are the transaction fees?</h3>
          <p>Our fees depend on the recipient corridor, with rates starting as low as $2.99.</p>
        </div>
        <div class="faq-box">
          <h3>How do I track my transfer?</h3>
          <p>Use the transaction ID provided on your receipt or track it directly inside the mobile app.</p>
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