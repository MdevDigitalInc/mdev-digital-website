<template>
  <nav class="mdev-main-nav" aria-role="navigation" data-main-nav role="navigation">
    <div class="mdev-nav-wrapper flex flex-nowrap flex-hor-between flex-vert-center">
      <a :href="homeLink" :title="homeTitle" class="mdev-main-nav-branding">
        <img :src="loadImage(homeBrand)">
      </a>
    <button class="mdev-nav-open" :class="{ open: navIsOpen }" v-on:click="openMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    </div>
    <!--
    <button @click="change()">CHANGE</button>
    -->

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
        homeBrand: 'svg/MDEV_RGB_Icon_Primary_Reverse.svg',
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
    padding: 2vw 0;
    z-index: 10;
    transition: all, .3s;
    background: rgba( 51, 51, 51, 0 );

    img {
      width: 100%;
    }

    .mdev-main-nav-branding {
      max-width: 53px;
      min-width: 43px;
      height: auto;
      width: 3%;
      opacity: 0;
      transition: all 1.8s;

      &:hover {
        cursor: pointer;
        opacity: .8;
      }
    }
  }

  .mdev-nav-open {
    width: 4%;
    height: auto;
    position: relative;
    overflow: visible;
    max-width: 53px;
    padding: 0;
    margin: 0;
    opacity: 0;
    border: none;
    background: transparent;
    transition: .2s all;

    span {
      display: block;
      position: relative;
      width: 100%;
      background: $color-brand-primary;
      padding-top: 17%;
      box-shadow: inset -2px 2px 2px rgba( 0, 0, 0, .0);
      transition: all .5s, opacity .3s;
      border-radius: 0;

      &:first-child {
        transform: translate3d( 0, -8px, 0 );
        opacity: 1;
      }

      &:last-child {
        transform: translate3d( 0, 8px, 0 );
      }
    }

    &:hover {
      cursor: pointer;

      span {
        background: lighten( $color-brand-primary, 15%);
        box-shadow: inset -2px 2px 2px rgba( 0, 0, 0, .8);
      }
    }

    &:focus,
    &:active {
      outline: none;
    }
  }

  .open {
    span {
      background: lighten( $color-brand-primary, 15%);
      border-radius: 5px;

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
        background: lighten( $color-brand-primary, 15%);
        box-shadow: none;
      }
    }
  }

  .--nav-active {
    .mdev-main-nav-branding,
    .mdev-nav-open {
      opacity: 1;
    }
  }

/*--------------------------------------*/

</style>
