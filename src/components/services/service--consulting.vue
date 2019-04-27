<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-digiads">
          <div class="mdev-center">
            <div class="flex flex-vert-center  flex-hor-start --portrait-wrap">
              <object class="--con-keep" id="anim-keep" type="image/svg+xml" :data="loadImage(keepAnim)"></object>
              <div data-header-intro class="--header-cta u-desk-only ">
                 <p>
                   {{ $t('consultingpage.intro') }}
                 </p>
              </div>
            </div>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--con-the" id="anim-the" type="image/svg+xml" :data="loadImage(theAnim)"></object>
              <object class="--con-wheels" id="anim-wheels" type="image/svg+xml" :data="loadImage(wheelsAnim)"></object>
              <!-- CTA Text & Button -->
            </div>
            <div class="flex --turning">
              <object class="--con-turning" id="anim-turning" type="image/svg+xml" :data="loadImage(turningAnim)"></object>
            </div>
              <div data-header-intro class="--header-cta u-phone-only ">
                 <p>
                   {{ $t('consultingpage.intro') }}
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
    <--
    <!-- Chapter Content -->
    <!-- Service Solo -->
    <service-tile v-for="(service, index) in serviceSolo"
      :id="service.anchor"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :flip="((index + 1) % 2) == 1"
      :linkData="service.caseStudy"
      :key="index"
      v-in-viewport
      class="a-fade-in mdev-service"
      :class="{ '--no-image' : !service.media }">
      <!-- Media -->
      <template slot="mediaSlot">
        <img v-if="service.media"
          :alt="service.media.imageDesc"
          :src="loadImage(service.media.image)">
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

    <!-- Service Nomedia -->
    <service-nomedia
      :id="service.anchor"
      :decoration="service.anchor"
      v-for="(service, index) in nomedia"
      :key="index"
      :title="service.title"
      :content="service.content"
      ></service-nomedia>

    <!-- Services All -->
    <service-tile v-for="(service, index) in services"
      :id="service.anchor"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :flip="((index + 1) % 2) == 1"
      :key="index"
      :linkData="service.caseStudy"
      v-in-viewport
      class="a-fade-in mdev-service"
      :class="{ '--no-image' : !service.media }">
      <!-- Media -->
      <template slot="mediaSlot">
        <img v-if="service.media"
          :alt="service.media.imageDesc"
          :src="loadImage(service.media.image)">
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
        <!-- Primary Button -->
        <btn-primary v-if="service.BtnData" :BtnData="service.BtnData">
          {{ $t("consultingpage.btnAction") }}
        </btn-primary>
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
import HeroMain           from '../shared/hero-main.vue';
import MainFooter         from '../shared/main-footer.vue';
import PreFooter          from '../shared/pre-footer.vue';
import BtnPrimary         from '../shared/btn-primary.vue';
import FeaturedServices   from '../modules/featured-services.vue';
import FeaturedNomedia    from '../modules/featured-nomedia.vue';
import ChapterHeading     from '../shared/chapter-heading.vue';
import ChapterLink        from '../shared/chapter-link.vue';
// Import Data From Flat File
import MdevData           from '../../mdev-data.js';
import SEOData        from '../../site-seo.js';

export default{
  name: 'ServicesConsulting',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      // Disables Page Title bar
      pageTitle: 'Support Services',
      headerDsc: 'Innovate With Passion',
      keepAnim: 'services/support/MDEV_HEADER_keep_animated.svg',
      turningAnim: 'services/support/MDEV_HEADER_turning_animated.svg',
      theAnim: 'services/support/MDEV_HEADER_the.svg',
      wheelsAnim: 'services/support/MDEV_HEADER_wheels_animated.svg',
      // Chapter Info
      chapter: MdevData.consulting.chapter,
      // Services Data
      serviceSolo: MdevData.consulting.serviceSolo,
      nomedia: MdevData.consulting.servicesNomedia,
      services: MdevData.consulting.services,
      prefooter: MdevData.prefooter,
      serviceFlag: MdevData.consulting.serviceFlag,
      // SEO
      seo: SEOData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.support.title,
      meta: [
        { vmid: 'twimage', name: 'twitter:image', content: this.loadImage(this.seo.support.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: this.loadImage(this.seo.support.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.support.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.support.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.support.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.support.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.support.desc }
      ]
    };
  },

  mounted: function() {
    this.$nextTick(() => {
      // Collect Elements
      var mainNav = document.querySelectorAll('[data-main-nav]')[0];
      var introAnim = document.querySelectorAll('#anim-the')[0];
      var introHeading = document.querySelectorAll('[data-header-intro]');
      this.addClass(mainNav, '--teal-white');

      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-keep', {duration: 150});
        });
      }, 100);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introAnim, '--anim-visible');
        });
      }, 450);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-wheels', {duration: 150});
        });
      }, 800);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-turning', {duration: 150});
        });
      }, 1200);
      setTimeout(() => {
        requestAnimationFrame(() => {
          for (var i=0; i < introHeading.length; i++) {
            this.addClass(introHeading[i], '--anim-visible');
          };
        });
      }, 1700);
    });
  },

  components: {
    'hero-main'      : HeroMain,
    'main-footer'    : MainFooter,
    'pre-footer'     : PreFooter,
    'service-tile'   : FeaturedServices,
    'chapter-heading': ChapterHeading,
    'chapter-link'   : ChapterLink,
    'service-nomedia': FeaturedNomedia,
    'btn-primary'   : BtnPrimary
  }
};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* SERVICES--CONSULTING Component Styles
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

  @media #{$tablet-prt-only} {
    padding-top: 88%;
  }
}

.--vivus-digiads {

  .--con-keep {
    width: 48%;
  }

  .--con-turning {
    height: 10vw;
  }

  .--con-the {
    opacity: 0;
    transition: opacity 1.2s;
    height: 7vw;
  }

  .--con-the,
  .--con-wheels {
    margin: 20px 0;
  }

  .--con-wheels {
    height: 10vw;
  }


  .--header-cta {
    opacity: 0;
    width: 40%;
    transition: opacity 1.2s;
    margin-left: 20px;
    position: relative;
    right: 0;

    @media #{$portrait} {
      width: 100%;
      margin-left: 0;
      text-align: left;
      margin-top: $heading-top-padding-mob + 10;
    }

    @media #{$tablet-lnd-only} {
      width: 60%;
      font-size: 14px;
    }
  }

  .--anim-visible {
    opacity: 1;
  }

  .--turning {
    justify-content: flex-end;

    @media #{$portrait} {
      justify-content: flex-start;
    }
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
