<template>
  <section class="mdev-main-animation" data-load-window>
    <div class="mdev-anim-brand" data-load-anim>
      <img :src="loadImage(mdevBrandTop)" data-mdev-top>
      <img :src="loadImage(mdevBrandMid)" data-mdev-mid>
      <img :src="loadImage(mdevBrandMid)" data-mdev-bot>
    </div>
  </section>
</template>

<script>
export default{
  name: 'brandAnimation',
  data: function(){
    return{
      mdevBrandMid: 'svg/logo-pieces/MDEV_RGB_Icon_TealWhite_Bottom.svg',
      mdevBrandTop: 'svg/logo-pieces/MDEV_RGB_Icon_TealWhite_Top.svg'
    };
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* BRAND ANIMATION Component Styles
/--------------------------------------*/

.mdev-main-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: opacity 1.2s;
  background: $color-brand-bkg;

  .mdev-anim-brand {
    width: 4%;
    @include center(both);
    transition: opacity 1.2s;
    opacity: 0;

    @media #{$portrait} {
      width: 8%;
    }

    @media #{$phone-only} {
      width: 13%;
    }

    img {
      position: relative;
      transition: transform 1.8s;
      width: 100%;
    }

    img[ data-mdev-top ] {
      transform: translate3d(0, 53%, 0);
    }

    img[ data-mdev-mid ] {
      @media #{$landscape} {
        transform: scale(1.001);
      }
      @media #{$laptop-only} {
        transform: scale(1.008);
      }
      @media #{$xl-up} {
        transform: scale(.999);
      }
    }

    img[ data-mdev-bot ] {
      transform: translate3d(0, -74%, 0);
    }
  }

  .--opacity-active {
    opacity: 1;
  }

  .--transform-active {
    img[ data-mdev-top ] {
      transform: translate3d(0, 36%, 0);
    }

    img[ data-mdev-bot ] {
      transform: translate3d(0, -52%, 0);
      @media #{$landscape} {
        transform: translate3d(0, -46%, 0);
      }
      @media #{$laptop-only} {
        transform: translate3d(0, -51%, 0);
      }
      @media #{$xl-up} {
        transform: translate3d(0, -49%, 0);
      }
    }
  }
}

.--opacity {
  opacity: 0;
}

/*--------------------------------------*/
</style>
