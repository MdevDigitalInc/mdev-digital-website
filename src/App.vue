<template>
  <main id="app">
    <button href="#mainContent"
      title="Skip to main content"
      aria-label="Skip to main content"
      v-on:click.stop.prevent="skipNav"
      class="mdev-skipnav" tabindex="0">
      Skip To Main Content
    </button>
    <main-navigation></main-navigation>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </main>
</template>




<script>
//Local Component registration
import MainNavigation from './components/shared/navigation.vue';

export default{

  components: {
    'main-navigation' : MainNavigation
  },

  mounted: function(){
    this.$nextTick(function () {
      setTimeout(function(){
        $('[data-main-nav]').addClass('--nav-active');
      }, 1800);
    });
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
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
