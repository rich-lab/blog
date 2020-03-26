<template>
  <div
    class="type-text"
    ref="author"
  >
    <span>{{ typeText }}</span>
    <a
      :href="`https://github.com/${name}`"
      class="author"
      target="_blank"
      :style="{
      backgroundImage: `url(${`https://github.com/${name}.png`})`
    }"
    >
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
      const el = document.querySelector('.theme-default-content h1')
      el.appendChild(this.$refs.author)
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
  .type-text {
    text-align right
  }
  
  .author {
    margin-left: 10px;
    background-size: cover;
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
    font-size 1rem
    font-family Arial
    letter-spacing 0px
    font-weight lighter
    text-transform none
    color #ddd
  }
</style>
