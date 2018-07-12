<template>
  <div class="mdev-main-wrapper --section-space">
    <h3 class="u-uppercase u-c-white">{{ $t("homepage.intro.heading") }} </h3>
    <p class="mdev-hero-text">
      {{ $t("homepage.intro.content") }}
    </p>
    <!-- Primary Button -->
    <btn-primary :BtnData="BtnData">
      {{ $t("homepage.intro.action") }}
    </btn-primary>
  </div>
</template>


<script>
// Local Import
import BtnPrimary   from '../shared/btn-primary.vue';

export default {
  name: 'HomeProcess',

  data: function() {
    return {
      BtnData: {
        accessibility: 'About Our Services',
        btnRoute: '/about',
        btnClass: 'mdev-primary-btn --space-top-sm'
      }
    };
  },

  components: {
    'btn-primary' : BtnPrimary
  },
};
</script>



<style lang="scss" scoped>

	/*-------------------------------------*/
	/* HOME SERVICES Component Styles
	/--------------------------------------*/

	/*--------------------------------------*/

</style>
