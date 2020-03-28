<template>
  <ParentLayout class="layout-post">
    <template slot="page-top">
      <Author/>
    </template>
    <template slot="page-bottom">
      <Recommend/>
    </template>
  </ParentLayout>
</template>

<script>
  import ParentLayout from './Layout.vue'
  import Author from '../components/Author'
  import Recommend from '../components/Recommend'

  export default {
    components: {
      ParentLayout,
      Author,
      Recommend,
    },

    created() {
      // console.log(this.$page.frontmatter.author)
    }
  }
</script>
