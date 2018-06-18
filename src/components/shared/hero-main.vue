<template>
  <header class="mdev-main-header" >
    <div class="mdev-hero-mask" data-main-hero >
      <slot></slot>
      <div class="mdev-page-title" data-main-title>
        <h1>{{ pageTitle }}</h1>
      </div>
    </div>
    <div class="mdev-header-arrow-mask" data-main-arrow >
      <div class="mdev-main-header-arrow"></div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'MainHero',

  methods:{
    // Get Compiled image Paths
    loadImage(path){
      return require('../../assets/images/' + path);
    }
  },

  props: [ 'pageTitle' ],

  mounted: function(){
    // Resize timer to debounce scroll
    let resizeTimer;
    // Adjust Arrow height
    function adjustArrow() {
      let height;
      height = $('[data-main-hero]').outerHeight(true);
      $('[data-main-arrow]').css({
          'height': height + 'px'
        });
      $('[data-main-title]').css({
          'height': height + 'px'
        });
    }
    // Run for first time on first tick
    this.$nextTick(function () {
      adjustArrow();
    });

    // Adjust arrow size on resize
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(adjustArrow, 10);
    });
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
  top: 3px;
  width: 100%;
  max-height: 97vh;
  clip-path: $hero-polygon-end; /*../styles/keyframes/hero-anim.scss */
  z-index: -1;
  overflow: hidden;

  @media screen and ( orientation: portrait ) {
    top: 2px;
  }
}

// Page Title
.mdev-page-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  color: $white;
  height: 100vh;
  width: 4.5%;
  border-right: 1px solid white;
  opacity: 0;
  min-width: 50px;
  transition: all 3s, height .1s;

  h1 {
    font-size: 18px;
    position: absolute;
    transform: rotate( 90deg );
    top: 65%;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    margin: 0;
  }
}

// Animation Vars
$mask-hero-anim-time: 1s;
$mask-anim-delay: 1s;
$mask-arrow-anim-time: 3.2s;

.mdev-main-header-arrow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 80%;
  /* Background Gradient Expanded */
  background: linear-gradient(
  to bottom, rgba( 194, 236, 47, 1 )
  0%, rgba( 181, 221, 45, 1 )
  7%, rgba( 71, 91, 30, 0 )
  87%, rgba( 10, 19, 21, 0 ) 100%);
  /* -------------------------- */
  opacity: 0;
  background-position: 0% 25%;
  transform: translate3d( 0, -480px, 0);

  animation: hero-gradient infinite;
  animation-duration: $mask-arrow-anim-time;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: $mask-hero-anim-time + $mask-anim-delay;

  @media screen and ( orientation: portrait ) {
    padding-top: 280%;
    animation: hero-gradient-prt infinite;
    animation-duration: $mask-arrow-anim-time;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: $mask-hero-anim-time + $mask-anim-delay;
  }
}

.--mask-active {
  opacity: 1;
  animation: hero-animation;
  animation-duration: $mask-hero-anim-time;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  .mdev-page-title {
    opacity: 1;
  }
}
/*--------------------------------------*/

</style>
