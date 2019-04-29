<template>
  <section class="mdev-full-section --section-space-top --primary-bkg --triangle-bottom">
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
          <service-links :links="links" linksTitle="Services"></service-links>
        </template>
      </split-sixty>

      <!-- Primary Button -->
      <btn-primary :BtnData="BtnData">
        {{ $t("homepage.services.action") }}
      </btn-primary>
    </div>
  </section>
</template>

<script>
// Local Import
import SplitSixty   from '../modules/sixty-forty.vue';
import ServiceLinks from './home-services--links.vue';
// Flat Data File
import MdevData     from '../../mdev-data.js';

export default {
  name: 'HomeServices',

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
    'split-sixty'   : SplitSixty,
    'service-links' : ServiceLinks
  }
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* HOME--SERVICES Component Styles
/--------------------------------------*/
/*--------------------------------------*/
</style>
