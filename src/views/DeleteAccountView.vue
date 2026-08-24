<template>
  <div class="page-container">
    <div class="content-card" v-reveal>
      <div class="badge">Account &amp; Data Deletion</div>
      <h1>Delete Your Account</h1>
      <p class="lead">
        Use this form to request permanent deletion of your Swychremit account and associated personal data.
        Once submitted, our team will verify your identity and process the request in line with our
        <router-link to="/privacy" class="inline-link">Privacy Policy</router-link>.
      </p>

      <div class="info-box">
        <h3>What gets deleted</h3>
        <ul>
          <li>Your profile information (name, email, phone number)</li>
          <li>Saved beneficiaries and payment methods</li>
          <li>Device and app usage data linked to your account</li>
        </ul>
        <p class="info-note">
          Transaction records may be retained for a limited period where required by law or financial
          regulation, even after your account is deleted. Deletion typically completes within 30 days,
          and we'll confirm by email once it's done.
        </p>
      </div>

      <hr />

      <transition name="form-swap" mode="out-in">
        <form v-if="submitStatus !== 'success'" key="form" class="delete-form" @submit.prevent="handleSubmit" novalidate>
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
              <label for="email">Account Email</label>
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

          <div class="form-field">
            <label for="phonenumber">Phone Number <span class="optional-tag">(optional)</span></label>
            <input
              id="phonenumber"
              v-model.trim="form.phonenumber"
              type="tel"
              placeholder="+1 555 000 1234"
              :disabled="isSubmitting"
            />
          </div>

          <div class="form-field">
            <label for="reason">Reason for deletion <span class="optional-tag">(optional)</span></label>
            <textarea
              id="reason"
              v-model.trim="form.reason"
              rows="4"
              placeholder="Let us know why you're leaving, it helps us improve."
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <label class="confirm-check">
            <input type="checkbox" v-model="form.confirmed" required :disabled="isSubmitting" />
            <span>I confirm I am the owner of this account and I understand this action is permanent.</span>
          </label>

          <p v-if="submitStatus === 'error'" class="form-alert error-alert">
            {{ errorMessage }}
          </p>

          <button type="submit" class="submit-btn" :disabled="isSubmitting || !form.confirmed" v-magnetic="8">
            <span v-if="isSubmitting" class="spinner"></span>
            {{ isSubmitting ? 'Submitting...' : 'Request Account Deletion' }}
          </button>
        </form>

        <div v-else key="success" class="success-panel">
          <div class="success-icon">✓</div>
          <h2>Request received</h2>
          <p>
            Thanks, {{ lastSubmittedName }}. We've received your account deletion request and will confirm
            by email at {{ lastSubmittedEmail }} once it's processed.
          </p>
          <button type="button" class="submit-btn ghost-btn" @click="resetForm">Submit another request</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { apiFetch } from '../services/api';

const form = reactive({
  name: '',
  email: '',
  phonenumber: '',
  reason: '',
  confirmed: false
});

const isSubmitting = ref(false);
const submitStatus = ref(null);
const errorMessage = ref('');
const lastSubmittedName = ref('');
const lastSubmittedEmail = ref('');

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.phonenumber = '';
  form.reason = '';
  form.confirmed = false;
  submitStatus.value = null;
  errorMessage.value = '';
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;
  errorMessage.value = '';

  try {
    const response = await apiFetch('/api/web/account_deletion_requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phonenumber: form.phonenumber,
        reason: form.reason
      })
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    lastSubmittedName.value = form.name;
    lastSubmittedEmail.value = form.email;
    submitStatus.value = 'success';
  } catch (err) {
    submitStatus.value = 'error';
    errorMessage.value = 'Something went wrong submitting your request. Please try again, or email us directly at support@swychr.com.';
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

.info-box {
  background: #faf5ff;
  border: 1px solid #f0d8ff;
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 30px;
}

.info-box h3 {
  font-size: 1rem;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.info-box ul {
  margin: 0 0 14px;
  padding-left: 20px;
  color: #444;
  font-size: 0.9rem;
  line-height: 1.7;
}

.info-note {
  margin: 0;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.6;
}

hr {
  border: 0;
  height: 1px;
  background: #eee;
  margin-bottom: 30px;
}

.delete-form {
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
  min-height: 100px;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: #8c1bc1;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(140, 27, 193, 0.1);
}

.form-field input:disabled,
.form-field textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.confirm-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  color: #444;
  line-height: 1.5;
  cursor: pointer;
}

.confirm-check input {
  margin-top: 3px;
  accent-color: #8c1bc1;
  cursor: pointer;
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
  opacity: 0.55;
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
