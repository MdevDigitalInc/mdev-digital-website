<template>
  <section class="mdev-about-prefooter">
    <div class="mdev-main-wrapper">
      <!-- Split Component 60 / 40 -->
      <split-sixty
        animClassLeft="a-flyin a-flyin-left"
        animClassRight="a-flyin a-flyin-right" :reverse="false">
        <!-- Left Split -->
        <template slot="leftSlot">
          <h3 class="u-uppercase u-c-white">{{ $t("homepage.services.heading") }} </h3>
          <p class="u-c-white">
            {{ $t("homepage.services.content") }}
          </p>
        </template>
        <!-- Right Split -->
        <template slot="rightSlot">
          <service-links darkMode="true" :links="links" linksTitle="Services"></service-links>
        </template>
      </split-sixty>
    </div>
  </section>
</template>

<script>
// Local Import
import SplitSixty   from '../modules/sixty-forty.vue';
import ServiceLinks from '../home/home-services--links.vue';
import BtnPrimary   from '../shared/btn-primary.vue';
// Flat Data File
import MdevData     from '../../mdev-data.js';

export default{
  name: 'AboutPrefooter',

  data: function() {
    return {
      // Button Data
      BtnData: {
        accessibility: 'View Our Services',
        btnRoute: '/services',
        btnClass: 'mdev-primary-btn --space-top-xs --tab'
      },
      // Links pulled from Flat File
      links: MdevData.serviceLinks
    };
  },

  components: {
    'btn-primary'   : BtnPrimary,
    'split-sixty'   : SplitSixty,
    'service-links' : ServiceLinks
  }
};
</script>

<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.mdev-about-prefooter {
  background: $color-brand-accent;

  .mdev-section-links a {
    color: $color-brand-bkg;
  }
}

/*--------------------------------------*/

</style>
