<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-branding">
          <div class="mdev-center">
            <div class="flex flex-vert-center --portrait-wrap --build-pad">
              <object class="--app-build" id="anim-build" type="image/svg+xml" :data="loadImage(buildAnim)"></object>
              <div data-header-intro class="--header-cta u-desk-only">
                <p>
                  {{ $t('appdevpage.intro') }}
                </p>
              </div>
            </div>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--app-the" id="anim-the" type="image/svg+xml" :data="loadImage(theAnim)"></object>
              <object class="--app-future" id="anim-future" type="image/svg+xml" :data="loadImage(futureAnim)"></object>
              <!-- CTA Text & Button -->
            </div>
            <div data-header-intro class="--header-cta u-phone-only">
              <p>
                {{ $t('appdevpage.intro') }}
              </p>
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
        <h2
          :data-dec="service.anchor"
          v-html="service.title"
          class="mdev-service-title u-uppercase a-fade-in" v-in-viewport></h2>
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
            v-for="(topic, index) in service.topics">
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
import FeaturedServices   from '../modules/featured-services.vue';
import FeaturedNomedia    from '../modules/featured-nomedia.vue';
import MediaCarousel      from '../modules/media-carousel.vue';
//import ChapterHeading     from '../shared/chapter-heading.vue';
import PageIntro          from '../shared/page-intro.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';
import SEOData        from '../../site-seo.js';

export default{
  name: 'ServicesAppDev',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      // Disables Page Title bar
      pageTitle: 'Aapps & Software Services',
      headerDsc: 'Innovate With Passion.',
      buildAnim: 'services/appdev/MDEV_HEADER_build_animated.svg',
      theAnim: 'services/appdev/MDEV_HEADER_the.svg',
      futureAnim: 'services/appdev/MDEV_HEADER_future_animated.svg',
      // Chapter Info
      chapter: MdevData.appdev.chapter,
      // Services Data
      services: MdevData.appdev.services,
      prefooter: MdevData.prefooter,
      serviceFlag: MdevData.appdev.serviceFlag,
      nomedia: MdevData.appdev.servicesNomedia,
      serviceIntro: MdevData.appdev.serviceIntro,
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
      title: this.seo.appdev.title,
      meta: [
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + '/services/app-development/index.html' },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.appdev.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.appdev.ogimage) },
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
      // Collect Elements
      var mainNav = document.querySelectorAll('[data-main-nav]');
      var introAnim = document.querySelectorAll('#anim-the');
      var introHeading = document.querySelectorAll('[data-header-intro]');
      // Add Class to Nav
      this.addClass(mainNav, '--teal-white');
      // Fire off Animations
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-build', {duration: 150});
        });
      }, 100);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introAnim, '--anim-visible');
        });
      }, 450);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-future', {duration: 150});
        });
      }, 800);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introHeading, '--anim-visible');
        });
      }, 1200);
    });
  },

  components: {
    //'chapter-heading': ChapterHeading,
    'media-carousel' : MediaCarousel,
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

  .--app-build {
    width: 90%;
    margin-right: 4%;

    @media #{$portrait} {
      width: 100%;
      margin-right: 0;
      margin-bottom: $heading-top-padding-mob;
    }
  }

  .--build-pad {
    margin-bottom: $heading-top-padding;

    @media #{$portrait} {
      margin-bottom: $heading-top-padding-mob;
    }
  }

  .--app-the {
    width: 15%;
    opacity: 0;
    transition: all .6s;
  }

  .--app-future {
    width: 83%;
    margin: 0 0 0 2%;
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
