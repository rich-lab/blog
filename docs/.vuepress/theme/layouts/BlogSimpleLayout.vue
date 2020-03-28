<template>
  <div class="blog-simple-layout">
    <BlogPostPage
      v-for="page in pages"
      :page="page"
      class="blog-simple-layout-post"
    />
  </div>
</template>

<script>
  import BlogPostPage from './BlogPostPage'

  export default {
    props: {
      pages: Array
    },

    components: {
      BlogPostPage
    }
  }
</script>

<style lang="stylus">
  $collapse = 1rem
  $semiCollapse = $collapse/ 2
  
  .blog-simple-layout {
    .blog-simple-layout-post {
      margin-bottom $semiCollapse
      .post-title {
        font-size 1.5rem;
      }
      
      .post-summary {
        font-size 0.8rem;
      }
    }
  }
</style>
