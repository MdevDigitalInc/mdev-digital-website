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
        <svg data-mdev-top data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 70"><defs></defs><title>White_Top</title><polygon class="mdev-svg-1" points="0 25 0.5 25.3 1 25.6 45 1.1 45 0.6 45 0.6 45 0 0 25"/><polygon class="mdev-svg-1" points="0 25 0 45 45 70 45 50 0 25"/><polygon class="mdev-svg-2" points="90 25 89.5 25.3 89 25.6 45 1.1 45 0.6 45 0.6 45 0 90 25"/><polygon class="mdev-svg-2" points="90 25 90 45 45 70 45 50 90 25"/></svg>
        <svg data-mdev-mid data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 50"><defs></defs><title>MDEV_RGB_Icon_TealWhite_Bottom</title><polygon class="mdev-svg-1" points="0 5 0 25 45 50 45 30 0 5"/><polygon class="mdev-svg-1" points="9 0 0 5 0.5 5.3 1 5.6 10 0.6 9 0"/><polygon class="mdev-svg-2" points="90 5 90 25 45 50 45 30 90 5"/><polygon class="mdev-svg-2" points="81 0 90 5 89.5 5.3 89 5.6 79.9 0.6 81 0"/></svg>
        <svg data-mdev-bot data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 50"><defs></defs><title>MDEV_RGB_Icon_TealWhite_Bottom</title><polygon class="mdev-svg-1" points="0 5 0 25 45 50 45 30 0 5"/><polygon class="mdev-svg-1" points="9 0 0 5 0.5 5.3 1 5.6 10 0.6 9 0"/><polygon class="mdev-svg-2" points="90 5 90 25 45 50 45 30 90 5"/><polygon class="mdev-svg-2" points="81 0 90 5 89.5 5.3 89 5.6 79.9 0.6 81 0"/></svg>

        <!--Hidden Brand Flyout -->
        <div class="mdev-hidden-brand">
          <img :src="loadImage(mdevWordTop)" data-mdev-wtop>
          <img :src="loadImage(mdevWordBot)" data-mdev-wbot>
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
  import HiddenNav from './hidden-nav.vue';
  import HiddenNavSidebar from './hidden-nav--sidebar.vue';
  import HiddenNavLinks from './hidden-nav--links.vue';
  import SocialLinks from './social-links.vue';

  export default{
    // <router-link> element is a custom element derived from vue-router. use :to - to bind.
    data: function(){
      return{
        // Refer to routes.js file for available routes.
        // Links are passed as object to hidden-nav-links
        links: [
          {
            linkName: 'About',
            linkTitle: 'About MDEV Digital',
            route: '/about',
            linkIndex: '01'
          },
          {
            linkName: 'Work',
            linkTitle: 'Our Work Case Studies',
            route: '/casestudy',
            linkIndex: '02'
          },
          {
            linkName: 'Services',
            linkTitle: 'Our Services',
            route: '/services',
            linkIndex: '03'
          },
          {
            linkName: 'Contact',
            linkTitle: 'Get In Touch With MDEV',
            route: '/contact',
            linkIndex: '04'
          }
        ],
        socialLinks: [
          {
            linkClass: 'fa-facebook-f',
            target: '_blank',
            accessibility: 'Like us on Facebook',
            linkUrl: 'https://www.facebook.com/MDEVDigital'
          },
          {
            linkClass: 'fa-instagram',
            target: '_blank',
            accessibility: 'Follow us on Instagram',
            linkUrl: 'https://www.instagram.com/mdev_digital/'
          },
          {
            linkClass: 'fa-twitter',
            target: '_blank',
            accessibility: 'Follow us on Twitter',
            linkUrl: 'https://twitter.com/MDEVdigital'
          },
          {
            linkClass: 'fa-linkedin',
            target: '_blank',
            accessibility: 'Follow us on LinkedIn',
            linkUrl: 'https://www.linkedin.com/company/mdev-digital/'
          }
        ],

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
      loadImage(path){
        return require('../../assets/images/' + path);
      },

      // Change Language METHOD
      change() {
        let current = this.$locale.current();
        if (current === 'en') {
          this.$locale.change('pt');
        } else {
          this.$locale.change('en');
        }
      },

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
  /* Lean Import for Components           */
  /*--------------------------------------*/
  /* Disable because they are already linted */
  /* stylelint-disable */
  @import '../../assets/styles/global-main.scss';
  /* stylelint-enable */

  /*--------------------------------------*/
  /* Main Component Styles                */
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

      .mdev-hidden-brand img {
        transform: translate3d(0, 0, 0);
        opacity: 1;
        transition: all .3s;
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

    img {
      opacity: 0;
      transition: all .3s;
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

  .mdev-main-nav.--user-scroll {
    opacity: .8;
    transition: opacity .5s;


    &:hover {
      opacity: 1;
    }
  }

  // Nav Color Overrides
  .--nav-color {
    .mdev-svg-1,
    .mdev-svg-2 {
      transition: fill, .8s;
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


/*--------------------------------------*/

</style>
