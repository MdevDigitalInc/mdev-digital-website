<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-branding">
          <div class="mdev-center">
            <object class="--app-innovate" id="anim-innovate" type="image/svg+xml" :data="loadImage(innovateAnim)"></object>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--app-with" id="anim-with" type="image/svg+xml" :data="loadImage(withAnim)"></object>
              <object class="--app-passion" id="anim-passion" type="image/svg+xml" :data="loadImage(passionAnim)"></object>
              <!-- CTA Text & Button -->
            </div>
            <div class="flex flex-hor-end">
              <div data-header-intro class="--header-cta">
                <p>
                  {{ $t('appdevpage.intro') }}
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
    <page-intro
      :pageIntro="serviceIntro"></page-intro>
    -->
    <!-- No Media -->
    <service-nomedia
      :id="service.anchor"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      v-for="(service, index) in nomedia"
      :key="index"
      :preTitle="service.preTitle"
      :title="service.title"
      :content="service.content"
      ></service-nomedia>
    <!-- Service Tile W/ Media -->
    <service-tile v-for="(service, index) in services"
      :id="service.anchor"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :key="index"
      :flip="((index + 1) % 2) == 1"
      :linkData="service.caseStudy"
      v-in-viewport
      class="a-fade-in mdev-service">
      <!-- Media -->
      <template slot="mediaSlot">
        <!-- Image Carousel -->
        <media-carousel
         :flip="((index + 1) % 2) == 1"
         :media="service.media"></media-carousel>
      </template>
      <!-- Content -->
      <template slot="contentSlot">
        <h2 v-html="service.title" class="mdev-service-title u-uppercase a-fade-in" v-in-viewport></h2>
        <h3 class="mdev-service-subtitle">
          {{ service.subTitle }}
        </h3>
        <p class="mdev-service-desc a-fade-in" v-in-viewport>
          {{ service.description }}
        </p>
        <!-- Topics Loop -->
        <ul class="mdev-service-topics --space-top-xs a-fade-in" v-in-viewport>
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
      v-view="(e) => changeNavBrand(e, '--teal-black')"
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
import FeaturedServices   from '../modules/featured-services.vue';
import FeaturedNomedia    from '../modules/featured-nomedia.vue';
import MediaCarousel      from '../modules/media-carousel.vue';
import ChapterHeading     from '../shared/chapter-heading.vue';
import ChapterLink        from '../shared/chapter-link.vue';
import PageIntro          from '../shared/page-intro.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';

export default{
  name: 'ServicesAppDev',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0f1617'
      },
      // Disables Page Title bar
      pageTitle: 'Aapps & Software Services',
      headerDsc: 'Innovate With Passion.',
      innovateAnim: 'services/appdev/MDEV_HEADER_innovate_animated.svg',
      withAnim: 'services/appdev/MDEV_HEADER_with.svg',
      passionAnim: 'services/appdev/MDEV_HEADER_passion_animated.svg',
      // Chapter Info
      chapter: MdevData.appdev.chapter,
      // Services Data
      services: MdevData.appdev.services,
      prefooter: MdevData.prefooter,
      serviceFlag: MdevData.appdev.serviceFlag,
      nomedia: MdevData.appdev.servicesNomedia,
      serviceIntro: MdevData.appdev.serviceIntro,
      // SEO
      seo: MdevData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.appdev.title,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.appdev.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.appdev.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.appdev.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.appdev.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.appdev.desc }
      ]
    };
  },

  mounted: function() {
    this.$nextTick(() => {
        $('[data-main-nav]').addClass('--teal-white');
      setTimeout(() => {
        new Vivus('anim-innovate', {duration: 150});
      }, 100);
      setTimeout(() => {
        $('#anim-with').addClass('--anim-visible');
      }, 450);
      setTimeout(() => {
        new Vivus('anim-passion', {duration: 150});
      }, 800);
      setTimeout(() => {
        $('[data-header-intro]').addClass('--anim-visible');
      }, 1200);
    });
  },

  components: {
    'hero-main'      : HeroMain,
    'main-footer'    : MainFooter,
    'pre-footer'     : PreFooter,
    'chapter-heading': ChapterHeading,
    'media-carousel' : MediaCarousel,
    'chapter-link'   : ChapterLink,
    'service-tile'   : FeaturedServices,
    'page-intro'     : PageIntro,
    'service-nomedia': FeaturedNomedia
  }
};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* SERVCICES--APPDEV Component Styles
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
    padding-top: 70%;
  }
}

.--vivus-branding {

  .--app-innovate {
    width: 90%;
    margin-bottom: $heading-top-padding;

    @media #{$portrait} {
      width: 100%;
      margin-bottom: $heading-top-padding-mob;
    }
  }

  .--app-with {
    width: 15%;
    opacity: 0;
    transition: all .6s;
  }

  .--app-passion {
    width: 83%;
    margin: 0 0 0 2%;
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

    @media #{$tablet-lnd-only} {
      width: 60%;
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
