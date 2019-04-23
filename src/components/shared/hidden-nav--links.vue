<template>
  <div class="mdev-nav-links">
    <router-link
      v-for="(link, index) in links"
      :to="link.route"
      :key="index"
      active-class="--active"
      data-main-links
      class="mdev-nav-link"
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
      <!-- Deep Links -->
      <div
        data-main-deep
        v-if="deepLinks"
        class="mdev-deep-links flex flex-vert-center u-uppercase">
        <!-- Title -->
        <span class="mdev-deep-title u-bold">
          {{ $t('navigation.deepLinks') }}
        </span>
        <!-- Link Loop -->
        <router-link
          v-for="(link, index) in deepLinks"
          class="mdev-deep-link"
          :key="index"
          :to="link.route"
          :title="link.linkTitle">
          {{ link.linkName }}
        </router-link>
      </div>
  </div>
</template>

<script>
export default{
  name: 'HiddenNavLinks',
  // Data passed in via Parent
  props: ['links','showLinks', 'deepLinks'],
  // Watch for changes in parent data
  watch: {
    showLinks: function() {
      // Nav Flag True is opening, false is closing
      let isNavOpening = this.showLinks;
      // Capture elements
      let hiddenLinks = document.querySelectorAll('[data-main-links]');

      // Wait for nav to finish opening
      setTimeout( () => {
        // Iterate through links and add timing
        for (var i=0; i < hiddenLinks.length; i++) {
          // Call toggle links..
          this.toggleLinks(hiddenLinks[i], i, isNavOpening);
        }
      }, (isNavOpening ? 1000 : 0));
    }
  },
  methods: {
    // Toggle Links Timer
    toggleLinks(target, index, isNavOpening) {
      setTimeout(() => {
        // Add active class
        this.addClass(target, '--showLinks');
        // Index determines interval
      }, (isNavOpening ? (200 * index) : 0 ));
    }
  }
};
</script>

<style lang="scss">

/*-------------------------------------*/
/* HIDDEN-NAV--LINKS Component Styles
/--------------------------------------*/
.mdev-nav-links {
  position: relative;
  color: $white;
  width: 75%;
  height: 100vh;
  background: transparent;
  order: 2;
  padding: 11% 0;

  @media #{$portrait} {
    width: 100%;
    padding: 5% 0;
    height: 50vh;
  }

  .mdev-nav-link {
    display: block;
    position: relative;
    width: 100%;
    text-align: left;
    font-size: 3.2vw;
    line-height: 190%;
    padding-left: 15%;
    overflow: hidden;
    transition: all .4s;
    opacity: 0;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0);
    transform: translate3d( 0, -1000px, 0);
    transition-timing-function: ease-in-out;

    @media #{$portrait} {
      margin: 0 auto;
      padding-left: 34%;
      transform: translate3d( 0, 1000px, 0);
      font-size: 6.2vw;
      line-height: 150%;
      min-width: 240px;
    }

    @media #{$phone-only} {
      font-size: 7vw;
      padding-left: 30%;
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
      text-shadow: 0 0 20px rgba(0, 0, 0, .2);
      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .mdev-link-index {
    font-size: 1.9vw;

    @media #{$portrait} {
      font-size: 3.6vw;
    }

    @media #{$phone-only} {
      font-size: 6vw;
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
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.mdev-deep-links {
  position: absolute;
  font-size: 20px;
  right: 0;
  opacity: 0;
  bottom: 40px;
  padding: 20px;
  border: 4px solid $color-brand-accent;
  border-right: none;
  transition: all .4s;
  transform: translate3d(65%, 0, 0);

  &:hover,
  &:focus,
  &:active {
    transform: translate3d(0, 0, 0);
  }

  .mdev-deep-title {
    font-size: 28px;
    margin-right: 60px;
  }

  .mdev-deep-link {
    margin-right: 30px;
    transition: all .4s;
  }

  &.--active-deep {
    opacity: 1;
  }
}

/*--------------------------------------*/
</style>
