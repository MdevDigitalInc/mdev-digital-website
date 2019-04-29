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
          <div class="flex flex-vert-center flex-hor-start flex-wrap">
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
// Flat Data File
import MdevData     from '../../mdev-data.js';

export default{
  name: 'AboutPrefooter',

  data: function() {
    return {
      // Button Data
      BtnData: {
        accessibility: 'Contact Us!',
        btnRoute: '/contact#mainContent',
        btnClass: 'mdev-dark-btn'
      },
      // Links pulled from Flat File
      socialLinks: MdevData.socialLinks,
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
/* PREFOOTER  Component Styles
/--------------------------------------*/
.mdev-about-prefooter {
  background: $color-brand-accent;
  overflow: hidden;

  @media #{$portrait} {
    padding-left: 50px;
    padding-bottom: 60px;
  }

  @media #{$phone-only} {
    padding: 50px 20px;
  }

  .--huge-title {
    margin-bottom: 50px;

    @media #{$phone-only} {
      margin-bottom: 25px;
    }
  }

  .mdev-section-links {
    width: auto;

    @media #{$phone-only} {
      padding-top: 25px;
    }

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

    @media #{$phone-only} {
      font-size: 10vw;
      width: 100%;
    }
  }

  .mdev-about-service {
    justify-content: center;

    @media #{$portrait} {
      justify-content: flex-start;
    }
  }

  .mdev-dark-btn {
    margin-left: 40px;

    @media #{$phone-only} {
      margin-left: 0;
      margin-top: 25px;
      font-size: 7.3vw;
    }
  }
}
/*--------------------------------------*/
</style>
