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
              <object class="--digi-once" id="anim-once" type="image/svg+xml" :data="loadImage(onceAnim)"></object>
              <object class="--digi-you" id="anim-you" type="image/svg+xml" :data="loadImage(youAnim)"></object>
            </div>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--digi-go" id="anim-go" type="image/svg+xml" :data="loadImage(goAnim)"></object>
              <object class="--digi-digital" id="anim-digital" type="image/svg+xml" :data="loadImage(digitalAnim)"></object>
              <!-- CTA Text & Button -->
            </div>
            <div class="flex flex-hor-end">
              <div data-header-intro class="--header-cta">
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
    <!-- Chapter Heading -->
    <chapter-heading
       v-view="(e) => changeNavBrand(e, '--teal-black')"
      :chapterIndex="chapter.index"
      :chapterTitle="chapter.title"></chapter-heading>
    <!-- Chapter Content -->
    <service-tile v-for="(service, index) in services"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
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
        <span class="--pre-title" v-if="service.preTitle">
          {{ service.preTitle }}
        </span>
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
      inner: 'Digital Marketing',
      complement: 'MDEV Digital - London, Ontario'
    },
    meta: [
      { property: 'og:title', content: 'Digital Marketing | MDEV Digital - London, Ontario ' },
      { name: 'twitter:title', content: 'Digital Marketing | MDEV Digital - London, Ontario ' }

    ]
  },

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0f1617'
      },
      // Disables Page Title bar
      pageTitle: 'TESTY TEST TEST',
      headerDsc: 'Innovate With Passion',
      onceAnim: 'services/digiads/MDEV_HEADER_once_animated.svg',
      youAnim: 'services/digiads/MDEV_HEADER_you_animated.svg',
      goAnim: 'services/digiads/MDEV_HEADER_go_animated.svg',
      digitalAnim: 'services/digiads/MDEV_HEADER_digital_animated.svg',
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
        new Vivus('anim-once', {duration: 150}, console.log('fired'));
      }, 100);
      setTimeout(() => {
        new Vivus('anim-you', {duration: 150}, console.log('fired'));
      }, 450);
      setTimeout(() => {
        new Vivus('anim-go', {duration: 150}, console.log('fired'));
      }, 800);
      setTimeout(() => {
        new Vivus('anim-digital', {duration: 150}, console.log('fired'));
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
}

.--vivus-digiads {

  .--digi-once,
  .--digi-you,
  .--digi-go,
  .--digi-digital {
    height: 10vw;
  }

  .--digi-you,
  .--digi-digital {
    margin-left: 3vw;

    @media #{$portrait} {
      margin-left: 3.5vw;
    }
  }

  .--digi-once,
  .--digi-you {
    margin-bottom: 20px;
  }

  .--header-cta {
    opacity: 0;
    width: 60%;
    transition: opacity 1.2s;
    position: relative;
    margin-top: 20px;
    right: 0;

    @media #{$portrait} {
      width: 100%;
      text-align: left;
      margin-top: $heading-top-padding-mob + 10;
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
