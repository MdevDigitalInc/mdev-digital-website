<template>
  <div class="mdev-nav-sidebar flex flex-wrap flex-group-between">
    <!-- Top Container -->
    <div class="mdev-sidebar-container">
      <router-link to="/"
        title="MDEV Digital Homepage"
        :tabindex="(showLinks ? 1 : -1)"
        class="mdev-sidebar-brand">
        <img :src="loadImage(mdevBrand)" alt="MDEV Digital Brand">
      </router-link>
    </div>

    <!-- Bottom Container -->
    <div class="mdev-sidebar-container">
      <h2 class="mdev-contact-title u-uppercase">
        {{ $t("navigation.getInTouch") }}
      </h2>
      <div class="mdev-sidebar-contact">
        <a class="--tel"
          aria-label="Call us with your inquiry"
          href="tel:1-519-860-4261"
          :tabindex="(showLinks ? 1 : -1)"
          title="MDEV Digital Direct Phone Line">

          519.860.4261
        </a>
        <a href="mailto:hello@mdev.digital"
          aria-label="Email us with your inquiry"
          :tabindex="(showLinks ? 1 : -1)"
          title="Email MDEV Digital">
          hello@mdev.digital
        </a>
      </div>

      <!-- Social Links -->
      <slot></slot>

      <!-- MDEV Address -->
      <div class="mdev-sidebar-address">
        <a href="http://bit.ly/2txL0Py"
          target="_blank"
          title="Get Directions To Our Offices!"
          :tabindex="(showLinks ? 1 : -1)"
          aria-haspopup="true"
          aria-label="Get Directions To Our Offices."
          class="address-region u-uppercase">
          {{ $t("navigation.addressRegion") }}
        </a>
        <span class="address-street">
          {{ $t("navigation.addressStreet") }}
        </span>
      </div>
    </div>

  </div>
</template>



<script>
  export default{
    name: 'HiddenNavSidebar',
    data: function(){
      return{
        mdevBrand: 'MDEV-Logo.svg'
      };
    },

    props:['showLinks']
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* HIDDEN-NAV--sidebar Component Styles
/--------------------------------------*/

.mdev-nav-sidebar {
  width: 25%;
  height: 100vh;
  background: $color-brand-bkg;
  position: relative;
  transform: translate3d(-110%, 0, 0);
  opacity: 0;
  order: 2;
  transition: opacity .8s, all 1s;

  @media #{$portrait} {
    height: 50vh;
    padding-bottom: 90px;
    padding-top: 40px;
    width: 100%;
    transform: translate3d(0, -200%, 0);
    text-align: center;
    clip-path: $clip-triangle-bot-reverse;
  }
}

.mdev-sidebar-container {
  padding: 4vw;
  width: 100%;

  @media  #{$portrait} {
    padding: 2vw 4vw;
  }

  .mdev-sidebar-brand {
    width: 60%;
    display: block;
    margin-bottom: 3vw;

    @media #{$portrait} {
      margin: 0 auto;
      width: 30%;
    }

    img {
      width: 100%;
    }
  }

  .mdev-sidebar-cta {
    color: $color-brand-primary;
    font-size: 2.2vw;
    line-height: 120%;

    @media #{$portrait} {
      font-size: 3.3vw;
      letter-spacing: 2px;
    }
  }

  .mdev-contact-title {
    color: $white;
    display: block;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 120%;
    margin-bottom: 0;

    @media #{$portrait} {
      letter-spacing: 2px;
    }
  }

  .mdev-sidebar-contact {
    width: 100%;

    a {
      color: $white;
      font-size: 1.66vw;
      line-height: 130%;
      transition: all .9s;

      @media #{$portrait} {
        display: block;
        font-size: 3.1vw;
      }

      &:hover,
      &:focus,
      &:active {
        color: $white;
      }
    }

    .--tel {
      font-size: 2.3vw;

      @media #{$portrait} {
        font-size: 4.3vw;
      }
    }
  }

  .mdev-social-links {
    font-size: 1.9vw;
    margin: 1vw 0 4vw;

    @media #{$portrait} {
      margin: 30px 0;
      font-size: 4vw;
    }

    @media #{$phone-only} {
      margin: 20px 0;
    }

    a {
      display: block;
      margin: 0 1vw;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .mdev-sidebar-address {
    width: 100%;
    position: relative;
    font-size: 24px;

    @media #{$portrait} {
      font-size: 15px;
    }

    span {
      display: block;
    }

    .address-region {
      color: $white;
      line-height: 130%;
    }

    .address-street {
      color: $color-brand-primary;
    }
  }
}

// Active Class
.--active-sidebar {
  .mdev-nav-sidebar {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
/*--------------------------------------*/

</style>
