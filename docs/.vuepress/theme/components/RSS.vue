<template>
  <a :href="$withBase('/rss.xml')" class="feed">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rss">
      <path d="M4 11a9 9 0 0 1 9 9"></path>
      <path d="M4 4a16 16 0 0 1 16 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </svg>
  </a>
</template>

<style lang="stylus">
  .feed {
    display: flex!important;
    height: 100%;
    margin-left 1rem;
  }
</style>
