<template>
  <div class="blog-post-page" v-if="post">
    <div class="post-header">
      <span class="post-category">{{ post.category }}</span>
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-meta">
        <span>By {{ post.author || 'Swychremit Team' }}</span> • 
        <span>{{ formatDate(post.publishedAt) }}</span>
      </div>
    </div>

    <div class="post-hero-image" v-if="post.imageUrl">
      <img :src="post.imageUrl" :alt="post.title" />
    </div>

    
    <div class="post-content">
      <p class="post-lead">{{ post.excerpt }}</p>
      <div class="post-body">
       
        {{ post.bodyText }}
      </div>
    </div>

   
    <div class="post-cta-card">
      <h3>Ready to send money with low fees?</h3>
      <a 
        href="https://play.google.com/store/apps/details?id=com.swychr.swych_remit&hl=en" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="cta-download-btn"
      >
        Download Swychremit App
      </a>
    </div>
  </div>
  <div v-else-if="loading" class="blog-status">
    <p>Loading guide...</p>
  </div>
</template>

<script>
import { sanityClient } from '@/services/sanity';

export default {
  name: 'BlogPostView',
  data() {
    return {
      post: null,
      loading: true
    };
  },
  async created() {
    const slug = this.$route.params.slug;
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      category,
      author,
      publishedAt,
      "imageUrl": coverImage.asset->url,
      excerpt,
      "bodyText": body[].children[].text
    }`;

    try {
      this.post = await sanityClient.fetch(query, { slug });
      if (this.post?.title) {
        document.title = `${this.post.title} | Swychremit`;
      }
    } catch (err) {
      console.error('Error fetching post:', err);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';
      return new Date(dateString).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
};
</script>