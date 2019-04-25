<template>
  <section class="mdev-main-content mdev-error-page">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-error">
          <div class="mdev-center">
            <!-- Top Container -->
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
            <!-- 404 Navigation -->
            <div class="mdev-error-action flex flex-hor-center flex-vert-center">
              <!-- Primary Button -->
              <btn-primary :BtnData="BtnData">
                {{ $t('errorpage.path1') }}
              </btn-primary>
              <!-- Primary Button -->
              <btn-primary :BtnData="BtnData">
                {{ $t('errorpage.path2') }}
              </btn-primary>
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
import SEOData        from '../../site-seo.js';
import MdevData       from '../../mdev-data.js';
// Components Import
import HeroMain       from '../shared/hero-main.vue';
import MainFooter     from '../shared/main-footer.vue';
import BtnPrimary     from '../shared/btn-primary.vue';

export default {
  name: 'ErrorPage',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      BtnDataTwo: {
        accessibility: 'About MDEV Digital',
        btnRoute: '/about',
        btnClass: 'mdev-primary-btn --space-lr-sm --space-top-sm'
      },
      BtnData: {
        accessibility: 'Contact Us!',
        btnRoute: '/contact',
        btnClass: 'mdev-primary-btn --space-lr-sm --space-top-sm'
      },
      // SEO
      seo: SEOData.siteSeo,
      // Disables Page Title bar
      pageTitle: 'ERROR 404',
      headerDsc: 'Sorry, Something went wrong. This is a 404 page.',
      errorAnim: 'svg/MDEV_HEADER_404_animated.svg',
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
      // Collect Elements
      var mainNav = document.querySelectorAll('[data-main-nav]')[0];
      var introBtn = document.querySelectorAll('[data-header-btn]')[0];
      var introHeading = document.querySelectorAll('[data-header-intro]')[0];
      // Add class to nav
      this.addClass(mainNav, '--teal-white');

      setTimeout(() => {
        new Vivus('anim-error', {duration: 180});
      }, 700);
      setTimeout(() => {
        this.addClass(introHeading, '--anim-visible');
      }, 2200);
      setTimeout(() => {
        this.addClass(introBtn, 'fully-in-viewport');
      }, 2800);
    });
  },

  components: {
    'hero-main'      : HeroMain,
    'main-footer'    : MainFooter,
    'btn-primary'    : BtnPrimary
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

.mdev-error-page {

  .mdev-error-action {
    margin-top: 100px;

    @media #{$portrait} {
      margin-top: 0;
    }

    @media #{$phone-only} {
      flex-wrap: wrap;
    }
  }

  .mdev-main-footer {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.--hero-padding {
  padding-top: 50%;

  @media #{$portrait} {
    padding-top: 110%;
  }

  @media #{$phone-only} {
    padding-top: 130%;
  }
}

.--vivus-error {

  .--error-fourofour {
    width: 60%;
    margin-right: 30px;

    @media #{$portrait} {
      width: 70%;
      margin-bottom: $heading-top-padding-mob;
      margin-right: 0;
    }
  }

  .--header-cta {
    opacity: 0;
    width: 33%;
    padding-left: 20px;
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
