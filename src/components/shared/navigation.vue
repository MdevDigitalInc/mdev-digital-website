<template>
  <nav class="mdev-main-nav" aria-role="navigation" data-main-nav role="navigation">
    <div class="mdev-nav-wrapper flex flex-nowrap flex-hor-between flex-vert-center">
      <a :href="homeLink" :title="homeTitle" class="mdev-live-brand" :class="{ '--remove-brand': navIsOpen }">
        <img :src="loadImage(mdevBrandTop)" data-mdev-top>
        <img :src="loadImage(mdevBrandMid)" data-mdev-mid>
        <img :src="loadImage(mdevBrandMid)" data-mdev-bot>
      </a>
    <button class="mdev-nav-open" :class="{ '--nav-open': navIsOpen }" v-on:click="openMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    </div>
    <!--
    <button @click="change()">CHANGE</button>
    -->
    <div class="mdev-hidden-nav" :class="{ '--hid-nav-open': navIsOpen }">

    </div>
  </nav>
</template>



<script>
  export default{
    // <router-link> element is a custom element derived from vue-router. use :to - to bind.
    data: function(){
      return{
        // Refer to routes.js file for available routes.
        links: [
          {
            linkName: 'Link 1',
            linkTitle: 'Link 1',
            route: '/'
          },
          {
            linkName: 'Link 2',
            linkTitle: 'Link 2',
            route: '/home1'
          },
          {
            linkName: 'Link 3',
            linkTitle: 'Link 3',
            route: '/home2'
          }
        ],

        homeLink: '/',
        homeTitle: 'Home',
        mdevBrandMid: 'svg/logo-pieces/MDEV_RGB_Icon_TealWhite_Bottom.svg',
        mdevBrandTop: 'svg/logo-pieces/MDEV_RGB_Icon_TealWhite_Top.svg',
        navIsOpen: false
      };
    },

    methods: {
      loadImage(path){
        return require('../../assets/images/' + path);
      },
      // Change Language METHOD
      change () {
        let current = this.$locale.current();
        if (current === 'en') {
          this.$locale.change('pt');
        } else {
          this.$locale.change('en');
        }
      },
      // Flip Nav Flag
      openMenu() {
        this.navIsOpen = !this.navIsOpen;
        $('body').toggleClass('u-freeze-scroll');
      }
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
    background: rgba( 51, 51, 51, 0 );

    img {
      width: 100%;
    }
  }

  .mdev-nav-wrapper {
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 0;
    min-width: 320px;
  }

  .mdev-live-brand {
    height: auto;
    width: 2.5%;
    opacity: 0;
    min-width: 30px;
    transition: all 1.8s;

    &:hover {
      cursor: pointer;
      opacity: .8;
    }

    img {
      position: relative;
      width: 100%;
      transition: all 2.9s;
    }

    img[ data-mdev-top ] {
      transform: translate3d( 0, 53%, 0 );
    }

    img[ data-mdev-bot ] {
      transform: translate3d( 0, -74%, 0 );
    }
  }

  .mdev-nav-open {
    width: 2.5%;
    height: auto;
    position: relative;
    overflow: visible;
    max-width: 42px;
    padding: 0;
    z-index: 99;
    margin: 0;
    opacity: 0;
    border: none;
    background: transparent;
    transition: .6s all;

    span {
      display: block;
      position: relative;
      width: 100%;
      background: $color-brand-primary;
      height: 7px;
      box-shadow: 0 0 3px rgba(201, 255, 252, 0);
      transition: all .5s, opacity .3s;
      border: 1px solid rgba(13, 119, 113, 0);

      &:first-child {
        transform: translate3d( 0, -5px, 0 );
        opacity: 1;
      }

      &:last-child {
        transform: translate3d( 0, 5px, 0 );
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
    transform: translate3d( -100%, 0, 0);
    transition: opacity .8s, transform .3s;
  }

  // Nav Open and Active
  .--hid-nav-open {
    opacity: 1;
    transform: translate3d( 0, 0, 0);
  }

  .--nav-open {
    span {
      background: white;

      &:first-child {
        transform: translate3d( 0, -80px, 0);
        opacity: 0;
      }

      &:last-child {
        transform: rotate3d( 0, 0, 1, 45deg);
        top: -8px;
      }

      &:nth-child( even ) {
        transform: rotate3d( 0, 0, 1, -45deg);
      }
    }
    &:hover {
      span {
        background: darken( $color-brand-primary, 25%);
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
      img[ data-mdev-top ] {
        transform: translate3d( 0, 36%, 0 );
      }

      img[ data-mdev-bot ] {
        transform: translate3d( 0, -50%, 0 );
      }
    }
  }

  .--remove-brand {
    opacity: 0;
    transform: translate3d( -300px, 0, 0);
  }
/*--------------------------------------*/

</style>
