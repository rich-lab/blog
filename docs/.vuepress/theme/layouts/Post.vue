<template>
  <ParentLayout class="layout-post">
    <template slot="page-top">
      <Author
        v-if="$page.frontmatter && $page.frontmatter.author"
        :name="$page.frontmatter.author"
        :type="$page.frontmatter.type"
      />
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
      console.log(this.$page.frontmatter.author)
    }
  }
</script>
