<template>
  <div
    class="author"
    ref="author"
  >
    <span class="type-text">{{ typeText }}</span>
    <a
      class="author-image"
      :href="`https://github.com/${name}`"
      target="_blank"
    >
      <img :src="$withBase(`/authors/${name}.png`)" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    props: [
      'name',
      'type'
    ],

    mounted() {
      const target = document.querySelector('.theme-default-content h1 .author')
      if (!target) {
        const el = document.querySelector('.theme-default-content h1')
        el.appendChild(this.$refs.author)
      }
    },

    computed: {
      typeText() {
        return this.type === 'translation'
          ? 'Translated by'
          : 'Author'
      }
    }
  }
</script>

<style lang="stylus">
  .author {
    text-align right
  }
  
  .author-image {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display inline-block;
    vertical-align center !important
    
    &::after {
      display none
    }
  }
  
  .type-text {
    font-size 0.9rem
    font-family Arial
    letter-spacing 0px
    font-weight lighter
    text-transform none
    color #ccc
  }
</style>
