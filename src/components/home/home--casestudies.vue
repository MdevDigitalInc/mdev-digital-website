<template>
  <section class="mdev-full-section">
    <!-- Case Study Heading -->
    <div class="mdev-case-heading u-text-center">
      <span class="mdev-top-subhead u-c-accent u-uppercase">
        {{ $t("homepage.casestudies.subheading") }}
      </span>
      <h4 class="u-c-primary u-uppercase">
        {{ $t("homepage.casestudies.heading") }}
      </h4>
    </div>
    <!-- Case Study Carousel -->
    <div class="mdev-casestudy-mosaic flex flex-wrap">
      <mosaic-link
        :key="index"
        v-for="(link, index) in casestudies"
        :longImg="link.longImg"
        :leftImg="link.leftImg"
        :rightImg="link.rightImg"
        >
      </mosaic-link>
    </div>
    <!-- Case Action Heading -->
    <div class="u-text-center">
      <btn-primary :BtnData="BtnData">
        {{ $t("homepage.casestudies.action") }}
      </btn-primary>
    </div>
  </section>
</template>

<script>
// Local Import
import MosaicLink           from '../modules/mosaic-link.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';

export default{
  name: 'HomeCaseStudies',
  data: function() {
    return {
      BtnData: {
        accessibility: 'Learn more about our work!',
        btnRoute: '/comingsoon',
        btnClass: 'mdev-primary-btn --space-top-sm'
      },
      casestudies: MdevData.homeCasestudy
    };
  },

  components: {
    'mosaic-link'         : MosaicLink
  }
};
</script>

<style lang="scss" scoped>
/*-------------------------------------*/
/* HOME--CASESTUDIES Component Styles
/--------------------------------------*/

.mdev-full-section {
  padding-top: 50px;
}

.mdev-case-heading {
  @media #{$laptop-up} {
    margin-bottom: 50px;
  }
}

h3 {
  margin-bottom: 35px;

  @media #{$tablet-up} {
    margin-bottom: 70px;
  }
}

/*--------------------------------------*/
</style>
