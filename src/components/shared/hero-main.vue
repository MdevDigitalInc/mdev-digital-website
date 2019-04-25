<template>
  <header class="mdev-main-header --section-space-btm" data-main-header aria-describedby="headerDescription">
    <div class="mdev-hero-mask" data-main-hero :class="{'--mask-active' : isLoaded }" >
      <slot></slot>
      <div v-if="pageTitle" class="mdev-page-title" data-main-title>
        <span data-crossbeam class="--crossbeam"></span>
        <h1 data-page-title>
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="9"><defs/><path id="arrow_right" data-name="arrow right" class="cls-1" d="M1096.35
        4885l7.65-4.5-7.65-4.51v3.55H1052v1.91h44.35v3.55z" transform="translate(-1052 -4876)"/></svg>
        {{ pageTitle }}
        </h1>
      </div>
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
      isLoaded: false
    };
  },

  mounted: function() {
    // Resize timer to debounce scroll
    let resizeTimer;
    let resizeTime = 50;

    // Run for first time on first tick
    this.$nextTick(() => {
      // Adjust Crossbeam
      this.adjustCrossbeam();
      // Activate Header
      this.isLoaded = true;

      window.addEventListener('resize', () => {
        // Clear Timer
        clearTimeout( resizeTimer );
        //resizeTimer = setTimeout( this.adjustArrow, resizeTime );
        resizeTimer = setTimeout( this.adjustCrossbeam, resizeTime );
      });
    });
  },

  updated: function() {
    this.adjustCrossbeam();
  },

  methods: {
    adjustCrossbeam() {
      var brandEl = document.querySelectorAll('[data-main-nav]')[0];
      var crossEl = document.querySelectorAll('[data-crossbeam]')[0];
      var brandHeight = null;
      brandHeight = brandEl.offsetHeight;
      crossEl.style.height = (brandHeight + 4) + 'px';
    }
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

  &.--bkg-sizing {
    background-size: cover;

    @media #{$desktop-only} {
      background-size: auto 100%;
    }
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
  display: none;
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
    font-size: 80%;
    position: absolute;
    transform: rotate(-90deg);
    bottom: 20%;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    margin: 0;
    transition: all .5s;

    @media #{ $portrait } {
      font-size: 90%;
    }
  }
}

// Animation Vars
$mask-hero-anim-time: 1s;
$mask-anim-delay: 1s;
$mask-arrow-anim-time: 3.2s;

.--mask-active {
  opacity: 1;
  animation: hero-animation;
  animation-duration: $mask-hero-anim-time;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @media #{$portrait} {
    animation: hero-animation-prt;
    animation-duration: $mask-hero-anim-time;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

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

.--crossbeam {
  width: 100%;
  opacity: .5;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid $white;
  z-index: -1;
  transition: all .4s;
}

// Error Page Override
.mdev-error-page {

  .mdev-hero-mask {
    max-height: 80vh;

    @media #{$portrait} {
      max-height: 90vh;
    }
  }

  .mdev-main-header {
    margin-bottom: 0;
  }
}

/*--------------------------------------*/
</style>
