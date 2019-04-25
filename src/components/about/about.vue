<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-padding" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header">
          <div class="mdev-center">
            <h1 data-intro-heading class="a-blur-in u-c-white u-uppercase">
                {{ $t('aboutpage.intro.heading') }}
            </h1>
            <h3 data-intro-subhead class="a-blur-in u-c-primary">
              {{ $t('aboutpage.intro.subheading') }}
            </h3>
          </div>
        </div>

        <!-- Sexy Lines -->
        <div class="mdev-sexy-line --sexy-green" data-line-one></div>
        <div class="mdev-sexy-line --sexy-green" data-line-two></div>
        <div class="mdev-sexy-line --sexy-green" data-line-three></div>
      </div>
    </hero-main>
    <!-- Process Section -->
    <process-section
      v-view="(e) => changeNavBrand(e, '--white-black')"
      :icons="company.icons"
      :body="company.process.text"
      :title="company.process.title">
      <!-- Action Slot -->
      <template slot="action">
        <!-- [ Temporarily Disabled ]
        <btn-primary :BtnData="BtnData">
          {{ $t("homepage.casestudies.action") }}
        </btn-primary>
        -->
      </template>
    </process-section>
    <!-- Philosophy Section -->
    <philosophy-section
      v-view="(e) => changeNavBrand(e, '--teal-white')"
      :title="company.philosophy.title"
      :subtitle="company.philosophy.subtitle"
      :icons="company.philosophy.icons"></philosophy-section>
    <!-- Established -->
    <established-section
      v-view="(e) => changeNavBrand(e, '--teal-white')"
      :badge="company.established.badge"
      :a11y="company.established.a11y"
      :image="company.established.image"></established-section>
    <!-- Founder -->
    <founder-section
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :heading="company.founders.heading"
      :subheading="company.founders.subheading"
      :text="company.founders.text"
      :founders="company.founders.chiefs"></founder-section>
    <!-- Team -->
    <team-section
      v-view="(e) => changeNavBrand(e, '--teal-black')"
      :heading="company.team.heading"
      :subheading="company.team.subheading"
      :text="company.team.text"
      :members="company.team.members"></team-section>
    <!-- Our Neighbourhood -->
    <about-hood
      :background="company.hood.background"
      :foreground="company.hood.foreground"
      :foregroundMob="company.hood.foregroundMob"
      :a11y="company.hood.a11y"
      :heading="company.hood.heading"
      :text="company.hood.text"
      :decoration="company.hood.decoration"
      v-view="(e) => changeNavBrand(e, '--teal-black')"></about-hood>
    <!-- Pre-Footer -->
    <about-prefooter v-view="(e) => changeNavBrand(e, '--white-black')"></about-prefooter>
    <!-- Footer -->
    <main-footer></main-footer>
  </section>
</template>

<script>
// Local Component registration
import HeroMain           from '../shared/hero-main.vue';
import BtnPrimary         from '../shared/btn-primary.vue';
import MainFooter         from '../shared/main-footer.vue';
import ProcessSection     from './about--process.vue';
import PhilosophySection  from './about--philosophy.vue';
import EstablishedSection from './about--established.vue';
import FounderSection     from './about--founders.vue';
import TeamSection        from './about--team.vue';
import AboutPrefooter     from './about--prefooter.vue';
import AboutHood          from './about--hood.vue';
// Flat Data File
import MdevData           from '../../mdev-data.js';

export default{
  name: 'About',

  data: function() {
    return {
      heroStyles: {
        backgroundColor: '#0a1315'
      },
      BtnData: {
        accessibility: 'Learn more about our work!',
        btnRoute: '/comingsoon',
        btnClass: 'mdev-primary-btn --space-top-sm'
      },
      // Disables Page Title bar
      pageTitle: 'About MDEV Digital',
      headerDsc: 'About MDEV Digital',
      company: MdevData.aboutPage,
      // SEO
      seo: MdevData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.about.title,
      meta: [
        { vmid: 'twimage', name: 'twitter:image', content: this.loadImage(this.seo.about.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: this.loadImage(this.seo.about.ogimage) },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.about.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.about.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.about.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.about.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.about.desc }
      ]
    };
  },

  mounted: function() {
    // Make Body White
    this.bodyClass('--body-white');

    this.$nextTick(() => {
      var introHeading = document.querySelectorAll('[data-intro-heading]')[0];
      var introSubhead = document.querySelectorAll('[data-intro-subhead]')[0];
      setTimeout(() => {
        this.addClass(introHeading, 'fully-in-viewport');
        // Adjust Arrow
      }, 300);
      setTimeout(() => {
        this.addClass(introSubhead, 'fully-in-viewport');
      }, 900);
    });
  },

  // Return BKG to default
  destroyed: function() {
    this.bodyReset('--body-white');
  },

  components: {
    'btn-primary'         : BtnPrimary,
    'hero-main'           : HeroMain,
    'main-footer'         : MainFooter,
    'process-section'     : ProcessSection,
    'philosophy-section'  : PhilosophySection,
    'established-section' : EstablishedSection,
    'founder-section'     : FounderSection,
    'team-section'        : TeamSection,
    'about-prefooter'     : AboutPrefooter,
    'about-hood'          : AboutHood
  }
};
</script>



<style lang="scss" scoped>

/*-------------------------------------*/
/* ABOUT Component Styles
/--------------------------------------*/

.mdev-vivus-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0 5%;
}

.mdev-center {
  width: 100%;
  padding: 0 13%;
  @include center(both);

  @media #{$tablet-only} {
    padding: 0 12%;
  }

  @media #{$laptop-only} {
    width: 80%;
    padding: 0;
  }

  @media #{$desktop-up} {
    width: 60%;
    padding: 0;
  }

  h3 {
    font-size: 36px;
    line-height: 134%;

    @media #{$portrait} {
      font-size: 20px;
    }

    @media #{$tablet-prt-only} {
      font-size: 30px;
    }
  }

  h1 {
    @media #{$tablet-prt-only} {
      font-size: 60px;
    }
  }
}

.--hero-padding {
  padding-top: 40%;

  @media #{$portrait} {
    padding-top: 100%;
  }

  @media #{$phone-only} {
    padding-top: 150%;
    padding-bottom: 10%;
  }

  @media #{$tablet-lnd-only} {
    padding-top: 45%;
  }
}

// Line Starting Positions
// Because of rotation Y coordinate is actually X when translating
[ data-line-one ] {
  animation: line-one-anim;
  @include arrow-anim-rules(11s);
}

// Line Two is not rotated and therefore X is X and Y is Y
[ data-line-two ] {
  animation: line-two-anim-header;
  @include arrow-anim-rules(22s);
}

// Because of rotation Y coordinate is actually X when translating
[ data-line-three ] {
  animation: line-three-anim;
  @include arrow-anim-rules(17s);
}

/*--------------------------------------*/
</style>
