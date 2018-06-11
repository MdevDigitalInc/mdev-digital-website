<template>
  <header class="mdev-hero-mask" data-main-hero >
    <div class="mdev-main-hero" :style="heroStyles"></div>
  </header>
</template>



<script>

export default {
  name: 'MainHero',
  data: function() {
    return{
      heroStyles: {
        backgroundColor: '#0f1617',
        backgroundImage: 'url(' + this.loadImage('MDEV-main-hero.png') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      },
    };
  },
  methods:{
    // Get Compiled image Paths
    loadImage(path){
      return require('../../assets/images/' + path);
    }
  }
};

</script>

<style lang="scss">

	/*-------------------------------------*/
	/* HERO MAIN Component Styles
	/--------------------------------------*/
  .mdev-main-hero {
    width: 100%;
    position: relative;
    overflow: hidden;
    @include responsive-ratio(1920,1080);
    max-height: 70vh;
  }

  .mdev-hero-mask {
    overflow: hidden;
    position: relative;
    max-height: 97vh;
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
    transition: opacity .8s, clip-path 1.2s;
    opacity: 0;
  }

  .--mask-active {
    clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    opacity: 1;
  }
	/*--------------------------------------*/

</style>
