<template>
  <div class="page-container">
    <div class="content-card" v-reveal>
      <div class="badge">Help Center</div>
      <h1>Need a hand? Talk to us</h1>
      <p class="lead">
        Tell us what's going on and our support team will get back to you shortly. For instant answers,
        check our <router-link to="/faq" class="inline-link">FAQs</router-link> first.
      </p>

      <hr />

      <transition name="form-swap" mode="out-in">
        <form v-if="submitStatus !== 'success'" key="form" class="help-form" @submit.prevent="handleSubmit" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label for="name">Full Name</label>
              <input
                id="name"
                v-model.trim="form.name"
                type="text"
                placeholder="Jane Doe"
                required
                :disabled="isSubmitting"
              />
            </div>
            <div class="form-field">
              <label for="email">Email Address</label>
              <input
                id="email"
                v-model.trim="form.email"
                type="email"
                placeholder="jane@example.com"
                required
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="phone">Phone Number <span class="optional-tag">(optional)</span></label>
              <input
                id="phone"
                v-model.trim="form.phone"
                type="tel"
                placeholder="+1 555 000 1234"
                :disabled="isSubmitting"
              />
            </div>
            <div class="form-field">
              <label for="subject">Subject</label>
              <select id="subject" v-model="form.subject" :disabled="isSubmitting">
                <option>General Inquiry</option>
                <option>Account &amp; Verification</option>
                <option>Transaction Issue</option>
                <option>Billing &amp; Fees</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div class="form-field">
            <label for="message">How can we help?</label>
            <textarea
              id="message"
              v-model.trim="form.message"
              rows="5"
              placeholder="Share as much detail as you can, including your transaction ID if this is about a transfer."
              required
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <p v-if="submitStatus === 'error'" class="form-alert error-alert">
            {{ errorMessage }}
          </p>

          <button type="submit" class="submit-btn" :disabled="isSubmitting" v-magnetic="8">
            <span v-if="isSubmitting" class="spinner"></span>
            {{ isSubmitting ? 'Sending...' : 'Submit Request' }}
          </button>
        </form>

        <div v-else key="success" class="success-panel">
          <div class="success-icon">✓</div>
          <h2>Message received</h2>
          <p>Thanks, {{ lastSubmittedName }}! Our support team will reach out to your inbox shortly.</p>
          <button type="button" class="submit-btn ghost-btn" @click="resetForm">Send another message</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: 'General Inquiry',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(null);
const errorMessage = ref('');
const lastSubmittedName = ref('');

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.phone = '';
  form.subject = 'General Inquiry';
  form.message = '';
  submitStatus.value = null;
  errorMessage.value = '';
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;
  errorMessage.value = '';

  try {
    const response = await fetch('/api/web/create_lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
        source: 'help_center'
      })
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    lastSubmittedName.value = form.name;
    submitStatus.value = 'success';
  } catch (err) {
    submitStatus.value = 'error';
    errorMessage.value = 'Something went wrong sending your message. Please try again, or email us directly at support@swychr.com.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.page-container {
  min-height: 80vh;
  background: #fafafa;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  font-family: 'Manrope', sans-serif;
}

.content-card {
  background: #fff;
  max-width: 720px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #f0e6f5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
}

.badge {
  display: inline-block;
  background: linear-gradient(120deg, #f3e8ff, #ece0ff);
  color: #8c1bc1;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 100px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

h1 {
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 8px;
  line-height: 1.25;
}

.lead {
  color: #666;
  font-size: 1rem;
  margin-bottom: 24px;
  line-height: 1.5;
}

.inline-link {
  color: #8c1bc1;
  font-weight: 700;
  text-decoration: none;
}

.inline-link:hover {
  text-decoration: underline;
}

hr {
  border: 0;
  height: 1px;
  background: #eee;
  margin-bottom: 30px;
}

.help-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1a1a2e;
}

.optional-tag {
  font-weight: 500;
  color: #999;
  text-transform: none;
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1.5px solid #e2d4eb;
  background: #faf5ff;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
  color: #1a1a2e;
  transition: border-color 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
}

.form-field textarea {
  resize: vertical;
  min-height: 120px;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  border-color: #8c1bc1;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(140, 27, 193, 0.1);
}

.form-field input:disabled,
.form-field select:disabled,
.form-field textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-alert {
  margin: 0;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
}

.error-alert {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  animation: alertShake 400ms ease;
}

@keyframes alertShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.submit-btn {
  position: relative;
  overflow: hidden;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #7B1FA2, #8c1bc1);
  color: #ffffff;
  border: none;
  padding: 14px 32px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(140, 27, 193, 0.25);
  transition: box-shadow 200ms ease, opacity 200ms ease;
}

.submit-btn:hover:not(:disabled) {
  box-shadow: 0 10px 24px rgba(140, 27, 193, 0.35);
}

.submit-btn:disabled {
  opacity: 0.75;
  cursor: not-allowed;
}

.ghost-btn {
  background: #ffffff;
  color: #8c1bc1;
  border: 1.5px solid #e2d4eb;
  box-shadow: none;
}

.ghost-btn:hover {
  border-color: #8c1bc1;
}

.spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #ffffff;
  animation: spin 700ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.form-swap-enter-active,
.form-swap-leave-active {
  transition: opacity 240ms ease, transform 240ms ease;
}

.form-swap-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.form-swap-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.success-panel {
  text-align: center;
  padding: 24px 10px 8px;
}

.success-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: #e2fef7;
  color: #00b386;
  font-size: 1.6rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: successPop 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes successPop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
}

.success-panel h2 {
  font-size: 1.4rem;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.success-panel p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .page-container {
    padding: 30px 12px;
  }

  .content-card {
    padding: 24px 16px;
    border-radius: 16px;
  }

  h1 {
    font-size: 1.6rem;
  }

  .lead {
    font-size: 0.9rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .submit-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
