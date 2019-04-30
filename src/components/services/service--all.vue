<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header">
          <div class="mdev-center">
            <h1
              data-intro-heading
              class="mdev-serv-intro u-c-primary a-blur-in">
              {{ $t('servicepage.intro.heading') }}
            </h1>
            <p
              data-intro-subhead
              class="u-c-white a-blur-in">
              {{ $t('servicepage.intro.subHeading') }}
            </p>

            <!-- [ Disabled for launch ]
            <router-link to="/comingsoon"
              data-header-btn
              title="Coming Soon"
              class="mdev-btn mdev-primary-btn --space-top-xs">
              {{ $t('servicepage.intro.action') }}
            </router-link>
            -->
          </div>
        </div>

        <!-- Sexy Lines -->
        <div class="mdev-sexy-line --sexy-white" data-line-one></div>
        <div class="mdev-sexy-line --sexy-white" data-line-two></div>
        <div class="mdev-sexy-line --sexy-white" data-line-three></div>
      </div>
    </hero-main>
    <!-- Service Tile Loop  -->
    <!-- Flip checks for Odd/Even  -->
    <service-tile v-for="(service, index) in services"
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :id="(index > 0) ? service.anchor : 'mainContent'"
      :flip="((index + 1) % 2) == 0"
      :key="index"
      :media="service.media"
      v-in-viewport
      class="a-fade-in mdev-service --featured-space"
      :class="{ '--square-media' : service.squareImg }"
      :serviceConfig="service.config">
      <!-- Media Slot (Order can be flipped) -->
      <template v-if="service.media" slot="mediaSlot">
        <!-- Image Carousel -->
        <media-carousel
         :flip="((index + 1) % 2) == 1"
         :media="service.media"></media-carousel>
      </template>
      <!-- Content Slot (Order can be flipped) -->
      <template slot="contentSlot">
        <span class="mdev-service-index a-fade-in" v-in-viewport>
          0{{ index + 1 }}
        </span>
        <h2 class="mdev-service-title u-uppercase a-fade-in" v-in-viewport>
          {{ service.title }}
        </h2>
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
        <!-- Primary Button -->
        <btn-primary :BtnData="service.BtnData" v-in-viewport>
          {{ service.action }}
        </btn-primary>
      </template>
    </service-tile>
    <!-- Footer -->
    <main-footer></main-footer>
  </section>
</template>

<script>
// [ Documentation ] - services-parent
// -----------------------------------------
//
// [ Dependencies ]
// hero-main - Main hero component with slots, content is passed from this component onto hero.
// main-footer - Site wide main footer
// featured-content - Simple scaffolding component designed for services page. Content comes from this component.
// btn-primary - Site wide primary button
//
// [ Description ]
// This is a versatile component designed primarily for the services page. It has great
// flexibility in terms of presentation. The basics of this component are 2 slots, one
// for media and one for content. As such this element is only concerned with scaffolding.
// Meaning it will keep both slots separate at a 40/60 split with ability to swap between.
//
// These slots can be re-arranged based on the flags passed by the parent. By virtue of
// having slots this element can easily take in different markup and presentation.

//Local Component registration
import MediaCarousel      from '../modules/media-carousel.vue';
import FeaturedContent    from '../modules/featured-content.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';
import SEOData        from '../../site-seo.js';

export default{
  name: 'ServicesAll',

  data: function() {
    return {
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      // Disables Page Title bar
      pageTitle: 'Services',
      headerDsc: 'A simple animation enticing users to explore all of MDEV digital various services.',
      connectAnim: 'contact/MDEV_HEADER_connect_animated.svg',
      withAnim: 'contact/MDEV_HEADER_with.svg',
      usAnim: 'contact/MDEV_HEADER_us_animated.svg',
      // Services loaded from flat file
      services: MdevData.services,
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
      title: this.seo.services.title,
      meta: [
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + '/services/overview/index.html' },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.services.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.services.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.services.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.services.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.services.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.services.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.services.desc }
      ]
    };
  },

  mounted: function() {
    this.$nextTick(() => {
      // Collect Elements
      var introHeading = document.querySelectorAll('[data-intro-heading]');
      var introSubhead = document.querySelectorAll('[data-intro-subhead]');
      var introBtn = document.querySelectorAll('[data-header-btn]');
      // Fire off animations
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introHeading, 'in-viewport');
        });
        // Adjust Arrow
      }, 300);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introSubhead, 'in-viewport');
        });
      }, 900);
      //setTimeout(() => {
      //  this.addClass(introBtn, 'in-viewport');
      //}, 1500);
    });
  },

  components: {
    'media-carousel' : MediaCarousel,
    'service-tile'   : FeaturedContent
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* SERVICES ALL Component Styles
/--------------------------------------*/

.mdev-vivus-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0 5%;
}

.mdev-center {
  width: 100%;
  padding: 0 13%;
  @include center(both);

  @media #{$tablet-only} {
    padding: 0 12%;
  }

  @media #{$laptop-only} {
    padding: 0 14%;
  }

  @media #{$desktop-up} {
    width: 55%;
    padding: 0;
  }

  .mdev-serv-intro {
    line-height: 120%;
  }
}

.--hero-padding {
  padding-top: 40%;

  @media #{$portrait} {
    padding-top: 115%;
  }

  @media #{$laptop-only} {
    padding-top: 50%;
  }

  @media #{$phone-only} {
    padding-top: 140%;
  }

  @media #{$tablet-lnd-only} {
    padding-top: 45%;
  }

  @media #{$tablet-prt-only} {
    padding-top: 80%;
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
