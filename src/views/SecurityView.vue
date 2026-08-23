<template>
  <div class="page-container">
    <div class="content-card" v-reveal>
      <div class="badge">Trust & Safety</div>
      <h1>Security & Protection</h1>
      <p class="lead">Your funds and personal data are protected by bank-grade security protocols.</p>

      <hr />

      <div class="security-grid">
        <div class="sec-card" v-reveal="0">
          <div class="sec-icon">🔒</div>
          <h3>End-to-End Encryption</h3>
          <p>All sensitive details are encrypted in transit and at rest using 256-bit SSL technology.</p>
        </div>
        <div class="sec-card" v-reveal="1">
          <div class="sec-icon">🛡️</div>
          <h3>Strict Regulatory Compliance</h3>
          <p>We partner exclusively with licensed payment processors adhering strictly to global AML and KYC mandates.</p>
        </div>
        <div class="sec-card" v-reveal="2">
          <div class="sec-icon">👁️</div>
          <h3>Automated Fraud Surveillance</h3>
          <p>Real-time threat monitoring flags irregular activities before transactions process.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-container { min-height: 80vh; background: #fafafa; padding: 60px 20px; display: flex; justify-content: center; font-family: 'Manrope', sans-serif; }
.content-card { background: #fff; max-width: 850px; width: 100%; padding: 40px; border-radius: 20px; border: 1px solid #f0e6f5; }
.badge { display: inline-block; background: linear-gradient(120deg, #f3e8ff, #ece0ff); color: #8c1bc1; font-size: 0.75rem; font-weight: 700; padding: 6px 14px; border-radius: 100px; text-transform: uppercase; margin-bottom: 12px; }
h1 { font-size: 2rem; color: #1a1a2e; margin-bottom: 8px; }
.lead { color: #666; font-size: 1rem; margin-bottom: 20px; }
hr { border: 0; height: 1px; background: #eee; margin-bottom: 30px; }
.security-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.sec-card { background: #faf5ff; padding: 24px; border-radius: 14px; border: 1px solid #f0d8ff; transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 240ms ease, border-color 240ms ease; }
.sec-card:hover { transform: translateY(-6px); box-shadow: 0 14px 28px rgba(140, 27, 193, 0.12); border-color: #8c1bc1; }
.sec-icon { font-size: 2rem; margin-bottom: 10px; transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1); }
.sec-card:hover .sec-icon { transform: scale(1.15) rotate(-6deg); }
</style>