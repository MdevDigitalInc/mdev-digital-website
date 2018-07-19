<template>
  <div class="mdev-full-section --section-space-top --primary-bkg --triangle-bottom">
    <div class="mdev-main-wrapper">
      <!-- Split Component 60 / 40 -->
      <split-sixty animClassLeft="a-flyin a-flyin-left" animClassRight="a-flyin a-flyin-right">
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
  </div>
</template>


<script>
// Local Import
import BtnPrimary   from '../shared/btn-primary.vue';
import SplitSixty   from '../modules/sixty-forty.vue';
import ServiceLinks from './home-services--links.vue';

export default {
  name: 'HomeServices',

  data: function() {

    return {
      // Button Data
      BtnData: {
        accessibility: 'View Our Services',
        btnRoute: '/services',
        btnClass: 'mdev-primary-btn --space-top-sm --tab'
      },
      // Links Object Array
      links: [
        {
          linkName: 'Consulting',
          linkTitle: 'View our consulting services',
          route: '/services/consulting',
          linkIndex: '01'
        },
        {
          linkName: 'Branding & Print',
          linkTitle: 'View our Branding & Print Design services',
          route: '/services/branding',
          linkIndex: '02'
        },
        {
          linkName: 'UX & Web Design',
          linkTitle: 'View our UX & Web Design services',
          route: '/services/ui-ux',
          linkIndex: '03'
        },
        {
          linkName: 'Application Development',
          linkTitle: 'View our custom app development services',
          route: '/services/app-development',
          linkIndex: '04'
        },
        {
          linkName: 'Digital Marketing',
          linkTitle: 'View our Digital Marketing services',
          route: '/services/digital-advertisign',
          linkIndex: '05'
        }
      ]

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
/* HOME SERVICES Component Styles
/--------------------------------------*/
.mdev-section-links {
  width: 100%;
  position: relative;

  @media #{$portrait} {
    padding: 60px 0 0;
  }

  a {
    display: block;
    color: $white;
    padding: .5vw 0;
    transition: all .3s;

    &:hover,
    &:focus,
    &:active {
      .mdev-link-name {
        border-bottom: 4px solid rgba(255, 255, 255, 1);
      }
    }
  }

  .mdev-link-name {
    font-size: 1.6vw;
    border-bottom: 4px solid rgba(255, 255, 255, 0);
    display: inline-block;
    transition: all .6s;

    @media #{$xl-up} {
      font-size: 1.3vw;
    }

    @media #{$portrait} {
      font-size: 4.6vw;
    }
    @media #{$phone-only} {
      font-size: 6vw;
      line-height: 120%;
    }
  }

  .mdev-link-index {
    font-size: 1.1vw;
    display: inline-block;
    margin-right: .8vw;

    @media #{$portrait} {
      font-size: 4.1vw;
    }

    @media #{$phone-only} {
      font-size: 5.1vw;
    }
  }
}

.--tab {
  @media #{$portrait} {
    margin-bottom: 60px;
  }
}

.mdev-split-6 {
  padding-right: 3vw;

  @media #{$tablet-lnd-only} {
    padding-right: 5.7vw;
  }
}

/*--------------------------------------*/

</style>
