<template>
  <div class="article-page">
    <div v-if="loading" class="article-status">
      <p>Loading article...</p>
    </div>

    <div v-else-if="!post" class="article-status">
      <h2>Article Not Found</h2>
      <p>The post you are looking for does not exist or has been moved.</p>
      <router-link to="/blog" class="back-link">← Back to Blog</router-link>
    </div>

    <article v-else class="article-container">
      <nav class="article-nav">
        <router-link to="/blog" class="back-link">← Back to Insights</router-link>
      </nav>

      <header class="article-header">
        <div class="article-category" v-if="post.category">
          {{ post.category }}
        </div>
        <h1 class="article-title">{{ post.title }}</h1>
        <div class="article-byline">
          <span class="byline-author">By {{ post.author }}</span>
          <span class="byline-dot">•</span>
          <span class="byline-date">{{ formatDate(post.publishedAt) }}</span>
        </div>
      </header>

      <div class="article-featured-image" v-if="post.imageUrl">
        <img :src="post.imageUrl" :alt="post.title" />
      </div>

      <div class="article-callout" v-if="post.callout && post.callout.text">
        <p>
          {{ post.callout.text }}
          <a 
            v-if="post.callout.linkUrl" 
            :href="post.callout.linkUrl" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {{ post.callout.linkText || post.callout.linkUrl }}
          </a>
        </p>
      </div>

      <div class="article-body">
        <template v-if="Array.isArray(post.body)">
          <div v-for="(block, index) in post.body" :key="index" class="portable-block">
            <h2 v-if="block.style === 'h2'">
              <span v-for="(child, cIdx) in block.children" :key="cIdx">{{ child.text }}</span>
            </h2>
            <h3 v-else-if="block.style === 'h3'">
              <span v-for="(child, cIdx) in block.children" :key="cIdx">{{ child.text }}</span>
            </h3>
            
            <ul v-else-if="block.listItem === 'bullet'">
              <li>
                <span v-for="(child, cIdx) in block.children" :key="cIdx">{{ child.text }}</span>
              </li>
            </ul>

            <p v-else>
              <template v-for="(child, cIdx) in block.children" :key="cIdx">
                <strong v-if="child.marks && child.marks.includes('strong')">{{ child.text }}</strong>
                <em v-else-if="child.marks && child.marks.includes('em')">{{ child.text }}</em>
                <span v-else>{{ child.text }}</span>
              </template>
            </p>
          </div>
        </template>
        <p v-else-if="typeof post.body === 'string'">{{ post.body }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import { sanityClient } from '@/services/sanity';

export default {
  name: 'BlogPostView',
  data() {
    return {
      loading: true,
      post: null,
    };
  },
  async created() {
    await this.fetchPost();
  },
  watch: {
    '$route.params.slug': 'fetchPost'
  },
  methods: {
    async fetchPost() {
      this.loading = true;
      const slug = this.$route.params.slug;
      
      const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        category,
        "author": coalesce(author->name, author, "Swychremit Team"),
        publishedAt,
        "imageUrl": coalesce(mainImage.asset->url, coverImage.asset->url),
        callout,
        body
      }`;

      try {
        this.post = await sanityClient.fetch(query, { slug });
      } catch (err) {
        console.error('Error fetching post:', err);
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
.article-page {
  background-color: #ffffff;
  min-height: 80vh;
  padding: 40px 20px 80px;
}

.article-container {
  max-width: 800px;
  margin: 0 auto;
}

.article-nav {
  margin-bottom: 24px;
}

.back-link {
  color: #7c3aed;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
}

.back-link:hover {
  text-decoration: underline;
}

.article-category {
  color: #7c3aed;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.article-title {
  font-size: 2.25rem;
  line-height: 1.3;
  color: #0f172a;
  font-weight: 800;
  margin-bottom: 16px;
}

.article-byline {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 32px;
}

.article-featured-image {
  width: 100%;
  max-height: 440px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 36px;
}

.article-featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-callout {
  background: #f5f3ff;
  border-left: 4px solid #7c3aed;
  padding: 16px 20px;
  border-radius: 4px;
  margin-bottom: 32px;
  font-size: 1rem;
  color: #1e1b4b;
}

.article-callout a {
  color: #7c3aed;
  font-weight: 600;
  margin-left: 6px;
  text-decoration: underline;
}

.article-body {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #334155;
}

.article-body h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  margin: 40px 0 16px;
}

.article-body h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #0f172a;
  margin: 32px 0 12px;
}

.article-body p {
  margin-bottom: 24px;
}

.article-body ul {
  padding-left: 24px;
  margin-bottom: 24px;
}

.article-body li {
  margin-bottom: 8px;
}

.article-status {
  text-align: center;
  padding: 80px 20px;
  color: #64748b;
}
</style>