<template>
  <section class="mdev-main-content">
    <brand-animation v-if="isLoading"></brand-animation>
    <div v-if="!isLoading" class="mdev-coming-soon u-text-center u-c-white">
      <h2 class="u-uppercase">
        Coming Soon
      </h2>
      <h3 class="u-uppercase u-light">Oops, looks like we are still working on this. check back soon for updates!</h3>
      <p>
        We will redirect you back to where you came from in...
        {{ time }}
      </p>
    </div>
  </section>
</template>




<script>
// Show Animation
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
      isLoading: true,
      time: 7
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
        this.countdown();
      }, 2500);
    });
  },

  methods: {
    countdown() {
      var redirectTimer = null;
      redirectTimer = setInterval(()=> {
        if (this.time > 0) {
          this.time --;
        }
        else {
          clearInterval(redirectTimer);
          this.$router.go(-1);
        }
      }, 1000);
    }
  },

  components: {
    'brand-animation' : BrandAnimation
  }
};
</script>



<style lang="scss" scoped>

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.mdev-coming-soon {
  @include center(both);
}


/*--------------------------------------*/

</style>
