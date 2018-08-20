<template>
  <nav
    class="mdev-main-nav --nav-color"
    :class="{ '--teal-black': reverseBrand }"
    aria-role="navigation"
    data-main-nav role="navigation">
    <div class="mdev-nav-wrapper flex flex-nowrap flex-hor-between flex-vert-center">
      <router-link :to="homeLink"
        :title="homeTitle"
        :tabindex="(navIsOpen ? -1 : 0)"
        class="mdev-live-brand"
        :class="{ '--remove-brand': navIsOpen }">
        <!-- Logo SVGs -->
        <svg data-mdev-top xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 70"><polygon class="mdev-svg-1" points="0 25 0.5 25.3 1 25.6 45 1.1 45 0.6 45 0.6 45 0 0 25"/><polygon class="mdev-svg-1" points="0 25 0 45 45 70 45 50 0 25"/><polygon class="mdev-svg-2" points="90 25 89.5 25.3 89 25.6 45 1.1 45 0.6 45 0.6 45 0 90 25"/><polygon class="mdev-svg-2" points="90 25 90 45 45 70 45 50 90 25"/></svg>
        <svg data-mdev-mid xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 50"><polygon class="mdev-svg-1" points="0 5 0 25 45 50 45 30 0 5"/><polygon class="mdev-svg-1" points="9 0 0 5 0.5 5.3 1 5.6 10 0.6 9 0"/><polygon class="mdev-svg-2" points="90 5 90 25 45 50 45 30 90 5"/><polygon class="mdev-svg-2" points="81 0 90 5 89.5 5.3 89 5.6 79.9 0.6 81 0"/></svg>
        <svg data-mdev-bot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 50"><polygon class="mdev-svg-1" points="0 5 0 25 45 50 45 30 0 5"/><polygon class="mdev-svg-1" points="9 0 0 5 0.5 5.3 1 5.6 10 0.6 9 0"/><polygon class="mdev-svg-2" points="90 5 90 25 45 50 45 30 90 5"/><polygon class="mdev-svg-2" points="81 0 90 5 89.5 5.3 89 5.6 79.9 0.6 81 0"/></svg>

        <!--Hidden Brand Flyout -->
        <div class="mdev-hidden-brand">
          <svg data-mdev-wtop xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.5 42.7"><path class="mdev-svg-1" d="M57.5,48.7V6H71.2A20.4,20.4,0,0,1,81.4,8.6a18,18,0,0,1,7,7.2A21.5,21.5,0,0,1,91,26.3v2a21.4,21.4,0,0,1-2.5,10.5,17.4,17.4,0,0,1-7,7.2,19,19,0,0,1-10,2.7ZM67.8,14V40.8h3.5a8,8,0,0,0,6.8-3.2q2.4-3.1,2.4-9.3V26.4q0-6.1-2.4-9.3A8.1,8.1,0,0,0,71.2,14Z" transform="translate(-6.3 -6)"/><path class="mdev-svg-1" d="M121.2,30.6H105.1V40.8h19.1v7.9H94.8V6h29.4v8H105.1v9h16.1Z" transform="translate(-6.3 -6)"/><path class="mdev-svg-1" d="M147.8,37.1,156.3,6h11.5L153.4,48.7H142.1L127.9,6h11.4Z" transform="translate(-6.3 -6)"/><path class="mdev-svg-1" d="M19.8,6l9.5,29.7L38.8,6H52.3V48.7H42.9V18.3L32.7,48.7H25.9L15.5,18.3l.2,20.4v10H6.3V6Z" transform="translate(-6.3 -6)"/></svg>
          <svg data-mdev-wbot xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.5 31.4"><path class="mdev-svg-2" d="M29.4,20.4c0,5.1-1.3,8.9-4,11.6s-6.6,3.9-11.8,3.9H6.3V5.4h8.2c4.9,0,8.6,1.3,11.1,3.8S29.4,15.5,29.4,20.4Zm-2.3,0c0-4.3-1.1-7.6-3.3-9.8S18.3,7.3,14,7.3H8.4V34h5.1C22.6,34,27.1,29.5,27.1,20.4Z" transform="translate(-6.3 -4.9)"/><path class="mdev-svg-2" d="M38.3,35.9V5.4h2.1V35.9Z" transform="translate(-6.3 -4.9)"/><path class="mdev-svg-2" d="M62.8,20.5H74V34.4a24,24,0,0,1-9.9,1.9c-4.8,0-8.5-1.4-11.1-4.1s-3.8-6.5-3.8-11.5a17.2,17.2,0,0,1,1.9-8.3,13.6,13.6,0,0,1,5.4-5.5,16.9,16.9,0,0,1,8.2-2,20.5,20.5,0,0,1,9,1.9l-.9,1.9a18.3,18.3,0,0,0-8.2-1.9A12.7,12.7,0,0,0,55,10.6c-2.3,2.4-3.5,5.8-3.5,10s1.1,8,3.3,10.4,5.6,3.4,9.9,3.4a19.4,19.4,0,0,0,7.2-1.2V22.5H62.8Z" transform="translate(-6.3 -4.9)"/><path class="mdev-svg-2" d="M83.6,35.9V5.4h2.2V35.9Z" transform="translate(-6.3 -4.9)"/><path class="mdev-svg-2" d="M107.4,35.9h-2.2V7.4H95.3v-2h22v2h-9.9Z" transform="translate(-6.3 -4.9)"/><path class="mdev-svg-2" d="M135.7,25.1H123.3l-4.2,10.8h-2.4L129,5.3h1.3l12,30.6h-2.4Zm-11.6-1.9H135l-4.2-11q-.5-1.2-1.2-3.6c-.4,1.4-.8,2.6-1.2,3.7Z" transform="translate(-6.3 -4.9)"/><path class="mdev-svg-2" d="M151.1,35.9V5.4h2.1V33.9h14.6v2Z" transform="translate(-6.3 -4.9)"/></svg>
        </div>
      </router-link>
      <button
        class="mdev-nav-open"
        :class="{ '--nav-open': navIsOpen }"
        title="Main Navigation Menu"
        tabindex="0"
        :aria-label="( navIsOpen ? labelClose : labelOpen )"
        v-on:click.self.stop="openMenu">
        <span v-on:click.self.stop="openMenu"></span>
        <span v-on:click.self.stop="openMenu"></span>
        <span v-on:click.self.stop="openMenu"></span>
      </button>
    </div>
    <!--
    <button @click="change()">CHANGE</button>
    -->
    <div class="mdev-hidden-nav"
      :class="{ '--hid-nav-open': navIsOpen }"
      :aria-hidden="!navIsOpen">
      <!-- HiddenNav Component -->
      <hidden-nav>
        <template slot="sidebar">
          <!-- Loads Sidebar on named slot -->
          <hidden-nav-sidebar :showLinks="navIsOpen">
            <!-- Loads Social Links on Sidebar Slot -->
            <social-links darkTheme="" :showLinks="navIsOpen" :linkContent="socialLinks"></social-links>
          </hidden-nav-sidebar>
        </template>
        <template slot="main">
          <!-- Loads Links on named slot -->
          <hidden-nav-links :links="links" :showLinks="navIsOpen" ></hidden-nav-links>
        </template>
      </hidden-nav>
    </div>
  </nav>
</template>


<script>
// Import Components for Nav
import HiddenNav        from './hidden-nav.vue';
import HiddenNavSidebar from './hidden-nav--sidebar.vue';
import HiddenNavLinks   from './hidden-nav--links.vue';
import SocialLinks      from './social-links.vue';
// Import Flat File Data
import MdevData         from '../../mdev-data.js';

export default{
  // <router-link> element is a custom element derived from vue-router. use :to - to bind.
  data: function(){
    return{
      // Refer to routes.js file for available routes.
      // Links are passed as object to hidden-nav-links
      // Social links stored in flat file
      socialLinks: MdevData.socialLinks,
      // Links pulled from flat file
      links: MdevData.links,
      // Main Home Link On sidebar
      homeLink: '/',
      homeTitle: 'Home',
      mdevBrandMid: 'svg/logo-pieces/MDEV_RGB_Icon_TealWhite_Bottom.svg',
      mdevBrandTop: 'svg/logo-pieces/MDEV_RGB_Icon_TealWhite_Top.svg',
      mdevWordTop: 'svg/logo-pieces/MDEV_RGB_WM_Teal_Top.svg',
      mdevWordBot: 'svg/logo-pieces/MDEV_RGB_WM_White_Bottom.svg',
      // Flag for controlling the nav states
      navIsOpen: false,
      labelOpen: 'Open Main Navigation Menu',
      labelClose: 'Close Main Navigation Menu'
    };
  },

  props: [ 'reverseBrand' ],

  // Watch route change and toggle menu if user navigates away
  watch: {
    $route (to,from) {
      // If Nav was open when route changes.. close it
      if ( this.navIsOpen ) {
        this.closeMenu();
      }
    }
  },

  mounted: function() {
    // Scroll timer to debounce
    let scrollTimer;
    let scrollDistance;
    let desiredOffset = 420;
    let scrollTime = 20;

    // Check to see that the page title is there
    if ( $('[data-page-title]').length !== 0 ) {
      scrollDistance = $('[data-page-title]').offset().top;
    }
    else {
      scrollDistance = 600;
    }

    function userScroll( distance ) {
      // If user scrolls past desired distance remove effects
      if ( distance >= (scrollDistance - desiredOffset) ) {
        $('[data-main-header]').addClass('--user-scroll');
        $('[data-main-nav]').addClass('--user-scroll');
      }
      else if (distance <= 0) {
        $('[data-main-header').removeClass('--user-scroll');
        $('[data-main-nav').removeClass('--user-scroll');
      }
      else {
        $('[data-main-header').removeClass('--user-scroll');
        $('[data-main-nav').removeClass('--user-scroll');
      }
    }

    // Event Listener on scroll with debounce
    $(window).scroll( function() {
      let distanceTop = $(document).scrollTop();
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(userScroll(distanceTop),scrollTime);
    });
  },

  methods: {
    // Flip Nav flag & animate sidebar
    openMenu() {
      this.navIsOpen = !this.navIsOpen;
      $('[data-main-links]').removeClass('--showLinks');
      $('body').toggleClass('u-freeze-scroll');
      // Timeout is either 400 / 0 depending on if its opening or closing
      setTimeout(function(){
        $('[data-nav-content]').toggleClass('--active-sidebar');
      }, ( this.navIsOpen ? 400 : 0) );
    },

    // Force close menu on route change
    // avoids issues if user goes back on history
    closeMenu() {
      this.navIsOpen = false;
      $('[data-main-links]').removeClass('--showLinks');
      $('body').removeClass('u-freeze-scroll');
      $('[data-nav-content]').removeClass('--active-sidebar');
    }
  },

  // Components
  components: {
    'hidden-nav' : HiddenNav,
    'hidden-nav-sidebar' : HiddenNavSidebar,
    'hidden-nav-links' : HiddenNavLinks,
    'social-links' : SocialLinks
  }
};

</script>



<style lang="scss">
/*--------------------------------------*/
/* MAIN NAVIGATION Component Styles
/*--------------------------------------*/
.mdev-main-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: $nav-padding;
  z-index: 10;
  transition: all, .3s;
  background: rgba(51, 51, 51, 0);

  @media #{$portrait} {
    padding: $nav-padding-prt;
  }

  svg {
    width: 100%;
  }

  .mdev-social-links {
    /* stylelint-disable */
    @media #{$portrait} {
      justify-content: center !important;
    }
    /* stylelint-enable */
  }
}

.mdev-nav-wrapper {
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0;
  min-width: 290px;
}

.mdev-live-brand {
  height: auto;
  width: 2.5%;
  opacity: 0;
  min-width: 25px;
  transition: all 1.8s;

  &:hover {
    cursor: pointer;
    opacity: .8;

    .mdev-hidden-brand svg {
      transform: translate3d(0, 0, 0);
      opacity: 1;
      transition: transform .3s, opacity .8s;
    }
  }

  svg {
    position: relative;
    width: 100%;
    transition: all 2.9s;
  }

  svg[ data-mdev-top ] {
    transform: translate3d(0, 53%, 0);
  }

  svg[ data-mdev-bot ] {
    transform: translate3d(0, -74%, 0);
  }
}

.mdev-nav-open {
  width: 2.5%;
  height: auto;
  position: relative;
  overflow: visible;
  max-width: 42px;
  min-width: 25px;
  padding: 0;
  z-index: 99;
  margin: 0;
  opacity: 0;
  border: none;
  background: transparent;
  transition: .6s all;

  @media #{$portrait} {
    width: 4.5%;
  }

  span {
    display: block;
    position: relative;
    width: 100%;
    background: $color-brand-primary;
    height: 5px;
    box-shadow: 0 0 3px rgba(201, 255, 252, 0);
    transition: all .5s, opacity .3s;
    border: 1px solid rgba(13, 119, 113, 0);


    &:first-child {
      transform: translate3d(0, -7px, 0 );
      opacity: 1;

      @media #{$phone-only} {
        transform: translate3d(0, -5px, 0 );
      }
    }

    &:last-child {
      transform: translate3d(0, 7px, 0 );

      @media #{$phone-only} {
        transform: translate3d(0, 5px, 0 );
      }
    }
  }

  &:hover {
    cursor: pointer;

    span {
      border: 1px solid rgba(13, 119, 113, 1);
      background: lighten( $color-brand-primary, 18%);
      box-shadow: 0 0 3px rgba(201, 255, 252, .5);
    }
  }

  &:focus,
  &:active {
    outline: none;

    span {
      border: 1px solid rgba(13, 119, 113, 0);
    }
  }
}

.mdev-hidden-brand {
  width: 4.5%;
  position: absolute;
  top: 27%;
  left: 3.2%;
  z-index: -1;

  svg {
    opacity: 0;
    transition: transform .8s, opacity .4s;
    transform: translate3d(-70%, 0, 0);
  }
}

.mdev-hidden-nav {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  height: 100vh;
  left: 0;
  background: $color-brand-primary;
  z-index: 2;
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  transition: opacity .8s, transform .3s;
  padding: 0;
  margin: 0;
}

// Nav Open and Active
.--hid-nav-open {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.--nav-open {
  span {
    background: white;

    &:first-child {
      transform: translate3d(0, -80px, 0);
      opacity: 0;
    }

    &:last-child {
      transform: rotate3d(0, 0, 1, 45deg);
      top: -5px;
    }

    &:nth-child( even ) {
      transform: rotate3d(0, 0, 1, -45deg);
    }
  }
  &:hover {
    span {
      background: darken($color-brand-primary, 25%);
      box-shadow: 0 0 3px rgba(201, 255, 252, 0);
    }
  }
}

// Nav Active from page load
.--nav-active {
  .mdev-live-brand,
  .mdev-nav-open {
    opacity: 1;
  }
  .mdev-live-brand {
    svg[ data-mdev-top ] {
      transform: translate3d(0, 36%, 0);

      @media #{$phone-only} {
        transform: translate3d(0, 44%, 0);
      }
    }

    svg[ data-mdev-bot ] {
      transform: translate3d(0, -50%, 0);

      @media #{$phone-only} {
        transform: translate3d(0, -60%, 0);
      }
    }
  }
}

.--remove-brand {
  opacity: 0;
  transform: translate3d(-300px, 0, 0);
}

// Nav Active from Scroll


// Nav Color Overrides
.--nav-color {
  .mdev-svg-1,
  .mdev-svg-2 {
    transition: fill, 1.2s;
  }

  .mdev-svg-1 {
    fill: $color-brand-primary;
  }
  .mdev-svg-2 {
    fill: $white;
  }
}

.--teal-black {

  .mdev-svg-1 {
    fill: $color-brand-primary;
  }
  .mdev-svg-2 {
    fill: $color-brand-bkg;
  }
}

.--teal-white {

  .mdev-svg-1 {
    fill: $color-brand-primary;
  }
  .mdev-svg-2 {
    fill: $white;
  }
}

.--white-black {

  .mdev-svg-1 {
    fill: $white;
  }
  .mdev-svg-2 {
    fill: $color-brand-bkg;
  }
}
/*--------------------------------------*/
</style>
