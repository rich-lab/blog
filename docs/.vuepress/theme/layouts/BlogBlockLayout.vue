<template>
  <div class="blog-block-layout">
    <section class="main-post">
      <BlogPostPage class="fisrt-post" :page="pages[0]"/>
      <div class="second-posts">
        <BlogPostPage class="second-post" :page="pages[1]"/>
        <BlogPostPage class="second-post" :page="pages[2]"/>
      </div>
    </section>
    <section class="minor-posts">
      <BlogPostPage class="minor-post" :page="pages[3]"/>
      <BlogPostPage class="minor-post" :page="pages[4]"/>
      <BlogPostPage class="minor-post" :page="pages[5]"/>
    </section>
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
  
  .blog-block-layout {
    .main-post {
      padding $collapse
      height: calc((100vh - 60px) * 0.6)
      display flex
      
      .fisrt-post {
        flex 1
        margin-right $semiCollapse
        
        .post-overlay {
          background-color #000
        }
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
            
            .post-overlay {
              background-color #333
            }
          }
          
          &:nth-child(2) {
            margin-top $semiCollapse
            
            .post-overlay {
              background-color #111
            }
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
          margin-right: $semiCollapse
          
          .post-overlay {
            background-color #111
          }
        }
        
        &:nth-child(2) {
          margin 0 $semiCollapse
          flex-grow 2
          
          .post-overlay {
            background-color #222
          }
        }
        
        &:nth-child(3) {
          margin-left $semiCollapse
          flex-grow 1
          
          .post-overlay {
            background-color #000
          }
        }
        
      }
    }
    
  }
</style>
