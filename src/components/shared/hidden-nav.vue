<template>
  <div class="mdev-nav-content flex flex-hor-start flex-vert-start flex-nowrap" data-nav-content>
    <!-- Left Sidebar -->
    <div class="mdev-nav-sidebar">

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
