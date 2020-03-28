<template>
  <ParentLayout>
    <!--<CarbonAds slot="sidebar-top"/>-->
    <div slot="page-top">
      <slot name="page-top"></slot>
    </div>
    
    <div class="custom-page-bottom" slot="page-bottom">
      <!--<div slot="page-top">-->
        <!--<div class="sherry-edit-links">-->
          <!--<a class="yuque-link" target="_blank" :href="editLink">-->
            <!--<EditIcon/>-->
            <!--编辑此文档</a>-->
          <!--<a class="yuque-link" target="_blank" href="https://yuque.antfin-inc.com/sherry/topics/new?label_ids=28874">-->
            <!--<FeedbackIcon/>-->
            <!--反馈该文档</a>-->
        <!--</div>-->
      <!--</div>-->
      <Comments />
      <slot name="page-bottom"></slot>
    </div>
  </ParentLayout>
</template>

<script>
  import throttle from 'lodash.throttle'
  import ParentLayout from '@parent-theme/layouts/Layout.vue'
  import PageEdit from '@parent-theme/components/PageEdit.vue'
  import EditIcon from '../components/EditIcon.vue'
  import FeedbackIcon from '../components/FeedbackIcon.vue'

  const scrollSidebarLinkIntoView = throttle(function () {
    setTimeout(() => {
      const sidebarEls = document.getElementsByClassName('sidebar')
      if (sidebarEls.length > 0) {
        const sidebarEl = sidebarEls[0]
        const targetLink = sidebarEl.querySelector('.active.sidebar-link')
        targetLink && targetLink.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  }, 200)

  export default {
    components: {
      ParentLayout,
      EditIcon,
      FeedbackIcon,
    },

    created() {
      // console.log(this.editLink)
    },

    computed: {
      editLink() {
        return PageEdit.computed.editLink.call(this)
      }
    },

    methods: {
      ...PageEdit.methods,
    },
    
    mounted() {
      scrollSidebarLinkIntoView()
    },

    watch: {
      '$route': scrollSidebarLinkIntoView
    }
  }
</script>

<style lang="stylus">
  .custom-page-bottom
    max-width 740px
    margin 0 auto
    padding 0 2.5rem
  
  .sherry-edit-links
    text-align center
    margin-bottom 30px
    font-size 0
  
  .yuque-link
    font-size 14px
    border 1px solid #333
    padding 5px 10px
    color #333
    border-radius 5px
    font-weight 200
    text-decoration none
    
    &:first-child
      border-right 0
      border-top-right-radius 0
      border-bottom-right-radius 0
    
    &:nth-child(2)
      border-top-left-radius 0
      border-bottom-left-radius 0
    
    svg
      line-height 20px
      vertical-align text-bottom
</style>
