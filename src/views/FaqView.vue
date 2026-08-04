<template>
  <div class="page-container">
    <div class="content-card">
      <div class="badge">Help Center</div>
      <h1>General FAQs</h1>
      <p class="lead">Answers to common questions about transfers, account management, and security.</p>
      
     
      <div class="search-wrapper">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search questions (e.g., limits, verification, fees)..."
          class="faq-search-input"
        />
      </div>

      <hr />

      <div class="faq-list">
        <div 
          v-for="(faq, index) in filteredFaqs" 
          :key="index" 
          class="faq-box"
          :class="{ active: openIndex === index }"
          @click="toggleFaq(index)"
        >
          <div class="faq-header">
            <h3>{{ faq.question }}</h3>
            <span class="faq-toggle-icon">{{ openIndex === index ? '−' : '+' }}</span>
          </div>
          <div v-show="openIndex === index || searchQuery" class="faq-body">
            <p>{{ faq.answer }}</p>
          </div>
        </div>

        <div v-if="filteredFaqs.length === 0" class="no-results">
          <p>No questions found matching "{{ searchQuery }}". Try another search term!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const openIndex = ref(0);

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const faqs = ref([
  { question: 'How long does a transfer take?', answer: 'Most transactions sent to mobile money or bank accounts complete within 60 seconds.' },
  { question: 'What are the transaction fees?', answer: 'Our fees depend on the recipient corridor, with rates starting as low as $2.99.' },
  { question: 'How do I track my transfer?', answer: 'Use the transaction ID provided on your receipt or track it directly inside the mobile app.' },
  { question: 'Which payout methods are supported?', answer: 'We support direct bank transfers, mobile money wallets (M-Pesa, MTN Mobile Money, Orange Money, Airtel), and cash pickup locations across participating corridors.' },
  { question: 'What documents are required to verify my SwyChr account?', answer: 'You can verify your identity using a valid government-issued ID (Passport, National ID, or Driver\'s License) along with a proof of address issued within the last 3 months.' },
  { question: 'How long does identity verification take?', answer: 'Account verification is automated and typically completed within 5 to 15 minutes after submitting valid documentation.' },
  { question: 'Are there daily or monthly transfer limits?', answer: 'Yes, limits vary based on your account verification tier. Unverified accounts have strict lower limits, while fully verified accounts enjoy higher daily and monthly limits.' },
  { question: 'What happens if I send money to an incorrect bank or wallet number?', answer: 'Contact SwyChr support immediately with your transaction reference. If the funds have not yet been claimed or settled by the payout provider, our team can initiate a reversal.' },
  { question: 'Can I cancel a pending transfer?', answer: 'You can cancel a transfer directly from your transaction history inside the app as long as the status is marked as \'Processing\' or \'Pending\'.' },
  { question: 'Which payment methods can I use to fund a transfer?', answer: 'You can fund transfers using debit cards, credit cards, bank account transfers, or directly from your available SwyChr multi-currency wallet balance.' },
  { question: 'Is SwyChr licensed and regulated?', answer: 'Yes. SwyChr operates under licensed payment processing partnerships that adhere strictly to international financial compliance, anti-money laundering (AML), and KYC standards.' },
  { question: 'How do exchange rates work on SwyChr?', answer: 'We display guaranteed real-time exchange rates before you authorize your transfer. The rate shown at checkout is the exact rate applied to your transaction.' },
  { question: 'Will my recipient be charged any receiving fees?', answer: 'No, recipients do not pay any extra fees to receive funds deposited directly into their bank accounts or mobile money wallets.' },
  { question: 'What should I do if my transfer status says \'Failed\'?', answer: 'If a transfer fails, any deducted funds are automatically refunded to your original payment method or wallet within a few minutes. Check your notification tab for exact failure reasons.' },
  { question: 'Can I schedule recurring or automated transfers?', answer: 'Yes, you can set up recurring transfers directly inside the app for regular obligations like family support or payroll.' },
  { question: 'How do I update my profile or contact information?', answer: 'Navigate to Settings > Profile Settings inside the mobile app to edit your email address, phone number, or residential address.' },
  { question: 'What should I do if I forget my password or account PIN?', answer: 'Click on \'Forgot Password?\' on the sign-in screen to receive a secure password reset link via your registered email or SMS verification code.' },
  { question: 'How do I contact customer support if I need further help?', answer: 'You can reach our 24/7 support team via live chat in the app, or email us directly at support@swychr.com.' }
]);

const filteredFaqs = computed(() => {
  if (!searchQuery.value) return faqs.value;
  const q = searchQuery.value.toLowerCase();
  return faqs.value.filter(item => 
    item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
  );
});
</script>

<style scoped>
.page-container { 
  min-height: 80vh; 
  background: #fafafa; 
  padding: 60px 20px; 
  display: flex; 
  justify-content: center; 
  font-family: 'Montserrat', sans-serif; 
}

.content-card { 
  background: #fff; 
  max-width: 850px; 
  width: 100%; 
  padding: 40px; 
  border-radius: 20px; 
  border: 1px solid #f0e6f5; 
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  box-sizing: border-box;
}


.badge { 
  display: inline-block; 
  background: #f3e8ff; 
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

.search-wrapper {
  margin-bottom: 20px;
}

.faq-search-input {
  width: 100%;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1.5px solid #e2d4eb;
  background: #faf5ff;
  font-size: 0.95rem;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.faq-search-input:focus {
  border-color: #8c1bc1;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(140, 27, 193, 0.1);
}

hr { 
  border: 0; 
  height: 1px; 
  background: #eee; 
  margin-bottom: 30px; 
}


.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-box { 
  background: #faf5ff; 
  padding: 18px 20px; 
  border-radius: 14px; 
  border: 1px solid #f0d8ff; 
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;
}

.faq-box:hover {
  border-color: #8c1bc1;
}

.faq-box.active {
  background: #ffffff;
  border-color: #8c1bc1;
  box-shadow: 0 4px 14px rgba(140, 27, 193, 0.08);
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.faq-box h3 { 
  color: #8c1bc1; 
  margin: 0; 
  font-size: 1.05rem; 
  font-weight: 700;
  line-height: 1.4;
}

.faq-toggle-icon {
  font-size: 1.4rem;
  font-weight: 700;
  color: #8c1bc1;
  flex-shrink: 0;
  line-height: 1;
}

.faq-body {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f3e8ff;
}

.faq-box p {
  color: #444;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
}

.no-results {
  text-align: center;
  padding: 30px 10px;
  color: #777;
  font-size: 0.95rem;
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

  .faq-box {
    padding: 14px 16px;
  }

  .faq-box h3 {
    font-size: 0.95rem;
  }

  .faq-box p {
    font-size: 0.88rem;
  }
}
</style>