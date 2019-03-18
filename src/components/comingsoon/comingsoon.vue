<template>
  <section class="mdev-main-content">
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

export default{
  name: 'ComingSoon',
  head: {
    title: {
      inner: 'Coming Soon',
      complement: 'MDEV Digital - London, Ontario'
    },
    meta: [
      { property: 'og:title', content: 'Coming Soonn | MDEV Digital - London, Ontario' },
      { name: 'twitter:title', content: 'Coming Soon | MDEV Digital - London, Ontario' }
    ]
  },

  data: function(){
    return{
      // Flag for the loading anim..
      isLoading: true,
      // Flag for activating the coming soon message
      isActive: false,
      // Time until user is redirected
      time: 7,
      // Redirect timer container
      redirectTimer: null
    };
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
        // Start countdown function
        this.countdown();
      }, 2500);
      // Reveal hidden text
      setTimeout(() => {
        this.isActive = true;
      }, 2800);
    });
  },

  methods: {
    countdown() {
      // Run every 1 Sec..
      this.redirectTimer = setInterval(()=> {
        // If time is not zero, subtract 1
        if (this.time > 0) {
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
