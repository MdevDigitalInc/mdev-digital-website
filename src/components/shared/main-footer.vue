<template>
  <footer class="mdev-main-footer u-c-white u-uppercase flex flex-hor-center flex-vert-center">
      <div class="mdev-footer-slogan">
        {{ $t('general.slogan') }}
      </div>
      <a href="/" class="mdev-footer-brand" title="MDEV Digital Home Page">
        <img :src="loadImage(mdevBrand)" alt="MDEV Digital Logo" />
      </a>
      <div class="mdev-footer-copyright">
          &copy; MDEV Digital Inc. 2018
          <span class="--divider"> | </span>
          <a href="#" title="View our Sitemap">Sitemap</a>
      </div>
  </footer>
</template>



<script>
  export default{
    name: 'mainFooter',
    data: function(){
      return{
        mdevBrand: 'svg/MDEV_RGB_Icon_Primary_Reverse.svg'
      };
    },

    methods: {
      loadImage(path){
        return require('../../assets/images/' + path);
      }
    }
  };
</script>



<style lang="scss">

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/
.mdev-main-footer {
  padding: 70px 0;
  background: $color-brand-bkg;
  width: 100%;
  position: relative;

  @media #{$desktop-up} {
    padding: 100px 0;
  }

  @media #{$portrait} {
    padding: 60px 0;
  }
}

.mdev-footer-slogan {
  font-weight: 700;
  letter-spacing: 2px;
  font-size: .85vw;

  @media #{$portrait} {
    font-size: 1.2vw;
  }
}

.mdev-footer-copyright {
  font-weight: 400;
  letter-spacing: 3px;
  font-size: .85vw;

  @media #{$portrait} {
    font-size: 1.2vw;
  }
}

.mdev-footer-brand {
  width: 2%;
  min-width: 35px;
  margin: 0 40px;

  &:hover {
    img {
      transition: all .5s;
      transform: scale(1.08);
    }
  }

  img {
    width: 100%;
    transition: all .3s;
  }
}

.--divider {
  margin: 0 10px;
}
/*--------------------------------------*/

</style>
