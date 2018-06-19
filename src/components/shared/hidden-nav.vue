<template>
  <div class="mdev-nav-content flex flex-hor-start flex-vert-start flex-nowrap" data-nav-content>
    <!-- Left Sidebar -->
    <div class="mdev-nav-sidebar flex flex-wrap flex-group-between">
      <!-- Top Container -->
      <div class="mdev-sidebar-container">
        <a href="/" title="MDEV Digital Homepage">
          <img :src="loadImage(mdevBrand)" alt="MDEV Digital Brand">
        </a>

        <div class="mdev-sidebar-cta">
          {{ $t("navigation.sidebarCta") }}
        </div>
      </div>

      <!-- Bottom Container -->
      <div class="mdev-sidebar-container">
        <span class="mdev-contact-title">
          {{ $t("navigation.getInTouch") }}
        </span>
        <a href="tel:+15198604261" title="Call MDEV Digital">
          519.860.4261
        </a>
        <a href="mailto:hello@mdev.digital" title="Email MDEV Digital">
          hello@mdev.digital
        </a>

        <!-- Social Links -->
        <div class="mdev-sidebar-social flex flex-hor-start flex-vert-center">
          <!-- Facebook -->
          <a href="FACEBOOK" title="Like Us on Facebook!">
            <i class="fab fa-facebook-f"></i>
          </a>
          <!-- Instagram -->
          <a href="INSTAGRAM" title="Follow Us On Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <!-- Twitter -->
          <a href="TWITTER" title="Follow Us On Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <!-- LinkedIn -->
          <a href="LinkedIn" title="Follow Us On LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>

        <!-- MDEV Address -->
        <div class="mdev-sidebar-address">
          <span class="address-region">
            {{ $t("navigation.addressRegion") }}
          </span>
          <span class="address-street">
            {{ $t("navigation.addressStreet") }}
          </span>
        </div>
      </div>

    </div>
    <!-- Main Links -->
    <div class="mdev-nav-links">

    </div>
  </div>
</template>



<script>
  export default{
    name: 'MainFooter',
    data: function(){
      return{
        mdevBrand: 'MDEV-Logo.svg'
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

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/

.mdev-nav-content {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  background: transparent;
}

.mdev-nav-sidebar {
  width: 25%;
  height: 100vh;
  background: $color-brand-bkg;
  position: relative;
  transform: translate3d( -110%, 0, 0 );
  opacity: 0;
  transition: opacity .8s, all 1s;
}

.mdev-nav-links {
  width: 75%;
  background: transparent;
  height: 100vh;
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
