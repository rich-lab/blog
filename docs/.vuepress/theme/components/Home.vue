<template>
  <section class="home">
    <div class="home-overlay"></div>
    <div class="home-intro">
      <div class="home-intro-wrapper">
        <p class="italic">Oh, hello, nice to meet you!</p>
        <h1>WELCOME TO RichLab's WORLD!</h1>
        <p class="italic">Professional & Creative & Freedom & love.</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="stylus">
  .home {
    background-image: url(https://gw.alipayobjects.com/zos/finxbff/compress-tinypng/3b2fcbee-aff1-4be3-8205-6b20a430aaff.png);
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #111;
    min-height: 600px;
    padding: 0;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    background-attachment: fixed;
  }
  
  .home-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    z-index: 2;
    opacity: 0.6;
  }
  
  .home-intro {
    z-index: 3;
    color $colorLight;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    
    display flex
    align-content center
    justify-content center
    margin auto
    
    .home-intro-wrapper {
      padding: 1.5rem;
      height 300px;
      margin-top 20%;
    }
  }
  
  .home-intro p {
    font-style italic
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }
  
  h1 {
    font-family: "Montserrat", sans-serif;
  }
</style>
