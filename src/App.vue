<template>
  <main id="app">
    <img :src="loadImage('MDEV-main-hero.png')" class="u-screenreader" />
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
    <main-navigation v-if="!isLoading" :reverseBrand="brandReverse"></main-navigation>
    <transition name="fade" v-if="!isLoading">
      <router-view></router-view>
    </transition>
    <div v-if="secret" class="--secret">
      <img :src="loadImage(seo.secret)" alt="You found me!"/>
    </div>
    <brand-animation v-if="isLoading"></brand-animation>
  </main>
</template>

<script>
//Local Component registration
import MainNavigation from './components/shared/navigation.vue';
import BrandAnimation from './components/shared/brand-animation.vue';
// Import Data From Flat File
import MdevData       from './mdev-data.js';

export default{
  name: 'App',
  // SEO Meta Information

  data: function(){
    return {
      seo: MdevData.siteSeo,
      secret: false,
      isLoading: true,
      isHome: true,
      brandReverse: false,
      keys: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      current: 0
    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.app.title,
      titleTemplate: this.seo.template,
      meta: [
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'ogappid', property: 'fb:app_id', content: this.seo.social.appid },
        { vmid: 'ogtype', property: 'og:type', content: this.seo.social.ogtype },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'ogimage', property: 'og:image', content: this.loadImage(this.seo.social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twimage', name: 'twitter:image', content: this.loadImage(this.seo.social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc }
      ]
    };
  },

  components: {
    'main-navigation' : MainNavigation,
    'brand-animation' : BrandAnimation
  },

  created: function(){
    window.addEventListener("keyup", this.konami);
  },

  beforeDestroy: function() {
    window.removeEcentListener("keyup", this.konami);
  },

  mounted: function(){
    // Wait for full load and next tic on VM
    this.$nextTick(() => {
      // Logo & Loading screen
      setTimeout(() => {
        // Make Logo appear...
        $('[data-load-anim]').addClass('--opacity-active');
      }, 100);
      setTimeout(() => {
        // Make Logo Move...
        $('[data-load-anim]').addClass('--transform-active');
      }, 900);
      setTimeout(() => {
        // Make Logo Disappear...
        $('[data-load-anim]').removeClass('--opacity-active');
        // Make Content Disappear
        $('[data-load-window]').addClass('--opacity');
      }, 1900);

      // Update Data
      setTimeout(() => {
        // Flip Flag
        this.isLoading = false;
      }, 2500);

      // Update rest of the UI
      setTimeout(() => {
        // Add active class for Hero & Nav
        $('[data-main-hero]').addClass('--mask-active');
        $('[data-main-nav]').addClass('--nav-active');
      }, 2550);
    });
  },

  beforeUpdate: function() {
    // Check if this is a reverse white page and add the class
    if ( $('body').hasClass('--body-white') ) {
      this.brandReverse = true;
    }
    else {
      this.brandReverse = false;
    }
  },

  updated: function () {
    // Add the active class back since it gets stripped on update above
    $('[data-main-nav]').addClass('--nav-active');
  },

  watch: {
    $route (to,from) {
      $('[data-main-hero]').removeClass('--mask-active');
    }
  },

  methods: {
    skipNav() {
      var anchor = $("#mainContent").offset().top;
      $('html,body').scrollTop(anchor);
    },

    konami(e) {
      const key = e.which || e.keyCode || e.detail;
      if (this.keys.includes(key)) {
        if (key === this.keys[this.current]) {
          this.current += 1;
          if (this.current === this.keys.length) {
            // Show Secret
            this.secret = true;
            // Hide secret!
            setTimeout(() => {
              this.secret = false;
            },3000);
            this.current = 0;
          }
        } else {
          this.current = 0;
        }
      }
    }
  }
};
</script>

<style lang="scss">

/*---------------------------------------/
 Global Main
/---------------------------------------*/
@import './assets/styles/global-main.scss';

/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/
body {
  background-color: $color-brand-bkg;
}

.fade-enter {
  transition: 1.4s opacity 1.8s;
}

.fade-leave-to {
  transition: opacity 1.2s;
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

// secret...
.--secret {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-brand-bkg;
  z-index: 100;

  img {
    @include center(both);
    width: 100%;
  }
}
</style>
