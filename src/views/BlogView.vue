<template>
  <div class="blog-wrapper">
    <!-- Top Product Header -->
    <header class="blog-hero">
      <div class="hero-inner">
        <h1 class="hero-title">Insights & Articles</h1>
        <p class="hero-subtitle">The latest updates, guides, and fintech insights from Swychremit.</p>
      </div>
    </header>

    <div class="blog-container">
      <!-- Main Content (Left Column) -->
      <main class="blog-main">
        <div v-if="loading" class="blog-loading">Loading articles...</div>

        <div v-else-if="filteredArticles.length === 0" class="no-articles">
          No articles found matching your criteria.
        </div>

        <div v-else class="posts-feed">
          <article 
            v-for="article in filteredArticles" 
            :key="article._id" 
            class="wp-style-card"
          >
            <!-- Card Image -->
            <div class="card-media" v-if="article.imageUrl">
              <img :src="article.imageUrl" :alt="article.title" />
            </div>

            <!-- Card Info -->
            <div class="card-body">
              <div class="card-categories">
                <span 
                  v-for="(cat, idx) in (article.categories || ['PAYMENTS'])" 
                  :key="idx" 
                  class="cat-tag"
                >
                  {{ cat }}
                </span>
              </div>

              <h2 class="card-heading">
                <router-link :to="`/blog/${article.slug}`">{{ article.title }}</router-link>
              </h2>

              <p v-if="article.excerpt" class="card-summary">
                {{ article.excerpt }}
              </p>

              <div class="card-byline">
                <span class="byline-date">{{ formatDate(article.publishedAt) }}</span>
                <span class="byline-separator">•</span>
                <span class="byline-author">By {{ article.author }}</span>
              </div>
            </div>
          </article>
        </div>
      </main>

      <!-- Sidebar (Right Column) -->
      <aside class="blog-sidebar">
        <!-- Search Box -->
        <div class="sidebar-widget search-widget">
          <h3 class="widget-title">Search</h3>
          <div class="search-input-wrapper">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search articles..."
            />
          </div>
        </div>

        <!-- Categories List -->
        <div class="sidebar-widget">
          <h3 class="widget-title">Categories</h3>
          <ul class="widget-list">
            <li 
              v-for="cat in categories" 
              :key="cat"
              :class="{ active: activeCategory === cat }"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </li>
          </ul>
        </div>

        <!-- Featured / Recent Posts Widget -->
        <div class="sidebar-widget" v-if="articles.length > 0">
          <h3 class="widget-title">Featured Posts</h3>
          <div class="widget-recent-posts">
            <div 
              v-for="post in articles.slice(0, 3)" 
              :key="post._id" 
              class="recent-item"
            >
              <router-link :to="`/blog/${post.slug}`" class="recent-title">
                {{ post.title }}
              </router-link>
              <div class="recent-date">{{ formatDate(post.publishedAt) }}</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
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
   const query = `*[_type == "post" && (site == "swychremit" || !defined(site))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "categories": categories[]->title,
  "author": coalesce(author->name, author, "Swychremit Team"),
  publishedAt,
  "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url),
  callout,
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

<style scoped>
.blog-wrapper {
  background-color: #fafafa;
  min-height: 100vh;
  padding-bottom: 80px;
}

.blog-hero {
  background: linear-gradient(180deg, #f5f3ff 0%, #fafafa 100%);
  padding: 60px 20px 40px;
  text-align: center;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1e1b4b;
  margin-bottom: 8px;
}

.hero-subtitle {
  color: #6b7280;
  font-size: 1.05rem;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 992px) {
  .blog-container {
    grid-template-columns: 2.3fr 1fr;
  }
}

/* Post Card (WordPress Style) */
.wp-style-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

@media (min-width: 640px) {
  .wp-style-card {
    flex-direction: row;
    align-items: center;
  }
}

.wp-style-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.card-media {
  width: 100%;
  max-width: 240px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #f8fafc;
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  flex: 1;
}

.card-categories {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.cat-tag {
  color: #7c3aed;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.card-heading {
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0 0 10px;
}

.card-heading a {
  color: #0f172a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.card-heading a:hover {
  color: #7c3aed;
}

.card-summary {
  color: #64748b;
  font-size: 0.925rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-byline {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #94a3b8;
}

.byline-author {
  font-weight: 500;
  color: #475569;
}

/* Sidebar Widgets */
.sidebar-widget {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  margin-bottom: 24px;
}

.widget-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #f1f5f9;
}

.search-input-wrapper input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.95rem;
  outline: none;
  background: #f8fafc;
}

.search-input-wrapper input:focus {
  border-color: #7c3aed;
  background: #ffffff;
}

.widget-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.widget-list li {
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #475569;
  font-size: 0.92rem;
  transition: all 0.2s;
}

.widget-list li:hover {
  background: #f5f3ff;
  color: #7c3aed;
}

.widget-list li.active {
  background: #7c3aed;
  color: #ffffff;
  font-weight: 600;
}

.recent-item {
  margin-bottom: 14px;
}

.recent-title {
  display: block;
  font-size: 0.92rem;
  font-weight: 600;
  color: #1e293b;
  text-decoration: none;
  line-height: 1.4;
  margin-bottom: 4px;
}

.recent-title:hover {
  color: #7c3aed;
}

.recent-date {
  font-size: 0.78rem;
  color: #94a3b8;
}
</style>