<template>
  <ParentLayout class="layout-post">
    <template slot="page-top">
      <Author/>
    </template>
  </ParentLayout>
</template>

<script>
  import ParentLayout from './Layout.vue'
  import Author from '../components/Author'

  export default {
    components: {
      ParentLayout,
      Author
    },
    
    created() {
      // console.log(this.$page.frontmatter.author)
    }
  }
</script>
