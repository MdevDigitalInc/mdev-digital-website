<template>
  <section class="mdev-full-section">
    <!-- Case Study Heading -->
    <div class="mdev-case-heading u-text-center">
      <span class="mdev-top-subhead u-c-accent u-uppercase">
        {{ $t("homepage.casestudies.subheading") }}
      </span>
      <h3 class="u-c-primary u-uppercase">
        {{ $t("homepage.casestudies.heading") }}
      </h3>
    </div>
    <!-- Case Study Carousel -->
    <h1 class="u-c-white u-text-center"> TO BE DISCUSSED... </h1>
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
import BtnPrimary           from '../shared/btn-primary.vue';

export default{
  name: 'HomeCaseStudies',
  data: function() {
    return {
      BtnData: {
        accessibility: 'Learn more about our work!',
        btnRoute: '/casestudy',
        btnClass: 'mdev-primary-btn --space-top-sm'
      }
    };
  },

  components: {
    'btn-primary'         : BtnPrimary
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
.mdev-top-subhead {
  display: block;
  margin-bottom: .8vw;
}
/*--------------------------------------*/

</style>
