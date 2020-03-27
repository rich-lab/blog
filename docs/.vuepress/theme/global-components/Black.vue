<template>
  <div class="black">
    <slot></slot>
    <div class="black-overlay"></div>
  </div>
</template>

<style lang="stylus">
  .black {
    cursor pointer
    font-size 0
    filter: grayscale(50%);
    position relative;
    transition all 0.3s;
    
    .black-overlay {
      /*box-shadow: 0px 0px 20px black inset*/
      position absolute
      top: 0
      width: 100%
      height: 100%
      left 0
      background: #000;
      opacity: 0.1;
      z-index 1;
      transition all 0.3s;
    }
    
    &:hover {
      filter: grayscale(0%);
      
      .black-overlay {
        background: transparent;
      }
    }
  }
</style>
