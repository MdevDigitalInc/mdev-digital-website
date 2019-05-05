<template>
  <section class="mdev-philosophies">
    <!-- Philosophy Heading -->
    <div class="mdev-case-heading u-text-center">
      <span class="mdev-top-subhead u-c-accent u-uppercase">
        {{ subtitle }}
      </span>
      <h4 class="u-c-primary u-uppercase">
        {{ title }}
      </h4>
    </div>

    <div class="mdev-main-wrapper flex flex-vert-start flex-wrap">
      <div v-for="(icon, index) in icons"
        v-in-viewport
        :class="(index >2) ? 'a-flyin-left' : 'a-flyin-right'"
        class="mdev-philosophy u-c-white a-flyin">
        <!-- Icon Image -->
        <img :src="loadImage(icon.icon)" :alt="icon.a11y" class="mdev-philosophy-icon"/>
        <!-- Subheading -->
        <span class="mdev-icon-subhead u-light u-uppercase">
          {{ icon.subheading }}
        </span>
        <!-- Heading -->
        <span class="mdev-icon-head u-uppercase">
          {{ icon.heading }}
        </span>
        <p class="mdev-icon-text">
          {{ icon.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  name: 'Philosophy',

  props: [ 'title', 'subtitle', 'icons' ],
};
</script>

<style lang="scss" scoped>

/*-------------------------------------*/
/* Philosophy Section Component Styles
/--------------------------------------*/
.mdev-philosophies {
  padding: 150px 0 100px;
  margin-top: -100px;
  width: 100%;
  position: relative;
  background: $color-brand-bkg;
  z-index: -1;
  overflow: hidden;

  @media #{$phone-only} {
    padding: 140px 0 75px;
  }
}

.mdev-philosophy {
  width: 33.33%;
  padding: 45px;

  @media #{$tablet-lnd-only} {
    padding: 30px;
  }

  @media #{$portrait} {
    width: 100%;
    padding: 20px;
  }

  @media #{$tablet-prt-only} {
    width: 50%;
    padding: 25px;
  }

  .mdev-philosophy-icon {
    height: 7vw;
    width: auto;
    margin-bottom: 20px;

    @media #{$portrait} {
      height: 20vw;
    }

    @media #{$tablet-prt-only} {
      height: 15vw;
    }

    @media #{$phone-only} {
      margin: 0 auto 20px;
      height: 25vw;
    }
  }

  .mdev-icon-subhead {
    display: block;
    font-size: 18px;

    @media #{$phone-only} {
      text-align: center;
    }
  }

  .mdev-icon-head {
    display: block;
    font-size: 32px;
    margin: 10px 0 15px;

    @media #{$phone-only} {
      text-align: center;
    }
  }

  .mdev-icon-text {
    font-size: 18px;
    line-height: 30px;

    @media #{$laptop-only} {
      font-size: 15px;
      line-height: 23px;
    }

    @media #{$phone-only} {
      text-align: center;
      font-size: 16px;
      line-height: 20px;
    }
  }
}

h3 {
  margin-bottom: 70px;
  margin-top: 10px;

  @media #{$portrait} {
    margin-top: 5px;
    margin-bottom: 50px;
  }
}
/*--------------------------------------*/
</style>
