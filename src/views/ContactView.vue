<template>
  <div class="page-container">
    <div class="content-card">
      <div class="badge">Contact Us</div>
      <h1>Get In Touch</h1>
      <p class="lead">Our support team is available 24/7 to help with any transfer inquiries.</p>
      
      <hr />

      <div class="contact-grid">
        <div class="contact-card">
          <div class="icon">📧</div>
          <h3>Email Support</h3>
          <p>support@swychr.com</p>
        </div>
        <div class="contact-card">
          <div class="icon">💬</div>
          <h3>Live Chat</h3>
          <p>Available on the SwyChr Mobile & Web App</p>
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
.contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
.contact-card { background: #faf5ff; padding: 24px; border-radius: 14px; border: 1px solid #f0d8ff; text-align: center; }
.icon { font-size: 2rem; margin-bottom: 10px; }
</style>