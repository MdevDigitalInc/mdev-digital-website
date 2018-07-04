<template>
  <div class="mdev-nav-links">
    <router-link
      v-for="link in links"
      :to="link.route"
      active-class="--active"
      data-main-links
      :title="link.linkTitle"
      :tabindex="(showLinks ? 0 : -1)"
      aria-role="menuitem" >
        <span class="mdev-link-index u-ultralight" aria-hidden="true">
          {{ link.linkIndex }}
        </span>
        <span class="mdev-link-name u-bold u-uppercase">
          {{ link.linkName }}
        </span>
      </router-link>
  </div>
</template>



<script>
  export default{
    name: 'HiddenNavLinks',
    // Data passed in via Parent
    props: ['links','showLinks'],
    // Watch for changes in parent data
    watch: {
      showLinks: function() {
        // Nav Flag True is opening, false is closing
        let isNavOpening = this.showLinks;
        // Show LInks function
        function showLinks(target, index) {
          // Timeout Interval is a function of Index
          setTimeout(function(){
            $(target).toggleClass('--showLinks');
          }, (isNavOpening ? (200 * index) : 0 ));
        }
        // Wait for nav to open..
        setTimeout( function() {
          // Loop through all links and call function
          $('[data-main-links]').each( function(index){
            // Passes the button object and the index
            new showLinks(this,index);
          });
        }, (isNavOpening ? 1000 : 0));
      }
    }
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/
.mdev-nav-links {
  position: relative;
  color: $white;
  width: 75%;
  height: 100vh;
  background: transparent;
  order: 2;
  padding: 11% 0;

  @media #{ $portrait } {
    width: 100%;
    height: 45vh;
  }

  a {
    display: block;
    position: relative;
    width: 100%;
    text-align: left;
    font-size: 3.2vw;
    line-height: 190%;
    padding-left: 15%;
    overflow: hidden;
    transition: all 0;
    opacity: 0;
    text-shadow: 0 0 20px rgba( 0, 0, 0, 0);
    transform: translate3d( 0, -1000px, 0);
    transition-timing-function: ease-in-out;

    @media #{ $portrait } {
      margin: 0 auto;
      padding-left: 34%;
      font-size: 5.2vw;
      min-width: 240px;
    }

    &:before {
      @include pseudo();
      width: 200%;
      height: 100%;
      left: 0;
      top: 0;
      background: linear-gradient(to right, rgba(255,255,255,.5) 0%,rgba(255,255,255,.5) 64%,rgba(255,255,255,0) 100%);
      z-index: -1;
      opacity: 0;
      transform: translate3d( -100%, 0, 0);
      transition: opacity .5s, transform .8s;
      transition-timing-function: ease-in-out, ease-in-out;
    }

    &:hover,
    &:focus,
    &:active {
      text-shadow: 0 0 20px rgba( 0, 0, 0, .2);
      &:before {
        opacity: 1;
        transform: translate3d( 0, 0, 0);
      }
    }
  }

  .mdev-link-index {
    font-size: 1.9vw;

    @media #{ $portrait } {
      font-size: 3.6vw;
    }
  }
  /* Disabling lint because of necessary !important; */
  /* stylelint-disable */
  .--active {
    opacity: .5 !important;
  }
  /* stylelint-enable */

  .--showLinks {
    transition: all .5s;
    transform: translate3d( 0, 0, 0);
    opacity: 1;
  }
}

/*--------------------------------------*/

</style>
