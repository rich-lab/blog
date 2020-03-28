<template>
  <router-link
    :to="apage.path || '#'"
    class="blog-post"
  >
    <div class="post-hero" :style="{backgroundImage: `url(${apage.frontmatter.hero})`}"></div>
    <div class="post-overlay"></div>
    <div class="post-info">
      <span class="post-title">{{ apage.title }}</span><br>
      <span class="post-description">{{ apage.frontmatter.description }}</span>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: ['page'],

    computed: {
      apage() {
        return this.page || {
          title: '',
          frontmatter: {}
        }
      }
    }
  }
</script>

<style lang="stylus">
  .blog-post {
    margin-bottom $collapse
    display flex
    justify-content center
    align-items flex-end
    position relative
    padding 3rem 1.8rem 1.8rem 1.8rem
    
    &:hover {
      text-decoration none !important
    }
    
    .post-hero {
      background-position center
      background-size cover
      background-repeat no-repeat
      position absolute
      top: 0
      width: 100%
      height: 100%
      left 0
      filter: grayscale(50%) brightness(0.7);
    }
    
    .post-overlay {
      position absolute
      top: 0
      left 0
      width: 100%
      height: 100%
      // background-image: linear-gradient(to top, #000, #333, #aaa);
      background-color: #000;
      opacity: 0.7;
      z-index 1
      transition all 0.3s
    }
    
    .post-info {
      z-index 2
    }
    
    .post-title {
      text-align left
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      letter-spacing 5px
      color #eee
      font-family: "Montserrat", sans-serif;
      font-weight bold
      font-size 1.5rem;
      transition color 0.3s
    }
    
    .post-description {
      letter-spacing 0.5px
      display inline-block
      margin-top 1rem
      font-family Arial
      font-size 0.8rem;
      color #ddd
      transition color 0.3s
      font-weight 400
      /*font-style italic*/
      /*text-decoration underline*/
      
      &:hover {
        color #ccc
      }
    }
    
    &:hover {
      .post-overlay {
        opacity: 0.6;
      }
      
      .post-title {
        color #fff
      }
    }
  }
</style>
