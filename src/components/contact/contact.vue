<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-pad-contact" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header --vivus-contact">
          <div class="--center-contact">
            <div class="flex flex-vert-start --portrait-wrap">
              <object class="--contact-lets" id="anim-lets" type="image/svg+xml" :data="loadImage(letsAnim)"></object>
              <!-- CTA Text & Button -->
              <div data-header-intro class="--header-cta u-desk-only">
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
            <!-- Bottom Container -->
            <div class="flex flex-vert-start">
              <object class="--contact-talk" id="anim-talk" type="image/svg+xml" :data="loadImage(talkAnim)"></object>
            </div>
              <div data-header-intro class="--header-cta u-phone-only">
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
        <!-- Sexy Lines -->
        <div class="mdev-sexy-line --sexy-white" data-line-one></div>
        <div class="mdev-sexy-line --sexy-white" data-line-two></div>
        <div class="mdev-sexy-line --sexy-white" data-line-three></div>
        </div>
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
      pageTitle: 'Contact Us',
      headerDsc: 'An animated segment invites the user to get in touch with MDEV Digital',
      letsAnim: 'contact/MDEV_HEADER_lets_animated.svg',
      talkAnim: 'contact/MDEV_HEADER_talk_animated.svg',
      firstLoad: true,
      // SEO
      seo: SEOData.siteSeo,
      // Animation Flag
      animDone: false,
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
      title: this.seo.contact.title,
      meta: [
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + '/contact/index.html' },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.contact.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.contact.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.contact.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.contact.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.contact.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.contact.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.contact.desc }
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
          new Vivus('anim-talk', {duration: 150});
        });
      }, 600);
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
        // Only fires on first load to prevent endless redraw of map
        if ( this.firstLoad ) {
          scrollTimer = setTimeout(() => {
            this.animDone = true;
            this.firstLoad = false;
          }, scrollTime);
        }
      });
    });
  },

  // Return BKG to stock
  destroyed: function() {
    this.bodyReset('--body-white');
  },

  components: {
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

.--hero-pad-contact {
  padding-top: 46%;

  @media #{$portrait} {
    padding-top: 80%;
  }

  @media #{$phone-only} {
    padding-top: 135%;
  }

  @media #{$tablet-lnd-only} {
    padding-top: 60%;
  }
}

.--vivus-contact {

  .--contact-lets,
  .--contact-talk {
    height: 12vw;

    @media #{$portrait} {
      width: 100%;
      height: auto;
    }
  }

  .--contact-lets {
    margin-right: 40px;

    @media #{$phone-only} {
      margin: 0;
    }
  }

  .--contact-talk {
    margin-top: 40px;
    margin-left: 15%;

    @media #{$laptop-only} {
      margin-left: 10%;
    }

    @media #{$tablet-lnd-only} {
      margin-left: 10%;
    }

    @media #{$portrait} {
      margin-top: 20px;
      margin-left: 10%;
    }

    @media #{$phone-only} {
      margin-left: 0;
    }
  }

  .--header-cta {
    opacity: 0;
    width: 35%;
    transition: opacity 1.2s;

    @media #{$laptop-only} {
      width: 55%;
    }

    @media #{$tablet-lnd-only} {
      width: 55%;
    }

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

  .--center-contact {
    @include center(both);
    width: 65%;

    @media #{$laptop-only} {
      width: 80%;
    }

    @media #{$tablet-lnd-only} {
      width: 80%;
    }

    @media #{$portrait} {
      text-align: center;
    }

    @media #{$phone-only} {
      width: 75%;
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
