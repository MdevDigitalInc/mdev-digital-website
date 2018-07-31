<template>
  <section class="mdev-main-content">
    <hero-main :pageTitle="pageTitle" :headerDsc="headerDsc">
      <div class="mdev-main-hero" :style="heroStyles">
        <div class="mdev-vivus-header --vivus-contact">
          <div class="mdev-center">
            <object class="--contact-connect" id="anim-connect" type="image/svg+xml" :data="loadImage(connectAnim)"></object>
            <div class="flex flex-between flex-vert-start">
              <object class="--contact-with" id="anim-with" type="image/svg+xml" :data="loadImage(withAnim)"></object>
              <object class="--contact-us" id="anim-us" type="image/svg+xml" :data="loadImage(usAnim)"></object>
              <div data-header-intro class="--header-cta">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus erat, semper ut lectus a, dictum tempus orci. Cras varius lorem ac euismod bibendum. Nam aliquam ante quis magna porttitor, eu dapibus risus pulvinar. Integer sit amet leo id risus tempor fermentum. Aliquam erat volutpat.
                </p>
                 <a data-header-btn
                    href="#contactus"
                    title="Contact Us"
                    class="mdev-btn mdev-primary-btn --space-top-sm">
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
        paddingTop: '40%'
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
    setTimeout(() => {
      new Vivus('anim-connect', {duration: 300}, console.log('fired'));
    }, 100);
    setTimeout(() => {
      $('#anim-with').addClass('--anim-visible');
    }, 450);
    setTimeout(() => {
      new Vivus('anim-us', {duration: 200}, console.log('fired'));
    }, 1700);
    setTimeout(() => {
      $('[data-header-intro]').addClass('--anim-visible');
    }, 2200);
    setTimeout(() => {
      $('[data-header-btn]').addClass('fully-in-viewport');
    }, 3400);
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

.--vivus-contact {

  .--contact-connect {
    width: 70%;
  }

  .--contact-with {
    width: 12%;
    opacity: 0;
    transition: 1.8s opacity 1.2s;
  }

  .--contact-us {
    width: 23%;
  }

  .--header-cta {
    opacity: 0;
    width: 50%;
    transition: opacity 1.2s;
  }

  .--anim-visible {
    opacity: 1;
  }


  p {
    color: $white;
  }

  .mdev-center {
    @include center(both);
    width: 80%;
  }
}


// Line Starting Positions
// Because of rotation Y coordinate is actually X when translating
[ data-line-one ] {
  transform: rotate(60deg) translate3d(0, -37vw, 0);
  animation: line-one-anim;
  @include arrow-anim-rules(11s);
}

// Line Two is not rotated and therefore X is X and Y is Y
[ data-line-two ] {
  transform: rotate(0) translate3d(0, -50px, 0);
  animation: line-two-anim;
  @include arrow-anim-rules(22s);
}

// Because of rotation Y coordinate is actually X when translating
[ data-line-three ] {
  transform: rotate(-60deg) translate3d(0, -37vw, 0);
  animation: line-three-anim;
  @include arrow-anim-rules(17s);
}


/*--------------------------------------*/

</style>
