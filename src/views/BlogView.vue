<template>
  <div class="blog-container">
    
    <!-- 🚀 Hero Banner -->
    <header class="blog-hero">
      <div class="hero-content">
        <span class="blog-badge">SwyChr Insights</span>
        <h1>Glance through our blog and view the amazing contents of SwyChr</h1>
        <p class="hero-subtext">
          Welcome to the SwyChr Blog. Stay updated on cross-border remittances, virtual card tips, and fintech news across Africa and worldwide.
        </p>
      </div>
    </header>

    <main class="blog-body">
      
      <!-- 🔎 Category Filters & Search -->
      <div class="blog-controls">
        <div class="category-pills">
          <button 
            v-for="cat in categories" 
            :key="cat"
            class="pill-btn"
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search articles..."
          />
        </div>
      </div>

      <!-- 📰 Articles Grid -->
      <div class="articles-grid">
        <article 
          v-for="post in filteredPosts" 
          :key="post.id" 
          class="post-card"
        >
          <div class="post-image-wrapper">
            <span class="category-tag">{{ post.category }}</span>
            <img :src="post.image" :alt="post.title" class="post-img" />
          </div>

          <div class="post-content">
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            
            <div class="post-meta">
              <span class="author-name">By {{ post.author }}</span>
              <span class="post-date">{{ post.date }}</span>
            </div>

            <a :href="post.link" class="read-more-btn" target="_blank" rel="noopener">
              Read Article →
            </a>
          </div>
        </article>
      </div>

      <!-- 📥 Newsletter Subscription CTA -->
      <section class="newsletter-banner">
        <div class="newsletter-box">
          <h2>Subscribe to SwyChr Pulse</h2>
          <p>Get the latest FX insights, financial guides, and product releases sent straight to your inbox.</p>
          <form @submit.prevent="handleSubscribe" class="subscribe-form">
            <input type="email" v-model="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
          <p v-if="subscribed" class="success-msg">✅ Thank you for subscribing!</p>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

/* ── Reactive State ───────────────────────────────────────────────── */
const selectedCategory = ref('All');
const searchQuery = ref('');
const email = ref('');
const subscribed = ref(false);

const categories = ['All', 'Business', 'Payments', 'Virtual Cards', 'Company News'];

/* ── Blog Data ────────────────────────────────────────────────────── */
const posts = ref([
  {
    id: 1,
    title: 'Why SwyChr Is the Best App to Send Money from Virginia to Over 18 African Countries',
    category: 'Business',
    excerpt: 'Are you looking for the easiest way to send money from Virginia to anywhere in Africa without long bank queues or exorbitant exchange rates?',
    author: 'Amina',
    date: 'December 29, 2025',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.swychr.com/'
  },
  {
    id: 2,
    title: 'Why SwyChr Is the Best App to Send Money from Texas to Over 18 African Countries',
    category: 'Business',
    excerpt: 'Send money seamlessly from Texas back home. Enjoy real-time direct-to-mobile-money transfers with zero hidden conversion costs.',
    author: 'Amina',
    date: 'December 29, 2025',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.swychr.com/'
  },
  {
    id: 3,
    title: '10 Reasons Why SwyChr Is the #1 Virtual Card Provider in Sub-Saharan Africa',
    category: 'Virtual Cards',
    excerpt: 'As a freelancer or online business owner in Africa, paying for global services like AWS, Facebook Ads, or Google Workspace can be tough. Here is why SwyChr virtual cards solve that.',
    author: 'Amina',
    date: 'November 2, 2025',
    image: 'https://images.unsplash.com/photo-1556742049-0a67dd3f1244?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.swychr.com/'
  },
  {
    id: 4,
    title: 'SwyChr Joins Google for Startups Cloud Program to Accelerate Growth',
    category: 'Company News',
    excerpt: 'We are thrilled to announce that SwyChr has officially been admitted into the Google for Startups Cloud Program, unlocking infrastructure support for our pan-African rails.',
    author: 'Amina',
    date: 'May 30, 2025',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.swychr.com/'
  },
  {
    id: 5,
    title: 'Borderless Money Moves: How SwyChr Makes Cash Transfers from Asia to Africa Effortless',
    category: 'Payments',
    excerpt: 'Connecting trade corridors between Asian suppliers and African merchants with instant local currency payouts.',
    author: 'Amina',
    date: 'May 23, 2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.swychr.com/'
  },
  {
    id: 6,
    title: 'Cameroon to Nigeria Transfers Just Got Simpler Thanks to SwyChr Direct Rails',
    category: 'Payments',
    excerpt: 'Cross-border trade between Central and West Africa receives a major boost with instant XAF to NGN currency swaps.',
    author: 'Amina',
    date: 'May 7, 2025',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.swychr.com/'
  }
]);

/* ── Computed Filtering ───────────────────────────────────────────── */
const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const matchesCategory = selectedCategory.value === 'All' || post.category === selectedCategory.value;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

/* ── Methods ──────────────────────────────────────────────────────── */
const handleSubscribe = () => {
  if (email.value) {
    subscribed.value = true;
    email.value = '';
    setTimeout(() => { subscribed.value = false; }, 4000);
  }
};
</script>

<style scoped>
.blog-container {
  min-height: 100vh;
  background-color: #fafafa;
  font-family: 'Montserrat', sans-serif;
  color: #1a1a2e;
}

/* Hero Section */
.blog-hero {
  background: linear-gradient(135deg, #1a0a2e 0%, #3b1160 50%, #8c1bc1 100%);
  color: #ffffff;
  padding: 80px 20px 60px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.blog-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: #f3e8ff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 100px;
  text-transform: uppercase;
  margin-bottom: 16px;
  letter-spacing: 0.05em;
}

.blog-hero h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 16px;
}

.hero-subtext {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

/* Controls (Filters & Search) */
.blog-body {
  max-width: 1140px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.blog-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.category-pills {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pill-btn {
  background: #ffffff;
  border: 1px solid #e2d4eb;
  color: #555;
  padding: 8px 18px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 200ms ease;
}

.pill-btn:hover, .pill-btn.active {
  background: #8c1bc1;
  color: #ffffff;
  border-color: #8c1bc1;
  box-shadow: 0 4px 12px rgba(140, 27, 193, 0.25);
}

.search-box input {
  padding: 10px 18px;
  border-radius: 100px;
  border: 1px solid #e2d4eb;
  width: 260px;
  font-size: 0.9rem;
  outline: none;
}

.search-box input:focus {
  border-color: #8c1bc1;
}

/* Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.post-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f0e6f5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(140, 27, 193, 0.12);
}

.post-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #8c1bc1;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 100px;
  text-transform: uppercase;
}

.post-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 12px;
  color: #1a1a2e;
}

.post-excerpt {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 16px;
  padding-top: 12px;
  border-top: 1px solid #f5f5f5;
}

.read-more-btn {
  color: #8c1bc1;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-block;
  transition: transform 160ms ease;
}

.read-more-btn:hover {
  transform: translateX(4px);
}

/* Newsletter Banner */
.newsletter-banner {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  border-radius: 20px;
  padding: 40px 20px;
  text-align: center;
  border: 1px solid #d8b4fe;
}

.newsletter-box {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-box h2 {
  font-size: 1.8rem;
  color: #3b1160;
  margin-bottom: 10px;
}

.newsletter-box p {
  color: #6b21a8;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.subscribe-form {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.subscribe-form input {
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #c084fc;
  width: 65%;
  outline: none;
}

.subscribe-form button {
  background: #8c1bc1;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 100px;
  font-weight: 700;
  cursor: pointer;
}

.success-msg {
  color: #15803d !important;
  font-weight: 700;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .blog-hero h1 { font-size: 1.8rem; }
  .blog-controls { flex-direction: column; align-items: stretch; }
  .subscribe-form { flex-direction: column; }
  .subscribe-form input { width: 100%; }
}
</style>