<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-pad-brand" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-branding">
          <div class="--center-branding">
            <object class="--branding-tell" id="anim-tell" type="image/svg+xml" :data="loadImage(tellAnim)"></object>
            <object class="--branding-your" id="anim-your" type="image/svg+xml" :data="loadImage(yourAnim)"></object>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap">
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
        <div class="mdev-sexy-line --sexy-white" data-line-one></div>
        <div class="mdev-sexy-line --sexy-white" data-line-two></div>
        <div class="mdev-sexy-line --sexy-white" data-line-three></div>
      </div>
    </hero-main>
    <!-- Chapter Heading
    [ TEMPORARILY COMMENTED OUT ]
    <chapter-heading
      :chapterIndex="chapter.index"
      :chapterTitle="chapter.title"></chapter-heading>
    -->
    <!-- Chapter Content -->
    <service-tile v-for="(service, index) in services"
      :id="service.anchor"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :flip="((index + 1) % 2) == 0"
      :key="index"
      :linkData="service.caseStudy"
      v-in-viewport
      class="a-fade-in mdev-service">
      <!-- Media -->
      <template slot="mediaSlot">
        <!-- Image Carousel -->
        <media-carousel
         :flip="((index + 1) % 2) == 0"
         :media="service.media"></media-carousel>
      </template>
      <!-- Content -->
      <template slot="contentSlot">
        <h2 class="mdev-service-title u-uppercase a-fade-in"
          :data-dec="service.anchor"
          v-html="service.title" v-in-viewport></h2>
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
import FeaturedServices   from '../modules/featured-services.vue';
import MediaCarousel      from '../modules/media-carousel.vue';
//import ChapterHeading     from '../shared/chapter-heading.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';
import SEOData        from '../../site-seo.js';

export default{
  name: 'ServicesBranding',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      // Disables Page Title bar
      pageTitle: 'Branding Services',
      headerDsc: 'Tell Your Story',
      tellAnim: 'services/branding/MDEV_HEADER_tell_animated.svg',
      yourAnim: 'services/branding/MDEV_HEADER_your_animated.svg',
      storyAnim: 'services/branding/MDEV_HEADER_story_animated.svg',
      // Chapter Info
      chapter: MdevData.branding.chapter,
      // Services Data
      services: MdevData.branding.services,
      prefooter: MdevData.prefooter,
      serviceFlag: MdevData.branding.serviceFlag,
      // SEO
      seo: SEOData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.branding.title,
      meta: [
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + '/services/branding/index.html' },
        { vmid: 'twimage', name: 'twitter:image', content: this.loadImage(this.seo.branding.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: this.loadImage(this.seo.branding.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.branding.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.branding.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.branding.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.branding.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.branding.desc }
      ]
    };
  },

  mounted: function() {
    this.$nextTick(() => {
      // Collect Elements
      var mainNav = document.querySelectorAll('[data-main-nav]');
      var introHeading = document.querySelectorAll('[data-header-intro]');
      var introBtn = document.querySelectorAll('[data-header-btn]');
      var introAnim = document.querySelectorAll('#anim-your');
      // Add class to nav
      this.addClass(mainNav, '--teal-white');
      // Fire off animation
      setTimeout(() => {
        new Vivus('anim-tell', {duration: 150});
      }, 100);
      setTimeout(() => {
        new Vivus('anim-your', {duration: 180});
        this.addClass(introAnim, '--anim-visible');
      }, 450);
      setTimeout(() => {
        new Vivus('anim-story', {duration: 180});
      }, 1700);
      setTimeout(() => {
        this.addClass(introHeading, '--anim-visible');
      }, 2200);
    });
  },

  components: {
    //'chapter-heading': ChapterHeading,
    'media-carousel' : MediaCarousel,
    'service-tile'   : FeaturedServices
  }
};

</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* CONTACT Component Styles
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

.--hero-pad-brand {
  padding-top: 50%;

  @media #{$portrait} {
    padding-top: 98%;
  }

  @media #{$phone-only} {
    padding-top: 170%;
  }

  @media #{$tablet-lnd-only} {
    padding-top: 60%;
  }

  @media #{$tablet-prt-only} {
    padding-top: 118%;
  }

  @media #{$xl-up} {
    padding-top: 40%;
  }
}

.--vivus-branding {

  .--branding-tell {
    width: 40%;
    margin-bottom: $heading-top-padding;

    @media #{$laptop-only} {
      margin-bottom: 20px;
    }
    @media #{$portrait} {
      width: 100%;
      margin-bottom: $heading-top-padding-mob;
    }
    @media #{$tablet-prt-only} {
      margin-bottom: $heading-top-padding-mob + 10;
    }
  }

  .--branding-your {
    width: 47%;
    margin-bottom: $heading-top-padding;
    transform: translatey(5px);

    @media #{$laptop-only} {
      margin-bottom: 20px;
    }
    @media #{$portrait} {
      width: 100%;
      transform: translatey(0);
      margin-bottom: $heading-top-padding-mob;
    }
    @media #{$tablet-prt-only} {
      margin-bottom: $heading-top-padding-mob + 10;
    }
  }

  .--branding-story {
    width: 55%;
    margin-right: 30px;

    @media #{$portrait} {
      width: 100%;
      margin-bottom: $heading-top-padding-mob;
      margin-right: 0;
    }
    @media #{$tablet-prt-only} {
      margin-bottom: $heading-top-padding-mob + 10;
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
  }

  .--center-branding {
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
