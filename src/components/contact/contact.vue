<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-vivus" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-contact">
          <div class="mdev-center">
            <object class="--contact-connect" id="anim-connect" type="image/svg+xml" :data="loadImage(connectAnim)"></object>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap --phone-center">
              <object class="--contact-with" id="anim-with" type="image/svg+xml" :data="loadImage(withAnim)"></object>
              <object class="--contact-us" id="anim-us" type="image/svg+xml" :data="loadImage(usAnim)"></object>
              <!-- CTA Text & Button -->
              <div data-header-intro class="--header-cta">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus erat, semper ut lectus a, dictum tempus orci. Cras varius lorem ac euismod bibendum. Nam aliquam ante quis
                  magna porttitor.
                </p>
                 <a data-header-btn
                    href="#contactus"
                    title="Contact Us"
                    class="mdev-btn mdev-primary-btn">
                   {{ $t('contact.headerBtn') }}
                 </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Sexy Lines -->
        <div class="mdev-sexy-line --sexy-green" data-line-one></div>
        <div class="mdev-sexy-line --sexy-green" data-line-two></div>
        <div class="mdev-sexy-line --sexy-green" data-line-three></div>
      </div>
    </hero-main>
    <!-- Map -->
    <contact-map v-view="(e) => changeNavBrand(e, '--teal-white')"></contact-map>
    <!-- form -->
    <contact-form  v-view="(e) => changeNavBrand(e, '--white-black')" id="mainContent"></contact-form>
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
    this.$nextTick(() => {
        $('[data-main-nav]').addClass('--teal-white');
      setTimeout(() => {
        new Vivus('anim-connect', {duration: 150}, console.log('fired'));
      }, 100);
      setTimeout(() => {
        $('#anim-with').addClass('--anim-visible');
      }, 450);
      setTimeout(() => {
        new Vivus('anim-us', {duration: 180}, console.log('fired'));
      }, 1700);
      setTimeout(() => {
        $('[data-header-intro]').addClass('--anim-visible');
      }, 2200);
      setTimeout(() => {
        $('[data-header-btn]').addClass('fully-in-viewport');
      }, 3400);
    });
  },

  components: {
    'hero-main'     : HeroMain,
    'main-footer'   : MainFooter,
    'contact-map'   : ContactMap,
    'contact-form'  : ContactForm
  },

  methods: {
    changeNavBrand(e, brandClass){
      if ( e.target.rect.y <= 0 ) {
        $('[data-main-nav]').removeClass('--teal-black');
        $('[data-main-nav]').removeClass('--white-black');
        $('[data-main-nav]').removeClass('--teal-white');
        $('[data-main-nav]').addClass(brandClass);
      }
    }
  }
};
</script>



<style lang="scss" scoped>

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

.--hero-vivus {
  padding-top: 40%;

  @media #{$portrait} {
    padding-top: 98%;
  }

  @media #{$phone-only} {
    padding-top: 130%;
  }
}

.--vivus-contact {

  .--contact-connect {
    width: 70%;

    @media #{$portrait} {
      width: 100%;
    }
  }

  .--contact-with {
    width: 12%;
    opacity: 0;
    transition: 1.8s opacity 1.2s;

    @media #{$portrait} {
      width: 18%;
    }
  }

  .--contact-us {
    width: 23%;

    @media #{$portrait} {
      width: 35%;
    }
  }

  .--header-cta {
    opacity: 0;
    width: 50%;
    transition: opacity 1.2s;

    @media #{$portrait} {
      width: 100%;
      text-align: left;
    }
  }

  .--anim-visible {
    opacity: 1;
  }


  p {
    color: $white;
    font-size: 120%;

    @media #{$phone-only} {
      font-size: 100%;
    }
  }

  .mdev-center {
    @include center(both);
    width: 80%;

    @media #{$portrait} {
      text-align: center;
      width: 75%;
    }
  }

  .mdev-primary-btn {
    margin-top: 25px;

    @media #{$desktop-up} {
      margin-top: 50px;
    }
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
