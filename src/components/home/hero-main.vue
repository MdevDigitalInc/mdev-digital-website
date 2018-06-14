<template>
  <header class="mdev-main-header" >
    <div class="mdev-hero-mask" data-main-hero >
      <div class="mdev-main-hero" :style="heroStyles"></div>
    </div>
    <div class="mdev-header-arrow-mask">
      <div class="mdev-main-header-arrow"></div>
    </div>
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
  @import '../../assets/styles/keyframes/hero-anim.scss';

  // Containers
  .mdev-main-header {
    width: 100%;
    position: relative;
    overflow: visible;
  }

  .mdev-main-hero {
    width: 100%;
    position: relative;
    overflow: hidden;
    @include responsive-ratio( 1920, 1080 );
    max-height: 70vh;
    z-index: 1;
  }

  // Masks
  .mdev-hero-mask {
    overflow: hidden;
    position: relative;
    max-height: 97vh;
    transition: opacity .8s;
    opacity: 0;
  }

  .mdev-header-arrow-mask {
    position: absolute;
    top: 8px;
    padding-top: 50.25%;
    width: 100%;
    clip-path: $hero-polygon-end; /*../styles/keyframes/hero-anim.scss */
    z-index: -1;
  }

  // Animation Vars
  $mask-hero-anim-time: 1s;
  $mask-anim-delay: .8s;
  $mask-arrow-anim-time: 2.2s;

  .mdev-main-header-arrow {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    padding-top: 80%;
    background: linear-gradient(top, rgba(194,236,47,1) 0%, rgba(181,221,45,1) 7%, rgba(71,91,30,0) 87%, rgba(10,19,21,0) 100%);
    opacity: 0;
    background-position: 0% 25%;
    transform: translate3d( 0, -480px, 0);
    animation: hero-gradient infinite;
    animation-duration: $mask-arrow-anim-time;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: $mask-hero-anim-time + $mask-anim-delay;
  }

  .--mask-active {
    /*clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);i*/
    opacity: 1;
    animation: hero-animation;
    animation-duration: $mask-hero-anim-time;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
	/*--------------------------------------*/

</style>
