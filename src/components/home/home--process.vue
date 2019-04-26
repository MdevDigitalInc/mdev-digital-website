<template>
  <section class="mdev-main-wrapper --section-space">
    <h3 class="u-uppercase u-c-white a-blur-in" v-in-viewport>{{ $t("homepage.intro.heading") }} </h3>
    <p class="mdev-hero-text a-blur-in" v-in-viewport>
      {{ $t("homepage.intro.content") }}
    </p>
    <!-- Primary Button -->
    <btn-primary :BtnData="BtnData">
      {{ $t("homepage.intro.action") }}
    </btn-primary>
  </section>
</template>

<script>
// Local Import
import BtnPrimary   from '../shared/btn-primary.vue';

export default {
  name: 'HomeProcess',

  data: function() {
    return {
      BtnData: {
        accessibility: 'About Our Process',
        btnRoute: '/company',
        btnClass: 'mdev-primary-btn --space-top-sm'
      }
    };
  },

  components: {
    'btn-primary' : BtnPrimary
  }
};
</script>

<style lang="scss">
.mdev-hero-text {
  max-width: 90%;

  @media #{$portrait} {
    max-width: 100%;
  }
}
</style>
