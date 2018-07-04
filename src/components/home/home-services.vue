<template>
  <div class="mdev-full-section --section-space --primary-bkg --triangle-bottom">
    <div class="mdev-main-wrapper">
      <!-- Split Component -->
      <split-sixty>
        <!-- Left Split -->
        <template slot="leftSlot">
          <h3 class="u-uppercase u-c-white">{{ $t("homepage.services.heading") }} </h3>
          <p class="u-c-white">
            {{ $t("homepage.services.content") }}
          </p>
          <!-- Primary Button -->
          <btn-primary :BtnData="BtnData">
            {{ $t("homepage.services.action") }}
          </btn-primary>
        </template>
        <!-- Right Split -->
        <template slot="rightSlot">
          <service-links :links="links" linksTitle="Services"></service-links>
        </template>
      </split-sixty>
    </div>
  </div>
</template>


<script>
// Local Import
import BtnPrimary   from '../shared/btn-primary.vue';
import SplitSixty   from '../modules/sixty-forty.vue';
import ServiceLinks from './home-services--links.vue';

export default{
  name: 'HomeServices',

  data: function(){

    return{

      BtnData: {
        accessibility: 'View Our Services',
        btnRoute: '/services',
        btnClass: 'mdev-primary-btn --space-top-sm'
      },

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



<style lang="scss" >

/*-------------------------------------*/
/* HOME SERVICES Component Styles
/--------------------------------------*/
.mdev-section-links {
  width: 100%;
  position: relative;

  a {
    display: block;
    color: $white;
    padding: .5vw 0;
    transition: all .3s;

    &:hover,
    &:focus,
    &:active {
      .mdev-link-name {
        border-bottom: 4px solid rgba( 255, 255, 255, 1 );
      }
    }
  }

  .mdev-link-name {
    font-size: 1.6vw;
    border-bottom: 4px solid rgba( 255, 255, 255, 0 );
    display: inline-block;
    transition: all .6s;
  }

  .mdev-link-index {
    font-size: 1.1vw;
    display: inline-block;
  }
}

/*--------------------------------------*/

</style>
