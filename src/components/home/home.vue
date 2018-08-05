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
    <home-about   v-view="(e) => changeNavBrand(e, '--white-black')"></home-about>
    <!-- Testimonial -->
    <home-testimonials :testimonials="testimonials"></home-testimonials>
    <!-- Footer -->
    <main-footer></main-footer>
  </div>
</template>

<script>
//Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import HomeCaseStudies    from './home--casestudies.vue';
import HomeAbout          from './home--about.vue';
import HomeServices       from './home--services.vue';
import HomeProcess        from './home--process.vue';
import MainFooter         from '../shared/main-footer.vue';
import HomeTestimonials   from './home--testimonials.vue';

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
      // Disables Page Title bar
      pageTitle: 'TESTY TEST TEST',
      headerDsc: 'A picture of a skelleton watch against a dark marble texture. The words: Mdev Hybrid Digital Agency can be seen woven through the intricate lattices and gears.',

      testimonials: [
        {
          content: 'Dolor sit amet, consectetur adipiscing elit. Sed in velit at ex mollis ultrices non eget diam. Integer id velit ac arcu faucibus porttitor et at metus. Nam non odio et tellus placerat aliquet. Morbi sem metus, gravida in arcu in, pharetra mattis augue. In hac habitasse platea dictumst.',
          name: 'Aaron Finkenzeller, CTO Zucora Inc.'
        },
        {
          content: 'House In The Thaw Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit at ex mollis ultrices non eget diam. Integer id velit ac arcu faucibus porttitor et at metus. Nam non odio et tellus placerat aliquet. Morbi sem metus, gravida in arcu in, pharetra mattis augue. In hac habitasse platea dictumst.',
          name: 'Brad Geddes, CEO Zucora Inc.'
        },
        {
          content: 'Dolor sit amet, consectetur adipiscing elit. Sed in velit at ex mollis ultrices non eget diam. Integer id velit ac arcu faucibus porttitor et at metus. Nam non odio et tellus placerat aliquet. Morbi sem metus, gravida in arcu in, pharetra mattis augue. In hac habitasse platea dictumst.',
          name: 'Albert Einstein, EMC Industries'
        },
        {
          content: 'House In The Thaw Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit at ex mollis ultrices non eget diam. Integer id velit ac arcu faucibus porttitor et at metus. Nam non odio et tellus placerat aliquet. Morbi sem metus, gravida in arcu in, pharetra mattis augue. In hac habitasse platea dictumst.',
          name: 'Bradd Pitt, CTO Zucora Inc.'
        },
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit at ex mollis ultrices non eget diam. Integer id velit ac arcu faucibus porttitor et at metus. Nam non odio et tellus placerat aliquet. Morbi sem metus, gravida in arcu in, pharetra mattis augue. In hac habitasse platea dictumst.',
          name: 'Edward Norton, CTO Zucora Inc.'
        }
      ]
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
  },

  methods:{
    // Get Compiled image Paths
    loadImage(path){
      return require('../../assets/images/' + path);
    },
    changeNavBrand(e, brandClass){
      if ( e.target.rect.y <= 0 ) {
        $('[data-main-nav]').removeClass('--white-black');
        $('[data-main-nav]').removeClass('--teal-black');
        $('[data-main-nav]').removeClass('--teal-white');
        $('[data-main-nav]').addClass(brandClass);
      }
    }
  }
};
</script>

<style lang="scss">


</style>
