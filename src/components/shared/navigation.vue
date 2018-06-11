<template>
  <nav class="mdev-main-nav" aria-role="navigation" role="navigation">
    <div class="mdev-nav-wrapper flex flex-nowrap flex-hor-between flex-vert-center">
      <a :href="homeLink" :title="homeTitle" class="mdev-main-nav-branding">
        <img :src="loadImage(homeBrand)">
      </a>
    <div class="mdev-nav-open" :class="{ open: navIsOpen }">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
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

        homeLink: '#',
        homeTitle: 'Home',
        homeBrand: 'MDEV-nav-logo.png',
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
    padding: 35px 0;
    z-index: 10;
    transition: all, .3s;
    background: rgba( 51, 51, 51, 0 );

    img {
      width: 100%;
    }

    .mdev-main-nav-branding {
      max-width: 83px;
      min-width: 73px;
      height: auto;
      width: 10%;
      opacity: 1;
      transition: all, .3s;

      &:hover {
        cursor: pointer;
        opacity: .8;
      }
    }
  }

  .mdev-nav-open {
    width: 60px;
    height: 45px;
    position: relative;
    transform: rotate3d( 1, 1, 1, 0deg );
    transition: .5s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 9px;
      width: 50%;
      background: #d3531a;
      opacity: 1;
      transform: rotate3d( 1, 1, 1, 0deg );
      transition: .25s ease-in-out;

      &:nth-child( even ) {
        left: 50%;
        border-radius: 0 9px 9px 0;
      }

      &:nth-child( odd ) {
        left: 0;
        border-radius: 9px 0 0 9px;
      }

      &nth-child( 1 ),
      &:nth-child( 2 ) {
        top: 0;
      }

      &:nth-child( 3 ),
      &:nth-child( 4 ) {
        top: 18px;
      }

      &:nth-child( 5 ),
      &:nth-child( 6 ) {
        top: 36px;
      }
    }
  }

  .mdev-nav-open.open span:nth-child( 1 ),
  .mdev-nav-open.open span:nth-child( 6 ) {
    transform: rotate3d( 0, 0, 1, 45deg );
  }

  .mdev-nav-open.open span:nth-child( 2 ),
  .mdev-nav-open.open span:nth-child( 5 ) {
    transform: rotate3d( 0, 0, 1, -45deg );
  }

  .mdev-nav-open.open span:nth-child( 1 ) {
    left: 5px;
    top: 7px;
  }

  .mdev-nav-open.open span:nth-child( 2 ) {
    left: calc(50% - 5px);
    top: 7px;
  }

  .mdev-nav-open.open span:nth-child( 3 ) {
    left: -50%;
    opacity: 0;
  }

  .mdev-nav-open.open span:nth-child( 4 ) {
    left: 100%;
    opacity: 0;
  }

  .mdev-nav-open.open span:nth-child( 5 ) {
    left: 5px;
    top: 29px;
  }

  .mdev-nav-open.open span:nth-child( 6 ) {
    left: calc(50% - 5px);
    top: 29px;
  }

/*--------------------------------------*/

</style>
