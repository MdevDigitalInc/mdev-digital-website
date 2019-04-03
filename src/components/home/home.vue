<template>
  <div class="mdev-main-content">
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Header Slot -->
      <div class="mdev-main-hero" :style="heroStyles"></div>
    </hero-main>
    <!-- Process -->
    <home-process v-view="(e) => changeNavBrand(e, '--teal-white')" id="mainContent"></home-process>
    <!-- Services -->
    <home-services v-view="(e) => changeNavBrand(e, '--white-black')"></home-services>
    <!-- Case Studies -->
    <home-casestudies  v-view="(e) => changeNavBrand(e, '--teal-white')"></home-casestudies>
    <!-- About Us -->
    <home-about v-view="(e) => changeNavBrand(e, '--white-black')"></home-about>
    <!-- Testimonial -->
    <home-testimonials v-view="(e) => changeNavBrand(e, '--teal-black')" :testimonials="testimonials"></home-testimonials>
    <!-- Footer -->
    <main-footer></main-footer>
  </div>
</template>

<script>
// Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import HomeCaseStudies    from './home--casestudies.vue';
import HomeAbout          from './home--about.vue';
import HomeServices       from './home--services.vue';
import HomeProcess        from './home--process.vue';
import MainFooter         from '../shared/main-footer.vue';
import HomeTestimonials   from './home--testimonials.vue';
// Flat Data File
import MdevData           from '../../mdev-data.js';

export default{
  name: 'HomePage',
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'MDEV Digital',
      complement: 'Process Driven UI/UX and Development - London, Ontario '
    },
    meta: [
      { property: 'og:title', content: 'MDEV Digital | Process Driven UI/UX and Development - London, Ontario' },
      { name: 'twitter:title', content: 'MDEV Digital | Process Driven UI/UX and Development - London, Ontario' }
    ]
  },

  data: function() {
    return {
      heroStyles: {
        backgroundColor: '#0f1617',
        backgroundImage: 'url(' + this.loadImage('MDEV-main-hero.png') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      },
      // Disables Page Title bar
      pageTitle: 'Humanize The Web',
      headerDsc: 'A picture of a skelleton watch against a dark marble texture. The words: Mdev Hybrid Digital Agency can be seen woven through the intricate lattices and gears.',
      // Testimonials loaded from flat file
      testimonials: MdevData.testimonials
    };
  },

  components: {
    'hero-main'         : HeroMain,
    'home-about'        : HomeAbout,
    'home-services'     : HomeServices,
    'home-process'      : HomeProcess,
    'home-testimonials' : HomeTestimonials,
    'main-footer'       : MainFooter,
    'home-casestudies'  : HomeCaseStudies
  }
};
</script>
