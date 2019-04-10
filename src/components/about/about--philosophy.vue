<template>
  <section class="mdev-philosophies">
    <!-- Philosophy Heading -->
    <div class="mdev-case-heading u-text-center">
      <span class="mdev-top-subhead u-c-accent u-uppercase">
        {{ subtitle }}
      </span>
      <h3 class="u-c-primary u-uppercase">
        {{ title }}
      </h3>
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
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.mdev-philosophies {
  padding: 150px 0 100px;
  margin-top: -100px;
  width: 100%;
  position: relative;
  background: $color-brand-bkg;
  z-index: -1;
}

.mdev-philosophy {
  width: 33.33%;
  padding: 45px;

  .mdev-philosophy-icon {
    height: 7vw;
    width: auto;
    margin-bottom: 15px;
  }

  .mdev-icon-subhead {
    display: block;
    font-size: 18px;
  }

  .mdev-icon-head {
    display: block;
    font-size: 32px;
    margin: 10px 0 15px;
  }

  .mdev-icon-text {
    font-size: 18px;
    line-height: 30px;
  }
}

h3 {
  margin-bottom: 70px;
  margin-top: 10px;
}
/*--------------------------------------*/
</style>
