<template>
  <div class="page-container">
    <div class="content-card">
      <div class="badge">Join Our Team</div>
      <h1>Careers at SwyChr</h1>
      <p class="lead">Help us make global remittances cheaper, faster, and accessible to everyone.</p>
      
      <hr />

      <div class="job-list">
        <div class="job-item">
          <div>
            <h3>Senior Full Stack Developer (Vue.js / Node)</h3>
            <span class="job-tag">Engineering • Remote</span>
          </div>
          <a href="mailto:careers@swychr.com?subject=Application: Senior Developer" class="apply-btn">Apply Now</a>
        </div>

        <div class="job-item">
          <div>
            <h3>Compliance & AML Analyst</h3>
            <span class="job-tag">Legal • Remote</span>
          </div>
          <a href="mailto:careers@swychr.com?subject=Application: Compliance Analyst" class="apply-btn">Apply Now</a>
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
.job-item { display: flex; justify-content: space-between; align-items: center; padding: 20px; background: #faf5ff; border: 1px solid #f0d8ff; border-radius: 12px; margin-bottom: 12px; }
.job-tag { font-size: 0.85rem; color: #888; }
.apply-btn { background: #8c1bc1; color: #fff; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.85rem; }
</style>