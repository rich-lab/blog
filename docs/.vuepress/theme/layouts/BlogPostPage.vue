<template>
  <router-link
    :to="apage.path || '#'"
    class="blog-post"
    :style="{
      backgroundImage: `url(${apage.frontmatter.hero})`
    }"
  >
    <div class="post-overlay"></div>
    <div class="post-info">
      <span class="post-title">{{ apage.title }}</span><br>
      <span class="post-summary">{{ apage.frontmatter.summary }}</span>
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
    background-position center
    background-size cover
    background-repeat no-repeat
    display flex
    justify-content center
    align-items flex-end
    position relative
    padding 3rem 1.8rem
    
    &:hover {
      text-decoration none !important
    }
    
    .post-overlay {
      position absolute
      top: 0
      width: 100%
      height: 100%
      left 0
      background: #000;
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
      color #ccc
      font-family: "Montserrat", sans-serif;
      font-weight bold
      font-size 1.5rem;
      transition color 0.3s
    }
    
    .post-summary {
      display inline-block
      margin-top 1rem
      font-family Arial
      font-size 0.8rem;
      color #aaa
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
