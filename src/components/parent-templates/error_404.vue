<template>
  <section class="mdev-main-content mdev-error-page">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-error">
          <div class="mdev-center">
            <!-- Bottom Container -->
            <div class="flex flex-vert-center --portrait-wrap">
              <object class="--error-fourofour" id="anim-error" type="image/svg+xml" :data="loadImage(errorAnim)"></object>
              <!-- CTA Text & Button -->
              <div data-header-intro class="--header-cta">
                <h2 class="u-c-white u-bold u-uppercase">
                  {{ $t('errorpage.heading') }}
                </h2>
                <p>
                  {{ $t('errorpage.intro') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sexy Lines -->
        <div class="mdev-sexy-line --sexy-white" data-line-one></div>
        <div class="mdev-sexy-line --sexy-white" data-line-two></div>
        <div class="mdev-sexy-line --sexy-white" data-line-three></div>
      </div>
    </hero-main>

    <main-footer></main-footer>
  </section>
</template>

<script>
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';
// Components Import
import HeroMain       from '../shared/hero-main.vue';
import MainFooter     from '../shared/main-footer.vue';

export default {
  name: 'ErrorPage',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      // SEO
      seo: MdevData.siteSeo,
      // Disables Page Title bar
      pageTitle: 'ERROR 404',
      headerDsc: 'Sorry, Something went wrong. This is a 404 page.',
      errorAnim: 'services/branding/MDEV_HEADER_story_animated.svg',
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.error.title,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.error.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.error.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.error.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.error.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.error.desc }
      ]
    };
  },

  mounted: function() {
    this.$nextTick(() => {
        $('[data-main-nav]').addClass('--teal-white');
      setTimeout(() => {
        new Vivus('anim-tell', {duration: 150});
      }, 100);
      setTimeout(() => {
        new Vivus('anim-your', {duration: 180});
        $('#anim-your').addClass('--anim-visible');
      }, 450);
      setTimeout(() => {
        new Vivus('anim-error', {duration: 180});
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
    'hero-main'      : HeroMain,
    'main-footer'    : MainFooter,
  }

};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* ERROR Component Styles
/--------------------------------------*/

$heading-top-padding: 50px;
$heading-top-padding-mob: 10px;

.mdev-vivus-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0 5%;
}

.mdev-error-page .mdev-main-footer {
  position: absolute;
  left: 0;
  bottom: 0;
}

.--hero-padding {
  padding-top: 50%;
}

.--vivus-error {

  .--branding-tell {
    width: 40%;
    margin-bottom: $heading-top-padding;

    @media #{$laptop-only} {
      margin-bottom: 20px;
    }
    @media #{$portrait} {
      width: 44%;
      margin-bottom: $heading-top-padding-mob;
    }
  }

  .--branding-your {
    width: 47%;
    margin-bottom: $heading-top-padding;
    transform: translatey(5px);

    @media #{$portrait} {
      width: 52%;
      transform: translatey(0);
      margin-bottom: $heading-top-padding-mob;
    }
  }

  .--error-fourofour {
    width: 55%;
    margin-right: 30px;

    @media #{$portrait} {
      width: 70%;
      margin-bottom: $heading-top-padding-mob;
      margin-right: 0;
    }
  }

  .--header-cta {
    opacity: 0;
    width: 38%;
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
    width: 70%;

    @media #{$portrait} {
      text-align: left;
      width: 76%;
      padding: 0;
    }

    @media #{$tablet-prt-only} {
      width: 75%;
    }

    @media #{$tablet-lnd-only} {
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
