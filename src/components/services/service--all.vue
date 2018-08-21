<template>
  <section class="mdev-main-content">
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-vivus" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-contact">
          <div class="mdev-center">
            <object class="--contact-connect" id="anim-connect" type="image/svg+xml"></object>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap --phone-center">
              <object class="--contact-with" id="anim-with" type="image/svg+xml" :data="loadImage(withAnim)"></object>
              <object class="--contact-us" id="anim-us" type="image/svg+xml"></object>
              <!-- CTA Text & Button -->
              <div data-header-intro class="--header-cta">
                <p>
                  We believe in humanizing the web. We accomplish this mission through carefully planned site architecture and a focus on mobile-friendliness, accessibility and approachable web design. The end result is of this consistently user-friendly sites that delight our clients and visitors.

                </p>
                 <a data-header-btn
                    href="#"
                    title=""
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
  </section>
</template>

<script>

//Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import MainFooter         from '../shared/main-footer.vue';

export default{
  name: 'ServicesAll',
  data: function() {
    return{
      heroStyles: {
        backgroundColor: '#0f1617'
      },
      // Disables Page Title bar
      pageTitle: 'CONNECT WITH US',
      headerDsc: 'A picture of a skelleton watch against a dark marble texture. The words: Mdev Hybrid Digital Agency can be seen woven through the intricate lattices and gears.',
      connectAnim: 'contact/MDEV_HEADER_connect_animated.svg',
      withAnim: 'contact/MDEV_HEADER_with.svg',
      usAnim: 'contact/MDEV_HEADER_us_animated.svg'
    };
  },

  components: {
    'hero-main'     : HeroMain,
    'main-footer'   : MainFooter
  }
};
</script>



<style lang="scss" scoped>

@import '../../assets/styles/keyframes/lines-anim.scss';
@import '../../assets/styles/mixins.scss';

/*-------------------------------------*/
/* SERVICES ALL Component Styles
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
    opacity: 100;
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
