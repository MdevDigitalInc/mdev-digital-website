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
      :icons="company.icons"
      :body="company.process.text"
      :title="company.process.title">
      <!-- Action Slot -->
      <template slot="action">
        <btn-primary :BtnData="BtnData">
          {{ $t("homepage.casestudies.action") }}
        </btn-primary>
      </template>
    </process-section>
    <!-- Philosophy Section -->
    <philosophy-section
      :title="company.philosophy.title"
      :subtitle="company.philosophy.subtitle"
      :icons="company.philosophy.icons"></philosophy-section>
    <!-- Established -->
    <established-section
      :badge="company.established.badge"
      :a11y="company.established.a11y"
      :image="company.established.image"></established-section>
    <!-- Founder -->
    <founder-section
      :heading="company.founders.heading"
      :subheading="company.founders.subheading"
      :text="company.founders.text"
      :founders="company.founders.chiefs"></founder-section>
    <!-- Team -->
    <team-section
      :heading="company.team.heading"
      :subheading="company.team.subheading"
      :text="company.team.text"
      :members="company.team.members"></team-section>
    <!-- Pre-Footer -->
    <about-prefooter></about-prefooter>
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
// Flat Data File
import MdevData           from '../../mdev-data.js';

export default{
  name: 'About',

  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'Company Overview',
      complement: 'Process Driven UI/UX and Development - London, Ontario '
    },
    meta: [
      { property: 'og:title', content: 'Company Overview | Process Driven UI/UX and Development - London, Ontario' },
      { name: 'twitter:title', content: 'Company Overview | Process Driven UI/UX and Development - London, Ontario' }
    ]
  },

  data: function() {
    return {
      heroStyles: {
        backgroundColor: '#0f1617'
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
    };
  },

  mounted: function() {
    this.$nextTick(() => {
      setTimeout(() => {
        $('[data-intro-heading]').addClass('fully-in-viewport');
        // Adjust Arrow
      }, 300);
      setTimeout(() => {
        $('[data-intro-subhead]').addClass('fully-in-viewport');
      }, 900);
    });
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
    'about-prefooter'     : AboutPrefooter
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

  @media #{$laptop-up} {
    width: 60%;
    padding: 0;
  }

  h3 {
    font-size: 36px;
    line-height: 134%;
  }
}

.--hero-padding {
  padding-top: 40%;

  @media #{$portrait} {
    padding-top: 115%;
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
