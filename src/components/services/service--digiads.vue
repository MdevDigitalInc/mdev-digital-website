<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-digiads">
          <div class="mdev-center">
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--digi-demystify" id="anim-demystify" type="image/svg+xml" :data="loadImage(demistifyAnim)"></object>
            </div>
            <!-- Bottom Container -->
            <div class="flex flex-hor-start flex-vert-center --portrait-wrap">
              <object class="--digi-online" id="anim-online" type="image/svg+xml" :data="loadImage(onlineAnim)"></object>
              <div data-header-intro class="--header-cta u-hidden-portrait">
                <p>
                  {{ $t('digiadspage.intro') }}
                </p>
              </div>
            </div>
            <div class="flex flex-hor-start flex-wrap">
              <object class="--digi-marketing" id="anim-marketing" type="image/svg+xml" :data="loadImage(marketingAnim)"></object>
              <div data-header-intro class="--header-cta u-hidden-landscape">
                <p>
                  {{ $t('digiadspage.intro') }}
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
    <!-- Chapter Heading
    [ TEMPORARILY COMMENTED OUT ]
    <chapter-heading
       v-view="(e) => changeNavBrand(e, '--teal-black')"
      :chapterIndex="chapter.index"
      :chapterTitle="chapter.title"></chapter-heading>
    <--
    <!-- Chapter Content -->
    <service-tile v-for="(service, index) in services"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :key="index"
      :flip="((index + 1) % 2) == 1"
      :linkData="service.caseStudy"
      v-in-viewport
      class="a-fade-in mdev-service"
      :class="{ '--no-image' : !service.media }">
      <!-- Media -->
      <template slot="mediaSlot">
        <!-- Media Carousel -->
        <media-carousel
          :flip="((index + 1) % 2) == 1"
          v-if="service.media"
          :media="service.media"></media-carousel>
        <!-- Title Only appears here if no image -->
        <h2 v-if="!service.media"
          v-html="service.title"
          class="mdev-service-title u-uppercase a-fade-in"
          v-in-viewport></h2>
      </template>
      <!-- Content -->
      <template slot="contentSlot">
        <h2 v-if="service.media"
          v-html="service.title"
          class="mdev-service-title u-uppercase a-fade-in"
          v-in-viewport></h2>
        <h3 class="mdev-service-subtitle">
          {{ service.subTitle }}
        </h3>
        <p class="mdev-service-desc a-fade-in" v-in-viewport>
          {{ service.description }}
        </p>
        <!-- Topics Loop -->
        <ul v-if="service.topics" class="mdev-service-topics --space-top-xs a-fade-in" v-in-viewport>
          <li
            v-html="topic"
            class="u-uppercase u-bold"
            v-for="topic in service.topics">
          </li>
        </ul>
      </template>
    </service-tile>
    <!-- Chapter Link -->
    <chapter-link
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :chapterIndex="chapter.next.index"
      :chapterLink="chapter.next.link"
      :a11y="chapter.next.a11y"
      :chapterTitle="chapter.next.title"></chapter-link>
    <!-- Pre-Footer -->
    <pre-footer
      :heading="prefooter.heading"
      :subheading="prefooter.subheading"
      :BtnData="prefooter.BtnData"
      :serviceFlag="serviceFlag"
      :links="prefooter.links"></pre-footer>
    <!-- Footer -->
    <main-footer></main-footer>
  </section>
</template>

<script>
// Local Component Registration
import HeroMain           from '../shared/hero-main.vue';
import MainFooter         from '../shared/main-footer.vue';
import PreFooter          from '../shared/pre-footer.vue';
import MediaCarousel      from '../modules/media-carousel.vue';
import FeaturedServices   from '../modules/featured-services.vue';
import ChapterHeading     from '../shared/chapter-heading.vue';
import ChapterLink        from '../shared/chapter-link.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';

export default{
  name: 'ServicesDigitalMarketing',

  head: {
    title: {
      inner: 'Digital Marketing Services | MDEV Digital ',
      complement: ' London, Toronto, Montreal'
    },
    meta: [
      { property: 'og:title', content: 'Digital Marketing Services | MDEV Digital | London, Toronto, Montreal' },
      { name: 'twitter:title', content: 'Digital Marketing Services | MDEV Digital | London, Toronto, Montreal' },
      { name: 'description', content: 'We\'re experts at integrating compelling marketing strategies and tactics with understandable and measuarable results. It\'s data science mixed with marketing art.', id:'desc'},
      { name: 'twitter:description', content: 'We\'re experts at integrating compelling marketing strategies and tactics with understandable and measuarable results. It\'s data science mixed with marketing art.'},
      { property: 'og:description', content: 'We\'re experts at integrating compelling marketing strategies and tactics with understandable and measuarable results. It\'s data science mixed with marketing art.'}
    ]
  },

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0f1617'
      },
      // Disables Page Title bar
      pageTitle: 'Digital Marketing Services',
      headerDsc: 'Once you go digital...',
      demistifyAnim: 'services/digiads/MDEV_HEADER_demystify_animated.svg',
      onlineAnim: 'services/digiads/MDEV_HEADER_online_animated.svg',
      marketingAnim: 'services/digiads/MDEV_HEADER_marketing_animated.svg',
      // Chapter Info
      chapter: MdevData.digiads.chapter,
      // Services Data
      services: MdevData.digiads.services,
      prefooter: MdevData.prefooter,
      serviceFlag: MdevData.digiads.serviceFlag
    };
  },

  mounted: function() {
    this.$nextTick(() => {
        $('[data-main-nav]').addClass('--teal-white');
      setTimeout(() => {
        new Vivus('anim-demystify', {duration: 150});
      }, 100);
      setTimeout(() => {
        new Vivus('anim-online', {duration: 150});
      }, 450);
      setTimeout(() => {
        new Vivus('anim-marketing', {duration: 150});
      }, 800);
      setTimeout(() => {
        new Vivus('anim-digital', {duration: 150});
      }, 1200);
      setTimeout(() => {
        $('[data-header-intro]').addClass('--anim-visible');
      }, 1400);
    });
  },

  components: {
    'hero-main'      : HeroMain,
    'main-footer'    : MainFooter,
    'pre-footer'     : PreFooter,
    'media-carousel' : MediaCarousel,
    'service-tile'   : FeaturedServices,
    'chapter-heading': ChapterHeading,
    'chapter-link'   : ChapterLink
  }
};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* SERVICES--DIGIADS Component Styles
/--------------------------------------*/

$heading-top-padding: 50px;
$heading-top-padding-mob: 15px;

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

  @media #{$tablet-lnd-only} {
    padding-top: 60%;
  }
}

.--vivus-digiads {

  .--digi-demystify,
  .--digi-online,
  .--digi-marketing {
    height: 9vw;
  }

  .--digi-online {
    margin-right: 3vw;

    @media #{$portrait} {
      margin-right: 3.5vw;
    }
  }

  .--digi-demystify {
    margin-bottom: 20px;
  }

  .--digi-marketing {
    margin-top: 20px;
  }

  .--header-cta {
    opacity: 0;
    width: 60%;
    transition: opacity 1.2s;
    position: relative;
    right: 0;

    @media #{$portrait} {
      width: 100%;
      text-align: left;
      margin-top: 30px;
    }

    @media #{$tablet-lnd-only} {
      width: 80%;
      font-size: 14px;
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

    @media #{$laptop-only} {
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

    @media #{$xl-up} {
      top: 40%;
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
