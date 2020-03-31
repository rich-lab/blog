<template>
  <p class="flex-center">
    <slot/>
  </p>
</template>

<style lang="stylus">
  .flex-center
    margin 2rem 0
    display flex
    justify-content center
    align-items center
    flex-direction column
</style>
