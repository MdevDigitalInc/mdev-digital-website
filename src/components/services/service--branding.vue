<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-contact">
          <div class="mdev-center">
            <object class="--branding-tell" id="anim-tell" type="image/svg+xml" :data="loadImage(tellAnim)"></object>
            <object class="--branding-your" id="anim-your" type="image/svg+xml" :data="loadImage(yourAnim)"></object>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap --phone-center">
              <object class="--branding-story" id="anim-story" type="image/svg+xml" :data="loadImage(storyAnim)"></object>
              <!-- CTA Text & Button -->
              <div data-header-intro class="--header-cta">
                <p>
                  {{ $t('brandingpage.intro') }}
                </p>
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
// Local Component Registration
import HeroMain           from '../shared/hero-main.vue';
import MainFooter         from '../shared/main-footer.vue';

export default{
  name: 'ServicesBranding',
  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0f1617'
      },
      // Disables Page Title bar
      pageTitle: 'TESTY TEST TEST',
      headerDsc: 'Tell Your Story',
      tellAnim: 'services/branding/MDEV_HEADER_tell_animated.svg',
      yourAnim: 'services/branding/MDEV_HEADER_your_animated.svg',
      storyAnim: 'services/branding/MDEV_HEADER_story_animated.svg'
    };
  },

  mounted: function() {
    this.$nextTick(() => {
        $('[data-main-nav]').addClass('--teal-white');
      setTimeout(() => {
        new Vivus('anim-tell', {duration: 150}, console.log('fired'));
      }, 100);
      setTimeout(() => {
        new Vivus('anim-your', {duration: 180}, console.log('fired'));
        $('#anim-your').addClass('--anim-visible');
      }, 450);
      setTimeout(() => {
        new Vivus('anim-story', {duration: 180}, console.log('fired'));
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
    'main-footer'   : MainFooter
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

.--hero-padding {
  padding-top: 50%;

  @media #{$portrait} {
    padding-top: 98%;
  }

  @media #{$phone-only} {
    padding-top: 130%;
  }
}

.--vivus-contact {

  .--branding-tell {
    width: 45%;

    @media #{$portrait} {
      width: 100%;
    }
  }

  .--branding-your {
    width: 52%;

    @media #{$portrait} {
      width: 100%;
    }
  }

  .--branding-story {
    width: 60%;

    @media #{$portrait} {
      width: 100%;
    }
  }

  .--header-cta {
    opacity: 0;
    width: 30%;
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
