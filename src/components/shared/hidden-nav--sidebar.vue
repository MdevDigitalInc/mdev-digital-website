<template>
  <div class="mdev-nav-sidebar flex flex-wrap flex-group-between">
    <!-- Top Container -->
    <div class="mdev-sidebar-container">
      <a href="/" title="MDEV Digital Homepage" class="mdev-sidebar-brand">
        <img :src="loadImage(mdevBrand)" alt="MDEV Digital Brand">
      </a>

      <div class="mdev-sidebar-cta u-uppercase u-bold">
        {{ $t("navigation.sidebarCta") }}
      </div>
    </div>

    <!-- Bottom Container -->
    <div class="mdev-sidebar-container">
      <h2 class="mdev-contact-title u-uppercase">
        {{ $t("navigation.getInTouch") }}
      </h2>
      <div class="mdev-sidebar-contact">
        <a class="--tel" href="tel:+15198604261" title="Call MDEV Digital">
          519.860.4261
        </a>
        <a href="mailto:hello@mdev.digital" title="Email MDEV Digital">
          hello@mdev.digital
        </a>
      </div>

      <!-- Social Links -->
      <slot></slot>

      <!-- MDEV Address -->
      <div class="mdev-sidebar-address">
        <span class="address-region u-bold u-uppercase">
          {{ $t("navigation.addressRegion") }}
        </span>
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

    methods: {
      loadImage(path){
        return require('../../assets/images/' + path);
      },
    }
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/

.mdev-nav-sidebar {
  width: 25%;
  height: 100vh;
  background: $color-brand-bkg;
  position: relative;
  transform: translate3d( -110%, 0, 0 );
  opacity: 0;
  transition: opacity .8s, all 1s;
}

.mdev-sidebar-container {
  padding: 3vw;
  width: 100%;

  .mdev-sidebar-brand {
    width: 60%;
    display: block;
    margin-bottom: 3vw;

    img {
      width: 100%;
    }
  }

  .mdev-sidebar-cta {
    color: $white;
    font-size: 1.9vw;
    line-height: 120%;
  }

  .mdev-contact-title {
    color: $white;
    display: block;
    font-size: 1.8vw;
    line-height: 120%;
  }

  .mdev-sidebar-contact {
    width: 100%;

    a {
      color: $color-brand-primary;
      font-size: 1.66vw;
      line-height: 130%;
      transition: all .9s;

      &:hover,
      &:focus,
      &:active {
        color: $white;
      }
    }

    .--tel {
      font-size: 2.3vw;
    }
  }

  .mdev-social-links {
    font-size: 2.4vw;
    margin: 2vw 0;

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

    span {
      display: block;
    }

    .address-region {
      color: $white;
      font-size: 1.5vw;
      line-height: 130%;
    }

    .address-street {
      color: $color-brand-primary;
      font-size: 1.2vw;
    }
  }
}

// Active Class
.--active-sidebar {
  .mdev-nav-sidebar {
    opacity: 1;
    transform: translate3d( 0, 0, 0 );
  }
}
/*--------------------------------------*/

</style>
