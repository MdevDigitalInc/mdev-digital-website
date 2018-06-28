<template>
  <section class="mdev-main-content">
    <hero-main :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Header Slot -->
      <div class="mdev-main-hero" :style="heroStyles"></div>
    </hero-main>
    <home-services id="mainContent"></home-services>
    <home-casestudies></home-casestudies>
    <home-about></home-about>
    <home-testimonials></home-testimonials>
    <main-footer></main-footer>
  </section>
</template>

<script>
//Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import HomeCaseStudies    from './home-casestudies.vue';
import HomeAbout          from './home-about.vue';
import HomeServices       from './home-services.vue';
import MainFooter   from '../shared/main-footer.vue';
import HomeTestimonials   from './home-testimonials.vue';

export default{
  name: 'HomePage',
  data: function() {
    return {
      heroStyles: {
        backgroundColor: '#0f1617',
        backgroundImage: 'url(' + this.loadImage('MDEV-main-hero.png') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      },
      pageTitle: 'PAGE TITLE HERE',
      headerDsc: 'DESCRIBE HEADER HERE'
    };
  },
  components: {
    'hero-main'         : HeroMain,
    'home-about'        : HomeAbout,
    'home-services'     : HomeServices,
    'home-testimonials' : HomeTestimonials,
    'main-footer'       : MainFooter,
    'home-casestudies'  : HomeCaseStudies
  },

  methods:{
    // Get Compiled image Paths
    loadImage(path){
      return require('../../assets/images/' + path);
    }
  },

  mounted: function(){
    this.$nextTick(function () {
      setTimeout(function(){
        $('[data-main-hero]').addClass('--mask-active');
      }, 1000);
    });
  }
};
</script>

<style lang="scss">

	/*-------------------------------------*/
	/* HOME Component Styles
	/--------------------------------------*/


	/*--------------------------------------*/

</style>
