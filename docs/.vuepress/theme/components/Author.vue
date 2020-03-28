<template>
  <div ref="author" class="authors">
    <div
      v-for="author in authors"
      class="author"
    >
      <span class="type-text">{{ author.text }}</span>
      <a
        class="author-image"
        :href="`https://github.com/${author.person}`"
        target="_blank"
      >
        <img
          :src="$withBase(`/authors/${author.person}.png`)"
          :alt="author.person"
        >
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const target = document.querySelector('.theme-default-content h1 .author')
      if (!target) {
        const el = document.querySelector('.theme-default-content h1')
        el.appendChild(this.$refs.author)
      }
    },

    computed: {
      authors() {
        return [{
          person: this.frontmatter.author,
          text: this.authorText,
        }, {
          person: this.frontmatter.revisor,
          text: this.revisionText,
        }].filter(i => i.person)
      },

      frontmatter() {
        return this.$page.frontmatter || {}
      },

      authorText() {
        return this.frontmatter.type === 'translation'
          ? 'Translated by'
          : 'Author'
      },

      revisionText() {
        return 'Revised by'
      }
    }
  }
</script>

<style lang="stylus">
  .authors {
    display flex
    align-items flex-end
    justify-content flex-end
    
    @media (max-width: $MQMobile) {
      display block
      .author {
        margin-top: 1rem
        margin-left 0
      }
    }
  }
  
  .author {
    margin-left 1.5rem
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .author-image {
    display: block;
    width: 40px;
    height: 40px;
    box-shadow 0px 0px 5px 0px rgba(132, 132, 132, 0.2);
    border-radius: 50%;
    overflow: hidden;
    display inline-block;
    vertical-align center !important
    margin-left 10px
    
    &::after {
      display none
    }
  }
  
  .type-text {
    font-size 0.9rem
    font-family: "Cardo", "Times New Roman", Times, serif;
    letter-spacing 0px
    font-weight lighter
    text-transform none
    color #ccc
  }
</style>
