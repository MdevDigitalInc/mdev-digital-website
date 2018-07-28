<template>
  <section class="mdev-main-content">
    <hero-main :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Header Slot -->
      <div class="mdev-main-hero" :style="heroStyles"></div>
    </hero-main>
    <!-- Map -->
    <contact-map></contact-map>
    <!-- form -->
    <contact-form id="mainContent"></contact-form>
    <!-- Footer -->
    <main-footer></main-footer>
  </section>
</template>


<script>
//Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import MainFooter         from '../shared/main-footer.vue';
import ContactMap         from './contact--map.vue';
import ContactForm        from './contact--form.vue';

export default {
  name: 'Contact',
  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0f1617',
        backgroundImage: 'url(' + this.loadImage('MDEV-main-hero.png') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      },
      // Disables Page Title bar
      pageTitle: 'TESTY TEST TEST',
      headerDsc: 'A picture of a skelleton watch against a dark marble texture. The words: Mdev Hybrid Digital Agency can be seen woven through the intricate lattices and gears.',
    };
  },

  components: {
    'hero-main'     : HeroMain,
    'main-footer'   : MainFooter,
    'contact-map'   : ContactMap,
    'contact-form'  : ContactForm
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    }
  }
};
</script>



<style lang="scss">

	/*-------------------------------------*/
	/* CONTACT Component Styles
	/--------------------------------------*/


	/*--------------------------------------*/

</style>
