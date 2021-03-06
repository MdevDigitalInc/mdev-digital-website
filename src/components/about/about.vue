<template>
  <section class="mdev-main-content">
    <!-- Hero Component -->
    <hero-main v-view="(e) => changeNavBrand(e, '--teal-white')" :pageTitle="pageTitle" :headerDsc="headerDsc">
      <!-- Slot Content -->
      <div class="mdev-main-hero --hero-pad-about" :style="heroStyles">
        <!-- Vivus Namespace -->
        <div class="mdev-vivus-header">
          <div class="--center-about">
            <h4 data-intro-heading class="a-blur-in u-c-white u-uppercase">
                {{ $t('aboutpage.intro.heading') }}
            </h4>
            <p data-intro-subhead class="a-blur-in u-c-primary mdev-hero-text">
              {{ $t('aboutpage.intro.subheading') }}
            </p>
          </div>
        </div>

        <!-- Sexy Lines -->
        <div class="mdev-sexy-line --sexy-white" data-line-one></div>
        <div class="mdev-sexy-line --sexy-white" data-line-two></div>
        <div class="mdev-sexy-line --sexy-white" data-line-three></div>
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
import ProcessSection     from './about--process.vue';
import PhilosophySection  from './about--philosophy.vue';
import EstablishedSection from './about--established.vue';
import FounderSection     from './about--founders.vue';
import TeamSection        from './about--team.vue';
import AboutPrefooter     from './about--prefooter.vue';
import AboutHood          from './about--hood.vue';
// Flat Data File
import MdevData           from '../../mdev-data.js';
import SEOData            from '../../site-seo.js';

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
      pageTitle: 'About MDEV Digital',
      headerDsc: 'About MDEV Digital',
      company: MdevData.aboutPage,
      // SEO
      seo: SEOData.siteSeo,
      // Staging Social URL
      // These variables allow for the creation of OG tags
      // for staging and prod. Change vars in site-seo.js!
      stagingBuild: SEOData.siteSeo.stagingBuild,
      liveUrl: SEOData.siteSeo.siteUrlLive,
      stageUrl: SEOData.siteSeo.siteUrlStaging
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.about.title,
      meta: [
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + '/about/index.html' },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.about.twimage) },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.about.ogimage) },
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
      var introHeading = document.querySelectorAll('[data-intro-heading]');
      var introSubhead = document.querySelectorAll('[data-intro-subhead]');
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introHeading, 'in-viewport');
        });
      }, 300);
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.addClass(introSubhead, 'in-viewport');
        });
      }, 900);
    });
  },

  // Return BKG to default
  destroyed: function() {
    this.bodyReset('--body-white');
  },

  components: {
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

.--center-about {
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
    width: 70%;
    padding: 0;
  }

  .mdev-hero-text {
    width: 100%;
  }

  h1 {
    @media #{$tablet-prt-only} {
      font-size: 60px;
    }
  }
}

.--hero-pad-about {
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
