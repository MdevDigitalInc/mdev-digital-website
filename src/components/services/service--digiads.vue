<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-pad-digi" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-digiads">
          <div class="--center-digiads">
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
        <div class="mdev-sexy-line --sexy-white" data-line-one></div>
        <div class="mdev-sexy-line --sexy-white" data-line-two></div>
        <div class="mdev-sexy-line --sexy-white" data-line-three></div>
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
      :id="service.anchor"
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
          :data-dec="service.anchor"
          v-html="service.title"
          class="mdev-service-title u-uppercase a-fade-in"
          v-in-viewport></h2>
      </template>
      <!-- Content -->
      <template slot="contentSlot">
        <h2 v-if="service.media"
          :data-dec="service.anchor"
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
            v-for="(topic, index) in service.topics">
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
import MediaCarousel      from '../modules/media-carousel.vue';
import FeaturedServices   from '../modules/featured-services.vue';
//import ChapterHeading     from '../shared/chapter-heading.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';
import SEOData        from '../../site-seo.js';

export default{
  name: 'ServicesDigitalMarketing',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0a1315'
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
      serviceFlag: MdevData.digiads.serviceFlag,
      // SEO
      seo: SEOData.siteSeo,
      // Staging Social URL
      // These variables allow for the creation of OG tags
      // for staging and prod. Change vars in site-seo.js!
      stagingBuild: SEOData.siteSeo.stagingBuild,
      liveUrl: SEOData.siteSeo.siteUrlLive,
      stageUrl: SEOData.siteSeo.siteUrlStaging
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.digiads.title,
      meta: [
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + '/services/digital-marketing/index.html' },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.digiads.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.digiads.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.digiads.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.digiads.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.digiads.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.digiads.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.digiads.desc }
      ]
    };
  },

  mounted: function() {
    this.$nextTick(() => {
      // Collect Elements
      var mainNav = document.querySelectorAll('[data-main-nav]');
      var introHeading = document.querySelectorAll('[data-header-intro]');
      // Add class to nav
      this.addClass(mainNav, '--teal-white');

      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-demystify', {duration: 150});
        });
      }, 100);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-online', {duration: 150});
        });
      }, 450);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-marketing', {duration: 150});
        });
      }, 800);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-digital', {duration: 150});
        });
      }, 1200);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introHeading, '--anim-visible');
        });
      }, 1400);
    });
  },

  components: {
    'media-carousel' : MediaCarousel,
    'service-tile'   : FeaturedServices
    //'chapter-heading': ChapterHeading,
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

.--hero-pad-digi {
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

  @media #{$tablet-prt-only} {
    padding-top: 88%;
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

    @media #{$phone-only} {
      margin-bottom: 10px;
    }
  }

  .--digi-marketing {
    margin-top: 20px;

    @media #{$phone-only} {
      margin-top: 10px;
    }
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

  .--center-digiads {
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

    @media #{$laptop-only} {
      width: 85%;
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
