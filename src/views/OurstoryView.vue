<template>
  <div class="page-container">
    <div class="content-card" v-reveal>
      <div class="badge">About Us</div>
      <h1>Our Story</h1>
      <p class="lead">Empowering borderless finance and connecting global diaspora back home.</p>

      <hr />

      <div class="story-text">
        <p>Swychremit was created with a clear mission: to dismantle the high fees and slow transfer speeds that burden families sending money across borders.</p>
        <p>By connecting directly to local bank rails and mobile money wallets across Africa and worldwide, Swychremit makes cross-border payments as easy as sending a message.</p>
      </div>

      <div class="stats-row" v-reveal>
        <div class="stat-box">
          <h2>{{ countries }}+</h2>
          <span>Supported Countries</span>
        </div>
        <div class="stat-box">
          <h2>&lt; 60s</h2>
          <span>Average Delivery</span>
        </div>
        <div class="stat-box">
          <h2>24/7</h2>
          <span>Customer Support</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const countries = ref(0);

const countUp = (target, setter, duration, decimals = 0) => {
  const start = performance.now();
  const factor = Math.pow(10, decimals);
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setter(Math.round(target * eased * factor) / factor);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

onMounted(() => {
  countUp(50, (v) => (countries.value = v), 1100);
});
</script>

<style scoped>
.page-container { min-height: 80vh; background: #fafafa; padding: 60px 20px; display: flex; justify-content: center; font-family: 'Manrope', sans-serif; }
.content-card { background: #fff; max-width: 850px; width: 100%; padding: 40px; border-radius: 20px; border: 1px solid #f0e6f5; }
.badge { display: inline-block; background: linear-gradient(120deg, #f3e8ff, #ece0ff); color: #8c1bc1; font-size: 0.75rem; font-weight: 700; padding: 6px 14px; border-radius: 100px; text-transform: uppercase; margin-bottom: 12px; }
h1 { font-size: 2rem; color: #1a1a2e; margin-bottom: 8px; }
.lead { color: #666; font-size: 1rem; margin-bottom: 20px; }
hr { border: 0; height: 1px; background: #eee; margin-bottom: 30px; }
.story-text p { font-size: 1.05rem; line-height: 1.7; color: #444; margin-bottom: 16px; }
.stats-row { display: flex; justify-content: space-around; margin-top: 40px; background: linear-gradient(135deg, #5c1791, #8c1bc1); color: #fff; padding: 24px; border-radius: 16px; text-align: center; }
.stat-box h2 { font-size: 1.8rem; margin: 0; font-variant-numeric: tabular-nums; }
</style>