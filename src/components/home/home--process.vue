<template>
  <section class="mdev-main-wrapper --section-space">
    <h4 class="u-uppercase u-c-white a-blur-in" v-in-viewport>{{ $t("homepage.intro.heading") }} </h4>
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
export default {
  name: 'HomeProcess',

  data: function() {
    return {
      BtnData: {
        accessibility: 'About MDEV Digitial.',
        btnRoute: '/about',
        btnClass: 'mdev-primary-btn --space-top-sm'
      }
    };
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
