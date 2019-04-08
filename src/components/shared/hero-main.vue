<template>
  <header class="mdev-main-header --section-space-btm" data-main-header aria-describedby="headerDescription">
    <div class="mdev-hero-mask" data-main-hero >
      <slot></slot>
      <div v-if="pageTitle" class="mdev-page-title" data-main-title>
        <h1 data-page-title>
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
        4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
        {{ pageTitle }}
        </h1>
      </div>
    </div>
    <div class="mdev-header-arrow-mask" data-main-arrow >
      <div class="mdev-main-header-arrow"></div>
    </div>
    <!-- Accessibility Image Description -->
    <div class="u-screenreader" id="headerDescription">
      {{ headerDsc }}
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHero',

  props: [ 'pageTitle', 'headerDsc' ],

  data: function() {
    return {
      arrowTimer: null
    };
  },

  mounted: function() {
    // Resize timer to debounce scroll
    let resizeTimer;
    let resizeTime = 50;
    // Adjust Arrow height

    // Run for first time on first tick
    this.$nextTick(() => {
      // Adjust background arrow size
      this.adjustArrow();
      $('[data-main-hero]').addClass('--mask-active');
    });

    // Start repeating interval to set arrow size
    this.arrowTimer = setInterval( this.adjustArrow, 1000);

    // Adjust arrow size on resize
    $(window).resize(() => {
      // Clear Timer
      clearTimeout( resizeTimer );
      resizeTimer = setTimeout( this.adjustArrow, resizeTime );
    });
  },

  methods: {
    adjustArrow() {
      let height;
      height = $('[data-main-hero]').outerHeight(true);
      $('[data-main-arrow]').css({
          'height': height + 'px'
      });
    }
  },

  beforeDestroy: function() {
    // Clear repeating inverval to adjust arrow
    clearInterval( this.arrowTimer );
    $('[data-main-hero]').removeClass('--mask-active');
  },
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
  z-index: 1;
}

.mdev-main-hero {
  width: 100%;
  position: relative;
  overflow: hidden;
  @include responsive-ratio(1920, 1080);
  max-height: 70vh;
  z-index: 1;

  h1 {
    font-weight: 500;
  }
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

  @media #{ $portrait } {
    top: 2px;
  }
}

// Page Title
.mdev-page-title {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 6;
  color: $white;
  width: 4.5%;
  border-right: 1px solid rgba(255, 255, 255, .5);
  opacity: 0;
  min-width: 50px;
  transition: opacity 3s, height 0;
  text-transform: uppercase;

  @media #{$phone-only} {
    display: none;
  }

  svg {
    /* ScaleX negative value flips image */
    transform: scaleX(-1);
    position: relative;
    right: 15px;
  }

  .cls-1 {
    fill: $white;
  }

  @media #{ $portrait } {
    width: 9.5%;
  }

  h1 {
    font-size: 120%;
    position: absolute;
    transform: rotate(-90deg);
    top: 70%;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    margin: 0;
    transition: all .5s;

    @media #{ $portrait } {
      top: 60%;
      font-size: 90%;
    }
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
  to bottom, rgba(194, 236, 47, 1)
  0%, rgba(181, 221, 45, 1)
  7%, rgba(71, 91, 30, 0)
  87%, rgba(10, 19, 21, 0) 100%);
  /* -------------------------- */
  opacity: 0;
  background-position: 0% 25%;
  transform: translate3d(0, -480px, 0);

  animation: hero-gradient infinite;
  animation-duration: $mask-arrow-anim-time;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: $mask-hero-anim-time + $mask-anim-delay;

  @media #{$portrait} {
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

.--user-scroll {
  .mdev-page-title h1 {
    opacity: 0;
  }

  .mdev-header-arrow-mask {
    opacity: 0;
  }
}

/*--------------------------------------*/
</style>
