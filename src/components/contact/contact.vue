<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-contact">
          <div class="mdev-center">
            <div class="flex flex-vert-start">
              <object class="--contact-lets" id="anim-lets" type="image/svg+xml" :data="loadImage(letsAnim)"></object>
              <object class="--contact-start" id="anim-start" type="image/svg+xml" :data="loadImage(startAnim)"></object>
            </div>
            <!-- Bottom Container -->
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--contact-something" id="anim-something" type="image/svg+xml" :data="loadImage(somethingAnim)"></object>
              <object class="--contact-new" id="anim-new" type="image/svg+xml" :data="loadImage(newAnim)"></object>
              <!-- CTA Text & Button -->
              <div data-header-intro class="--header-cta">
                <p>
                  {{ $t('contact.description') }}
                </p>
                 <a data-header-btn
                    href="javascript:void(0)"
                    v-on:click.prevent.stop="scrollToHash('#mainContent', 50)"
                    title="Contact Us"
                    class="mdev-btn mdev-primary-btn">
                   {{ $t('contact.headerBtn') }}
                 </a>
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
    <!-- Map -->
    <contact-map :animLoaded="animDone" v-view="(e) => changeNavBrand(e, '--teal-white')"></contact-map>
    <!-- form -->
    <contact-form  v-view="(e) => changeNavBrand(e, '--white-black')" id="mainContent"></contact-form>
    <!-- Footer -->
    <main-footer></main-footer>
  </section>
</template>


<script>
//Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import MainFooter         from '../shared/main-footer.vue';
import ContactMap         from './contact--map.vue';
import ContactForm        from './contact--form.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';
import SEOData        from '../../site-seo.js';

export default {
  name: 'Contact',

  data: function(){
    return{
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      // Disables Page Title bar
      pageTitle: 'Let\'s Talk!',
      headerDsc: 'An animated segment invites the user to Start something new by getting in touch with MDEV Digital',
      letsAnim: 'contact/MDEV_HEADER_lets_animated.svg',
      startAnim: 'contact/MDEV_HEADER_start_animated.svg',
      somethingAnim: 'contact/MDEV_HEADER_something.svg',
      newAnim: 'contact/MDEV_HEADER_new_animated.svg',
      // SEO
      seo: SEOData.siteSeo,
      // Animation Flag
      animDone: false
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.contact.title,
      meta: [
        { vmid: 'twimage', name: 'twitter:image', content: this.loadImage(this.seo.contact.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: this.loadImage(this.seo.contact.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.contact.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.contact.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.contact.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.contact.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.contact.desc }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.3.1.min.js', integrity:'sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=', crossorigin:'anonymous' }
      ]
    };
  },

  mounted: function() {
    // Make BKG White
    this.bodyClass('--body-white');
    this.$nextTick(() => {
      // Collect Elements
      var mainNav = document.querySelectorAll('[data-main-nav]');
      var introHeading = document.querySelectorAll('[data-header-intro]');
      var introAnim = document.querySelectorAll('#anim-something');
      var introBtn = document.querySelectorAll('[data-header-btn]');
      // Add Class to Nav
      this.addClass(mainNav, '--teal-white');
      // Fire off Animations
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-lets', {duration: 150});
        });
      }, 200);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-start', {duration: 150});
        });
      }, 600);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introAnim, '--anim-visible');
        });
      }, 750);
      setTimeout(() => {
        requestAnimationFrame(() => {
          new Vivus('anim-new', {duration: 180});
        });
      }, 2800);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introHeading, '--anim-visible');
        });
      }, 3300);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introBtn, 'in-viewport');
        });
      }, 3500);
      setTimeout(() => {
        // Flip Flag --------------[ STARTS LOADING MAP ]
        // Deferred till end of animation for performance
        this.animDone = true;
      }, 3800);
      // Listen to scroll and load map sooner if user moves
      let scrollTimer;
      let scrollTime = 50;
      // Event Listener on scroll with debounce
      window.addEventListener('scroll', () => {
        // Grab the Window Path for Scroll Y
        let distanceTop = event.path[1].scrollY;
        clearTimeout(scrollTimer);
        // If user scrolls load map right away
        scrollTimer = setTimeout(this.animDone = true,scrollTime);
      });
    });
  },

  // Return BKG to stock
  destroyed: function() {
    this.bodyReset('--body-white');
  },

  components: {
    'hero-main'     : HeroMain,
    'main-footer'   : MainFooter,
    'contact-map'   : ContactMap,
    'contact-form'  : ContactForm
  }
};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* CONTACT Component Styles
/--------------------------------------*/

.mdev-vivus-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0 5%;
}

.--hero-padding {
  padding-top: 40%;

  @media #{$portrait} {
    padding-top: 68%;
  }

  @media #{$phone-only} {
    padding-top: 100%;
  }

  @media #{$tablet-lnd-only} {
    padding-top: 60%;
  }
}

.--vivus-contact {

  .--contact-lets,
  .--contact-start {
    height: 10vw;
    margin-bottom: 20px;

    @media #{$portrait} {
      height: 9vw;
      margin-bottom: 10px;
    }
  }

  .--contact-lets {
    margin-right: 40px;

    @media #{$portrait} {
      margin-right: 20px;
    }
  }


  .--contact-something {
    width: 25%;
    opacity: 0;
    transition: 1.8s opacity 1.2s;

    @media #{$portrait} {
      width: 30%;
    }

    @media #{$phone-only} {
      width: 40%;
    }
  }

  .--contact-new {
    height: 10vw;
    margin: 0 40px;

    @media #{$portrait} {
      height: 9vw;
      margin: 0 20px;
    }
  }

  .--header-cta {
    opacity: 0;
    width: 30%;
    transition: opacity 1.2s;

    @media #{$portrait} {
      width: 100%;
      text-align: left;
      margin-top: 20px;
    }

    @media #{$tablet-lnd-only} {
      width: 40%;
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
      text-align: center;
    }
  }

  .mdev-primary-btn {
    margin-top: 25px;

    @media #{$desktop-up} {
      margin-top: 30px;
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
