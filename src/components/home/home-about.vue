<template>
  <div class="mdev-full-section --primary-bkg --triangle-bottom-r --raise">
    <div class="mdev-main-wrapper u-text-center">
      <div class="mdev-about-logo">
        <img :src="loadImage(mdevLogoMask)" alt="MDEV Logo with images of the office showing through"/>
      </div>
      <div class="mdev-about-slogan">
        <img :src="loadImage(mdevSlogan)" alt="Your internal team, without the overhead!"/>
      </div>

      <btn-primary :BtnData="BtnData">
        {{ $t("homepage.about.action") }}
      </btn-primary>
    </div>
  </div>
</template>



<script>
// Local Import
import BtnPrimary   from '../shared/btn-primary.vue';

export default {
  name: 'HomeAbout',
  data: function() {
    return {
      mdevLogoMask: 'svg/about/MDEV-Cutout.svg',
      mdevSlogan: 'svg/about/MDEV-Slogan.svg',
      BtnData: {
        accessibility: 'Learn more about MDEV Digital',
        btnRoute: '/about',
        btnClass: 'mdev-primary-btn --space-top-sm'
      }
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
  },

  components: {
    'btn-primary' : BtnPrimary
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME ABOUT Component Styles
/--------------------------------------*/
.mdev-about-logo {
  width: 35%;
  position: relative;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  margin-bottom: 40px;

  &:after {
    @include pseudo();
    background: url('../../assets/images/about_bkg.png');
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    z-index: -1;
    transform: scale( .99 );
  }

  img {
    width: 100%;
    overflow: hidden;
    transform: scale( 1.01 );
  }
}

.mdev-about-slogan {
  width: 90%;
  margin: 0 auto;
}

.--raise {
  z-index: 2;
}

/*--------------------------------------*/

</style>
