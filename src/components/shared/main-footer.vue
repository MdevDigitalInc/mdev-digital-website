<template>
  <footer class="mdev-main-footer u-c-white u-uppercase flex flex-hor-center flex-vert-center">
      <div class="mdev-footer-slogan">
        {{ $t('general.slogan') }}
      </div>
      <a href="/" class="mdev-footer-brand" title="MDEV Digital Home Page">
        <img :src="loadImage(mdevBrand)" alt="MDEV Digital Logo" />
      </a>
      <div class="mdev-footer-copyright flex flex-nowrap">
        <span>
          &copy; MDEV Digital Inc. {{year}}
        </span>
        <span class="--divider"> | </span>
        <social-links darkTheme="" :linkContent="socialLinks"></social-links>
      </div>
  </footer>
</template>

<script>
import SocialLinks      from './social-links.vue';
// Import Flat File Data
import MdevData         from '../../mdev-data.js';

export default{
  name: 'mainFooter',
  data: function(){
    return{
      socialLinks: MdevData.socialLinks,
      mdevBrand: 'svg/MDEV_RGB_Icon_Primary_Reverse.svg',
      year: null
    };
  },

  // Components
  components: {
    'social-links' : SocialLinks
  },

  created: function() {
    this.year = (new Date()).getFullYear();
  }
};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/

.mdev-main-footer {
  padding: 70px 0;
  // Negative margin needed to close 1px gap
  margin-top: -1px;
  background: $color-brand-bkg;
  width: 100%;
  position: relative;

  @media #{$phone-only} {
    flex-wrap: wrap;
  }
}

.mdev-footer-slogan {
  font-weight: 700;
  letter-spacing: 2px;
  width: 50%;
  text-align: right;
  font-size: .85vw;

  @media #{$portrait} {
    font-size: 1.2vw;
  }

  @media #{$phone-only} {
    width: 100%;
    text-align: center;
    font-size: 3vw;
  }
}

.mdev-footer-copyright {
  font-weight: 400;
  letter-spacing: 3px;
  font-size: .85vw;
  width: 50%;

  @media #{$portrait} {
    font-size: 1.2vw;
  }

  @media #{$phone-only} {
    width: 100%;
    font-size: 3vw;
    padding-top: 8px;
    display: flex;
    justify-content: center;
  }

  span {
    white-space: nowrap;
  }
}

.mdev-footer-brand {
  width: 2%;
  min-width: 35px;
  margin: 0 40px;

  @media #{$phone-only} {
    order: -1;
    margin-bottom: 20px;
  }

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
  margin: 0 15px;
}

.mdev-social-links {
  width: 5vw;
  justify-content: space-between;

  @media #{$portrait} {
    width: 10vw;
  }

  @media #{$phone-only} {
    width: 20vw;
  }
}

/*--------------------------------------*/
</style>
