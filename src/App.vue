<template>
  <main id="app">
    <!-- Skip Navigatio Accessbility -->
    <button href="#mainContent"
      v-if="!isLoading"
      title="Skip to main content"
      aria-label="Skip to main content"
      v-on:click.stop.prevent="skipNav"
      class="mdev-skipnav" tabindex="0">
      Skip To Main Content
    </button>
    <!-- Main Nav -->
    <main-navigation v-if="!isLoading"></main-navigation>
    <transition name="fade" v-if="!isLoading">
      <router-view></router-view>
    </transition>
    <brand-animation v-if="isLoading"></brand-animation>
  </main>
</template>




<script>
//Local Component registration
import MainNavigation from './components/shared/navigation.vue';
import BrandAnimation from './components/shared/brand-animation.vue';

export default{
  data: function(){
    return {
      isLoading: true,
      isHome: true
    };
  },

  components: {
    'main-navigation' : MainNavigation,
    'brand-animation' : BrandAnimation
  },

  mounted: function(){
    this.$nextTick(() => {
      // Wait for animation to play
      setTimeout(() => {
        $('[data-load-anim]').addClass('--opacity-active');
      }, 100);
      setTimeout(() => {
        $('[data-load-anim]').addClass('--transform-active');
      }, 900);
      setTimeout(() => {
        $('[data-load-anim]').removeClass('--opacity-active');
        $('[data-load-window]').addClass('--opacity');
      }, 1900);
      setTimeout(() => {
        this.isLoading = false;
      }, 2500);
      // Add Active Classes
      setTimeout(() => {
        $('[data-main-hero]').addClass('--mask-active');
        $('[data-main-nav]').addClass('--nav-active');
      }, 2550);
    });
  },

  watch: {
    $route (to,from) {
      $('html,body').scrollTop(0);
      $('[data-main-hero]').removeClass('--mask-active');
    }
  },

  methods: {
    skipNav() {
      var anchor = $("#mainContent").offset().top;
      $('html,body').scrollTop(anchor);
    }
  }
};
</script>



<style lang="scss">

/*-----/
Global Main
/-----*/
//@import './assets/styles/global-main.scss';
/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/
body {
  background-color: $color-brand-bkg;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  position: absolute;
}

.mdev-skipnav {
  display: block;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate3d(-50%, -200%, 0);
  background: transparent;
  text-transform: uppercase;
  color: $color-brand-primary;
  border: 2px solid $color-brand-primary;
  padding: 15px 20px;
  transition: all .8s;
  z-index: 999;
  font-size: 1.5vw;
  opacity: 0;

  &:focus {
    opacity: 1;
    color: $white;
    background: $color-brand-primary;
    transform: translate3d(-50%, 0, 0);
  }
}


</style>
