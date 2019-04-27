<template>
  <section  v-view="(e) => changeNavBrand(e, '--teal-white')" class="mdev-main-content">
    <brand-animation v-if="isLoading"></brand-animation>
    <div v-if="!isLoading" class="mdev-coming-soon u-text-center u-c-white" :class="{ '--active' : isActive }">
      <h2 class="u-uppercase">
        Coming Soon
      </h2>
      <h3 class="u-uppercase u-light">Oops, looks like we are still working on this. </br> check back soon for updates!</h3>
      <p>
        We will redirect you back to where you came from in...
      </p>
      <h3>
        {{ time }}
      </h3>
    </div>
  </section>
</template>

<script>
// Brand Animation
import BrandAnimation from '../shared/brand-animation.vue';
// Flat Data File
import MdevData       from '../../mdev-data.js';
import SEOData        from '../../site-seo.js';

export default{
  name: 'ComingSoon',

  data: function(){
    return{
      // Flag for the loading anim..
      isLoading: false,
      // Flag for activating the coming soon message
      isActive: false,
      // Time until user is redirected
      time: 7,
      // Redirect timer container
      redirectTimer: null,
      // SEO
      seo: SEOData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.home.title,
      meta: [
        { vmid: 'twimage', name: 'twitter:image', content: this.loadImage(this.home.seo.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: this.loadImage(this.home.seo.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.home.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.home.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.home.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.home.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.home.desc }
      ]
    };
  },

  mounted: function(){
    // Wait for full load and next tic on VM
    this.$nextTick(() => {
      // Load elements
      var loadAnim = document.querySelectorAll('[data-load-anim]')[0];
      var loadWindow = document.querySelectorAll('[data-load-window]')[0];

      // Logo & Loading screen
      setTimeout(() => {
        requestAnimationFrame(() => {
          // Make Logo appear...
          this.addClass(loadAnim, '--opacity-active');
        });
      }, 100);
      setTimeout(() => {
        requestAnimationFrame(() => {
          // Make Logo Move...
          this.addClass(loadAnim, '--transform-active');
        });
      }, 900);
      setTimeout(() => {
        requestAnimationFrame(() => {
          // Make Logo Disappear...
          this.removeClass(loadAnim, '--opacity-active');
          // Make Content Disappear
          this.addClass(loadWindow, '--opacity');
        });
      }, 1900);
      setTimeout(() => {
        requestAnimationFrame(() => {
          // Start countdown function
          this.countdown();
        });
      }, 150);
      // Reveal hidden text
      setTimeout(() => {
        this.isActive = true;
      }, 100);
    });
  },

  methods: {
    countdown() {
      // Run every 1 Sec..
      this.redirectTimer = setInterval(()=> {
        // If time is not zero, subtract 1
        if (this.time > 1) {
          this.time --;
        }
        // Once it gets to zero, clear timer and redirect
        else {
          clearInterval(this.redirectTimer);
          this.$router.go(-1);
        }
      }, 1000);
    }
  },

  beforeDestroy: function() {
    clearInterval(this.redirectTimer);
  },

  components: {
    'brand-animation' : BrandAnimation
  }
};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* Coming Soon Component Styles
/--------------------------------------*/

.mdev-coming-soon {
  width: 90%;
  @include center(both);

  opacity: 0;
  transition: opacity 4s;

  &.--active {
    opacity: 1;
  }
}

.mdev-main-content {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/*--------------------------------------*/
</style>
