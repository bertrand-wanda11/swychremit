<template>
  <div class="download-page">
    <div class="download-card">
      <div class="badge">SwyChr Remit Mobile App</div>
      <h1>Get SwyChr Remit on Your Phone</h1>
      <p class="lead">Send money globally with low fees, high speeds, and real-time tracking.</p>

      <div class="qr-container">
        <!-- Replace with your actual QR code image or keep the placeholder -->
        <div class="qr-box">📱 Scan to Download</div>
      </div>

      <div class="store-buttons">
        <a href="https://urlgeni.us/swychr" target="_blank" rel="noopener" class="store-btn">
          <span class="store-icon"></span> App Store
        </a>
        <a href="https://urlgeni.us/swychr" target="_blank" rel="noopener" class="store-btn">
          <span class="store-icon">▶</span> Google Play
        </a>
      </div>

      <div class="features-row">
        <div class="feat-box">
          <h3>⚡ Instant Transfers</h3>
          <p>Send directly to bank accounts and mobile money wallets in seconds.</p>
        </div>
        <div class="feat-box">
          <h3>🔒 Fully Encrypted</h3>
          <p>Bank-grade security keeping your transactions protected 24/7.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.download-page {
  min-height: 80vh;
  background: #fafafa;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}

.download-card {
  background: #ffffff;
  max-width: 800px;
  width: 100%;
  padding: 50px 40px;
  border-radius: 24px;
  text-align: center;
  border: 1px solid #f0e6f5;
  box-shadow: 0 10px 30px rgba(140, 27, 193, 0.05);
}

.badge {
  display: inline-block;
  background: #f3e8ff;
  color: #8c1bc1;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 100px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

h1 {
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.lead {
  color: #666;
  font-size: 1.05rem;
  margin-bottom: 30px;
}

.qr-container {
  margin: 20px 0 30px;
  display: flex;
  justify-content: center;
}

.qr-box {
  width: 160px;
  height: 160px;
  background: #faf5ff;
  border: 2px dashed #8c1bc1;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8c1bc1;
  font-weight: 700;
}

.store-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.store-btn {
  background: #8c1bc1;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 200ms ease;
}

.store-btn:hover {
  transform: translateY(-2px);
}

.features-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  text-align: left;
  border-top: 1px solid #f0f0f0;
  padding-top: 30px;
}

.feat-box h3 {
  font-size: 1.1rem;
  color: #1a1a2e;
  margin-bottom: 6px;
}

.feat-box p {
  color: #666;
  font-size: 0.9rem;
}
</style>