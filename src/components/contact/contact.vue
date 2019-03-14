<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-contact">
          <div class="mdev-center">
            <div class="flex flex-vert-start">
              <object class="--contact-lets" id="anim-lets" type="image/svg+xml" :data="loadImage(letsAnim)"></object>
              <object class="--contact-start" id="anim-start" type="image/svg+xml" :data="loadImage(startAnim)"></object>
            </div>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--contact-something" id="anim-something" type="image/svg+xml" :data="loadImage(somethingAnim)"></object>
              <object class="--contact-new" id="anim-new" type="image/svg+xml" :data="loadImage(newAnim)"></object>
              <!-- CTA Text & Button -->
              <div data-header-intro class="--header-cta">
                <p>
                  {{ $t('contact.description') }}
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
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'Get In Touch',
      complement: 'MDEV Digital - London, Ontario'
    },
    meta: [
      { property: 'og:title', content: 'Get In Touch | MDEV Digital - London, Ontario' },
      { name: 'twitter:title', content: 'Get In Touch | MDEV Digital - London, Ontario' }
    ]
  },

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0f1617'
      },
      // Disables Page Title bar
      pageTitle: 'Let\'s Talk!',
      headerDsc: 'An animated segment invites the user to Start something new by getting in touch with MDEV Digital',
      letsAnim: 'contact/MDEV_HEADER_lets_animated.svg',
      startAnim: 'contact/MDEV_HEADER_start_animated.svg',
      somethingAnim: 'contact/MDEV_HEADER_something.svg',
      newAnim: 'contact/MDEV_HEADER_new_animated.svg'
    };
  },

  mounted: function() {
    this.$nextTick(() => {
        $('[data-main-nav]').addClass('--teal-white');
      setTimeout(() => {
        new Vivus('anim-lets', {duration: 150});
      }, 100);
      setTimeout(() => {
        new Vivus('anim-start', {duration: 150});
      }, 400);
      setTimeout(() => {
        $('#anim-something').addClass('--anim-visible');
      }, 650);
      setTimeout(() => {
        new Vivus('anim-new', {duration: 180});
      }, 2700);
      setTimeout(() => {
        $('[data-header-intro]').addClass('--anim-visible');
      }, 3200);
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
  }
};
</script>



<style lang="scss" scoped>

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

.--hero-padding {
  padding-top: 40%;

  @media #{$portrait} {
    padding-top: 68%;
  }

  @media #{$phone-only} {
    padding-top: 100%;
  }
}

.--vivus-contact {

  .--contact-lets,
  .--contact-start {
    height: 10vw;
    margin-bottom: 20px;

    @media #{$portrait} {
      height: 9vw;
    }
  }

  .--contact-lets {
    margin-right: 40px;

    @media #{$portrait} {
      margin-right: 20px;
    }
  }


  .--contact-something {
    width: 25%;
    opacity: 0;
    transition: 1.8s opacity 1.2s;

    @media #{$portrait} {
      width: 30%;
    }

    @media #{$phone-only} {
      width: 40%;
    }
  }

  .--contact-new {
    height: 10vw;
    margin: 0 40px;

    @media #{$portrait} {
      height: 9vw;
      margin: 0 20px;
    }
  }

  .--header-cta {
    opacity: 0;
    width: 20%;
    transition: opacity 1.2s;

    @media #{$laptop-only} {
      width: 30%;
    }

    @media #{$portrait} {
      width: 100%;
      text-align: left;
      margin-top: 20px;
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
      width: 100%;
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
