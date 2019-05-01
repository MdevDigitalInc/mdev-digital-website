<template>
  <main id="app">
    <img :src="loadImage('MDEV-main-hero.png')" class="u-screenreader" />
    <!-- Skip Navigatio Accessbility -->
    <button href="#mainContent"
      v-if="!isLoading"
      title="Skip to main content"
      aria-label="Skip to main content"
      v-on:click.stop.prevent="skipNav"
      class="mdev-skipnav" tabindex="0">
      Skip To Main Content
    </button>
    <!-- Main Nav -->
    <main-navigation v-if="!isLoading"></main-navigation>
    <!-- Main View -->
    <transition name="fade" v-if="!isLoading">
      <router-view></router-view>
    </transition>
    <div v-if="secret && !isLoading" class="--secret">
      <img :src="loadImage(seo.secret)" alt="You found me!"/>
    </div>
    <!-- Brand Animation -->
    <brand-animation v-if="isLoading"></brand-animation>
    <!-- Cookies -->
    <cookie-popup
      :active="showCookies"
      v-if="cookies && !isLoading"
      v-on:dismiss="cookies = false"></cookie-popup>
  </main>
</template>

<script>
//Local Component registration
import MainNavigation from './components/shared/navigation.vue';
import CookiePopup    from './components/shared/cookies.vue';
import BrandAnimation from './components/shared/brand-animation.vue';
// Import Data From Flat File
import MdevData       from './mdev-data.js';
import SEOData        from './site-seo.js';

export default {
  name: 'MDEVDigitalApp',
  // SEO Meta Information
  data: function(){
    return {
      seo: SEOData.siteSeo,
      secret: false,
      isLoading: true,
      cookies: false,
      showCookies: false,
      isHome: true,
      brandReverse: false,
      keys: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      current: 0,
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
      title: this.seo.app.title,
      titleTemplate: this.seo.template,
      link: [
        // Font Awesome
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity:'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous' },
        // Alertify
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/alertifyjs/1.9.0/css/alertify.min.css' }
      ],
      script: [
        // Alertify
        { src: 'https://cdn.jsdelivr.net/alertifyjs/1.9.0/alertify.min.js', async: true, defer: true },
      ],
      meta: [
        // SEO
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) },
        { vmid: 'ogappid', property: 'fb:app_id', content: this.seo.social.appid },
        { vmid: 'ogtype', property: 'og:type', content: this.seo.social.ogtype },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc }
      ]
    };
  },

  components: {
    'main-navigation' : MainNavigation,
    'brand-animation' : BrandAnimation,
    'cookie-popup'    : CookiePopup,
  },

  created: function(){
    // [ PRERENDERER CAVEATS ] -----------------------------
    // Prerenderers are great cuz SEO... but they suck at handling
    // script injection from trackers.
    // To solve the problem, we prevent the scripts from being loaded.
    //
    // __PRERENDER_INJECTED is a window object that only gets added by
    // the prerenderer. These async calls will only execute on the intended
    // client side environment.
    if (!window.__PRERENDER_INJECTED) {
      // Load Google Maps
      this.asyncScript( 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBqIEqMAu1tnDhpPmRlesqA7Q1Na46AZs', true, true);
      // Load Google Tag Manager
      this.asyncScript( 'https://www.googletagmanager.com/gtag/js?id=UA-91898048-1', true, true);
      this.asyncScript( '/js/googletag.js', false, false);
      // Load Facebook Pixel
      this.asyncScript( '/js/fbpixel.js', false, false);
    }
    // Add key event listener for Konami
    window.addEventListener("keyup", this.konami);
  },

  beforeDestroy: function() {
    // Remove listener on Destroy
    window.removeEventListener("keyup", this.konami);
  },

  mounted: function(){
    // Wait for full load and next tic on VM
    this.$nextTick(() => {
      // Load elements
      var loadAnim = document.querySelectorAll('[data-load-anim]');
      var loadWindow = document.querySelectorAll('[data-load-window]');
      // Logo & Loading screen
      setTimeout(() => {
        requestAnimationFrame(() => {
          // Make Logo appear...
          this.addClass(loadAnim, '--opacity-active');
       });
      }, 100);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(loadAnim, '--transform-active');
        });
      }, 900);
      setTimeout(() => {
        requestAnimationFrame(() => {
          // Make Logo Disappear...
          this.removeClass(loadAnim, '--opacity-active');
          // Make Content Disappear
          this.addClass(loadWindow, '--opacity');
        });
      }, 1900);

      // Update Data
      setTimeout(() => {
        // Flip Flag to finish loading
        this.isLoading = false;
      }, 2800);

      // Check Cookies
      setTimeout(() => {
        requestAnimationFrame(() => {
          // Check if cookies are enabled
          this.checkCookie();
          // [ PRERENDER SNAPSHOT ] ------------------------
          // Dispatches event to tell the prerenderer to take snapshot
          if (window.__PRERENDER_INJECTED) {
            document.dispatchEvent(new Event('spa-rendered'));
          }
          else {
            // Track event on Facebook
            window.fbq('track', 'PageView');
          }
        });
      }, 15000);

      // [ FANCY CONSOLE OUTPUT ] --------------------------
      // each %c allows you to create a styling block
      // style each block in order below it
      if ( navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ) {
        window.console.log.apply(console, [
          "\n %c Made with SASS by MDEV Digital 😜 %c \n %c Hey Psst...like playing with code? Send your resume to contact@mdev.digital!",
          "color: #fff; background: #16b1a9; ;font-family: sans-serif; text-transform: uppercase; font-size: 225%; font-weight: 700; padding:10px; border-radius: 20px 20px 0 0;",
          "background: transparent;",
          "color: #16b1a9; background: #1c1c1c; ;font-family: sans-serif; text-transform: uppercase; font-size: 100%; font-weight: 400; padding:20px 10px; border-radius: 0 0  20px 20px;",
        ]);
        window.console.log.apply(console, [
        ]);
      }
      // Output standard message for other browsers
      else {
        console.log('Made by MDEV Digital 😜 | https://mdev.digital');
      }
    });
  },

  updated: function () {
    // Add the active class back since it gets stripped on update above
    var mainNav = document.querySelectorAll('[data-main-nav]');
    requestAnimationFrame(() => {
      this.addClass(mainNav, '--nav-active');
    });

    if (!window.__PRERENDER_INJECTED) {
      window.fbq('track', 'PageView');
    }
  },

  methods: {
    // Skip Navigation for a11y
    skipNav() {
      this.scrollToHash('#mainContent', 50);
    },

    // Check Cookies & Show Popup
    checkCookie() {
      // Poll local storage for data
      var cookie = localStorage.getItem('acceptCookie');
      var expiration = localStorage.getItem('cookieExpiration');

      // Destroy Records
      var destroyTokens = () => {
        localStorage.removeItem('acceptCookie');
        localStorage.removeItem('cookieExpiration');
        // Show Cookie Prompt
        this.cookies = true;
        setTimeout( () => {
          this.showCookies = true;
        }, 800);
      };

      // If either Cookie or Expiration is missing...
      if ( !cookie || !expiration ) {
        destroyTokens();
      }
      // If token is expired..
      else if ( Date.now() > parseInt(expiration) ) {
        destroyTokens();
      }
    },

    // Secret stuff...
    konami(e) {
      const key = e.which || e.keyCode || e.detail;
      if (this.keys.includes(key)) {
        if (key === this.keys[this.current]) {
          this.current += 1;
          if (this.current === this.keys.length) {
            // Show Secret
            this.secret = true;
            // Hide secret!
            setTimeout(() => {
              this.secret = false;
            },3000);
            this.current = 0;
          }
        }
        else {
          this.current = 0;
        }
      }
    }
  }
};
</script>

<style lang="scss">

/*---------------------------------------/
 Global Main
/---------------------------------------*/
@import './assets/styles/global-main.scss';

/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/
body {
  background-color: $color-brand-bkg;
}

.fade-enter {
  transition: 1.4s opacity 1.8s;
}

.fade-leave-to {
  transition: opacity 1.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  position: absolute;
}

.mdev-skipnav {
  display: block;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate3d(-50%, -200%, 0);
  background: transparent;
  text-transform: uppercase;
  color: $color-brand-primary;
  border: 2px solid $color-brand-primary;
  padding: 15px 20px;
  transition: all .8s;
  z-index: 999;
  font-size: 1.5vw;
  opacity: 0;

  &:focus {
    opacity: 1;
    color: $white;
    background: $color-brand-primary;
    transform: translate3d(-50%, 0, 0);
  }
}

// secret...
.--secret {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-brand-bkg;
  z-index: 100;

  img {
    @include center(both);
    width: 100%;
  }
}

// Scrollbar Styling ( Webkit Only )
/* Disabled to use hacks.. */
/* stylelint-disable */

// Scrollbar Width
body::-webkit-scrollbar {
  width: 1vw;
}

// Background of Scrollbar
body::-webkit-scrollbar-track {
  background: lighten($color-brand-bkg, 10%);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

// Scroll Thumb ( Part that moves )
body::-webkit-scrollbar-thumb {
  background-color: lighten($color-brand-primary, 10%);
  outline: 4px solid darken($color-brand-bkg, 10%);
}


::selection {
  background: $color-brand-accent;
}
::-moz-selection {
  background: $color-brand-accent;
}

h1.u-c-primary::selection,
h2.u-c-primary::selection,
h3.u-c-primary::selection,
h4.u-c-primary::selection {
  background: $color-brand-bkg;
}
h1.u-c-primary::-moz-selection,
h2.u-c-primary::-moz-selection,
h3.u-c-primary::-moz-selection,
h4.u-c-primary::-moz-selection {
  background: $color-brand-bkg;
}
/* stylelint-enable */
</style>
