<template>
  <div class="blog-page">
    <div class="blog-header-container">
     
      <div class="category-filters">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['filter-btn', { active: activeCategory === cat }]"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

    
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search articles..."
          class="search-input"
        />
      </div>
    </div>

    <div v-if="loading" class="blog-status">
      <p>Loading guides...</p>
    </div>
 
    <div v-else-if="filteredArticles.length === 0" class="blog-status">
      <p>No articles found for "{{ searchQuery }}".</p>
    </div>

    
    <div v-else class="articles-grid">
      <article
        v-for="article in filteredArticles"
        :key="article._id"
        class="article-card"
      >
        <div class="card-image-wrap">
          <img
            :src="article.imageUrl || '/placeholder-blog.jpg'"
            :alt="article.title"
            class="card-img"
          />
          <span class="category-badge">{{ article.category }}</span>
        </div>

        <div class="card-content">
          <h2 class="card-title">{{ article.title }}</h2>
          <p class="card-excerpt">{{ article.excerpt }}</p>

          <div class="card-meta">
            <span class="meta-author">By {{ article.author || 'Swychremit Team' }}</span>
            <span class="meta-date">{{ formatDate(article.publishedAt) }}</span>
          </div>

          <router-link :to="`/blog/${article.slug}`" class="read-article-link">
            Read Article →
          </router-link>
        </div>
      </article>
    </div>

   
    <section class="subscribe-banner">
      <h3>Subscribe to Swychremit Pulse</h3>
      <p>Get real-time FX insights, financial guides, and product updates sent straight to your inbox.</p>
      <div class="subscribe-input-group">
        <input type="email" placeholder="Enter your email address" />
        <button class="subscribe-btn">Subscribe</button>
      </div>
    </section>
  </div>
</template>

<script>
import { sanityClient } from '@/services/sanity';

export default {
  name: 'BlogView',
  data() {
    return {
      activeCategory: 'All',
      searchQuery: '',
      loading: true,
      articles: [],
       
      categories: ['All', 'Business', 'Payments', 'Virtual Cards', 'Company News']
    };
  },
  computed: {
    filteredArticles() {
      return this.articles.filter((article) => {
 
        const matchesCategory =
          this.activeCategory === 'All' ||
          article.category?.toLowerCase() === this.activeCategory.toLowerCase();

      
        const q = this.searchQuery.trim().toLowerCase();
        const matchesSearch =
          !q ||
          article.title?.toLowerCase().includes(q) ||
          article.excerpt?.toLowerCase().includes(q) ||
          article.category?.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      });
    }
  },
  async created() {
    await this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      this.loading = true;
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        category,
        author,
        publishedAt,
        "imageUrl": coverImage.asset->url,
        excerpt
      }`;

      try {
        this.articles = await sanityClient.fetch(query);
      } catch (err) {
        console.error('Error fetching articles from CMS:', err);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>