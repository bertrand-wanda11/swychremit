<template>
  <div class="page-container">
    <div class="content-card">
      <div class="badge">About Us</div>
      <h1>Our Story</h1>
      <p class="lead">Empowering borderless finance and connecting global diaspora back home.</p>
      
      <hr />

      <div class="story-text">
        <p>Swychremit was created with a clear mission: to dismantle the high fees and slow transfer speeds that burden families sending money across borders.</p>
        <p>By connecting directly to local bank rails and mobile money wallets across Africa and worldwide, SwyChr Remit makes cross-border payments as easy as sending a message.</p>
      </div>

      <div class="stats-row">
        <div class="stat-box">
          <h2>50+</h2>
          <span>Supported Countries</span>
        </div>
        <div class="stat-box">
          <h2>&lt; 60s</h2>
          <span>Average Delivery</span>
        </div>
        <div class="stat-box">
          <h2>4.8 ★</h2>
          <span>Customer Rating</span>
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
.story-text p { font-size: 1.05rem; line-height: 1.7; color: #444; margin-bottom: 16px; }
.stats-row { display: flex; justify-content: space-around; margin-top: 40px; background: #8c1bc1; color: #fff; padding: 24px; border-radius: 16px; text-align: center; }
.stat-box h2 { font-size: 1.8rem; margin: 0; }
</style>