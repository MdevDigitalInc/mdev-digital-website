<template>
  <section class="mdev-about-prefooter --section-pad">
    <div class="mdev-main-wrapper">
      <!-- Split Component 60 / 40 -->
      <split-sixty
        animClassLeft="a-flyin a-flyin-left"
        animClassRight="a-flyin a-flyin-right" :reverse="false">
        <!-- Left Split -->
        <template slot="leftSlot">
          <div class="--huge-title u-uppercase">
            {{ $t("contact.largeTitle") }}
          </div>
          <div class="flex flex-hor-start">
            <!-- Loads Social Links -->
            <social-links
              darkTheme="true"
              v-in-viewport
              class="a-flyin a-flyin-left --portrait-left"
              :linkContent="socialLinks">
            </social-links>

            <btn-primary :BtnData="BtnData">
              {{ $t("navigation.contact") }}
            </btn-primary>
          </div>
        </template>
        <!-- Right Split -->
        <template slot="rightSlot">
          <div class="flex mdev-about-service">
            <service-links darkMode="true" :links="links" linksTitle="Services"></service-links>
          </div>
        </template>
      </split-sixty>
    </div>
  </section>
</template>

<script>
// Local Import
import SplitSixty   from '../modules/sixty-forty.vue';
import ServiceLinks from '../home/home-services--links.vue';
import SocialLinks  from '../shared/social-links.vue';
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
        btnClass: 'mdev-dark-btn --space-left-sm'
      },
      // Links pulled from Flat File
      socialLinks: MdevData.socialLinks,
      links: MdevData.serviceLinks
    };
  },

  components: {
    'btn-primary'   : BtnPrimary,
    'social-links'  : SocialLinks,
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
  overflow: hidden;

  .--huge-title {
    margin-bottom: 50px;
  }

  .mdev-section-links {
    width: auto;

    a {
      color: $color-brand-bkg;
    }
  }

  .mdev-social-links {
    justify-content: space-between;
    width: 40%;
    font-size: 3vw;

    @media #{$portrait} {
      font-size: 6vw;
    }
  }

  .mdev-about-service {
    justify-content: center;

    @media #{$portrait} {
      justify-content: flex-start;
    }
  }
}

/*--------------------------------------*/

</style>
