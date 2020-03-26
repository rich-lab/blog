<template>
  <ParentLayout>
    <template slot="page-top">
      <div class="blog-layout">
        <section class="main-post">
          <div class="fisrt-post"></div>
          <div class="second-posts">
            <div class="second-post"></div>
            <div class="second-post"></div>
          </div>
        </section>
        <section class="minor-posts">
          <div class="minor-post"></div>
          <div class="minor-post"></div>
          <div class="minor-post"></div>
        </section>
        <section class="rest-posts">
          <router-link
            v-for="page in $pagination.pages"
            :to="page.path"
            class="blog-post"
            :style="{
              backgroundImage: `url(${page.frontmatter.hero})`
            }"
          >
            <div class="post-overlay"></div>
            <div class="post-info">
              <span
                class="post-title"
              >
              {{ page.title }}
            </span>
            </div>
          </router-link>
        </section>
      </div>
      <Pagination v-if="$pagination.length > 1"/>
    </template>
  </ParentLayout>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue'
  import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

  export default {
    components: {
      ParentLayout,
      Pagination,
    },

    created() {
      console.log(this.$pagination)
      console.log(this.$pagination.pages)
    }
  }
</script>

<style lang="stylus">
  $collapse = 1rem
  $semiCollapse = $collapse/ 2
  
  .blog-layout {
    padding-top 60px
    max-width 1024px
    margin 0 auto
  }
  
  .main-post {
    padding $collapse
    height: calc((100vh - 60px) * 0.6)
    display flex
    
    .fisrt-post {
      flex 1
      background #eee
      margin-right $semiCollapse
    }
    
    .second-posts {
      margin-left $semiCollapse
      flex: 1
      display flex
      flex-direction column
      
      .second-post {
        flex 1
        
        &:nth-child(1) {
          margin-bottom $semiCollapse
          background #aaa
        }
        
        &:nth-child(2) {
          margin-top $semiCollapse
          background #555
        }
      }
    }
  }
  
  .minor-posts {
    padding 0 $collapse
    height: calc((100vh - 60px) * 0.4)
    display flex
    
    .minor-post {
      height 100%
      
      &:nth-child(1) {
        flex-grow 1
        margin-right $semiCollapse
        background #777
      }
      
      &:nth-child(2) {
        background #eee
        margin 0 $semiCollapse
        flex-grow 2
      }
      
      &:nth-child(3) {
        background #ccc
        margin-left $semiCollapse
        flex-grow 1
      }
      
    }
  }
  
  .rest-posts {
    padding $collapse
    
    .blog-post {
      margin-bottom $collapse
      height: 200px;
      background-position center
      background-size cover
      background-repeat no-repeat
      display flex
      justify-content center
      align-items center
      position relative
      
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
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        border 1px solid #ccc
        padding 5px 10px
        letter-spacing 5px
        color #ccc
        font-family: "Montserrat", sans-serif;
        font-size 30px
        font-weight 200
        transition color 0.3s, border 0.3s
      }
      
      &:hover {
        .post-overlay {
          opacity: 0.5;
        }
        
        .post-title {
          border 1px solid white
          color #fff
        }
      }
    }
  }
</style>
