<template>
  <p class="card-link" align="center">
    <slot></slot>
  </p>
</template>

<style lang="stylus">
  .card-link
    a::after
      display none
</style>
