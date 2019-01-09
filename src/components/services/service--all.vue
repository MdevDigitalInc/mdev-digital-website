<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header">
          <div class="mdev-center">
            <h1 class="u-c-primary">
              {{ $t('servicepage.intro.heading') }}
            </h1>
            <p class="u-c-white">
              {{ $t('servicepage.intro.subHeading') }}
            </p>

             <a data-header-btn
                href="#contactus"
                title="Contact Us"
                class="mdev-btn mdev-primary-btn --space-top-sm">
               {{ $t('contact.headerBtn') }}
             </a>

          </div>
        </div>

        <!-- Sexy Lines -->
        <div class="mdev-sexy-line --sexy-green" data-line-one></div>
        <div class="mdev-sexy-line --sexy-green" data-line-two></div>
        <div class="mdev-sexy-line --sexy-green" data-line-three></div>
      </div>
    </hero-main>
  </section>
</template>




<script>
//Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import MainFooter         from '../shared/main-footer.vue';

export default{
  name: 'ServicesAll',
  data: function() {
    return {
      heroStyles: {
        backgroundColor: '#0f1617'
      },
      // Disables Page Title bar
      pageTitle: 'TESTY TEST TEST',
      headerDsc: 'A picture of a skelleton watch against a dark marble texture. The words: Mdev Hybrid Digital Agency can be seen woven through the intricate lattices and gears.',
      connectAnim: 'contact/MDEV_HEADER_connect_animated.svg',
      withAnim: 'contact/MDEV_HEADER_with.svg',
      usAnim: 'contact/MDEV_HEADER_us_animated.svg'
    };
  },

  mounted: function() {
    $('[data-header-btn]').addClass('fully-in-viewport');
  },

  components: {
    'hero-main'     : HeroMain,
    'main-footer'   : MainFooter
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* SERVICES ALL Component Styles
/--------------------------------------*/

@import '../../assets/styles/keyframes/lines-anim.scss';
@import '../../assets/styles/mixins.scss';

/*-------------------------------------*/
/* CONTACT Component Styles
/--------------------------------------*/

.mdev-vivus-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0 5%;
}

.mdev-center {
  width: 100%;
  padding: 0 5%;
  @include center(both);

  @media #{$tablet-only} {
    padding: 0 12%;
  }

  @media #{$laptop-up} {
    width: 60%;
    padding: 0;
  }
}

.--hero-padding {
  padding-top: 40%;

  @media #{$portrait} {
    padding-top: 115%;
  }

  @media #{$phone-only} {
    padding-top: 180%;
  }
}



// Line Starting Positions
// Because of rotation Y coordinate is actually X when translating
[ data-line-one ] {
  animation: line-one-anim;
  @include arrow-anim-rules(11s);
}

// Line Two is not rotated and therefore X is X and Y is Y
[ data-line-two ] {
  animation: line-two-anim-header;
  @include arrow-anim-rules(22s);
}

// Because of rotation Y coordinate is actually X when translating
[ data-line-three ] {
  animation: line-three-anim;
  @include arrow-anim-rules(17s);
}



/*--------------------------------------*/

</style>
