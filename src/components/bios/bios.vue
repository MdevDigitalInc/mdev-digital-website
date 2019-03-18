<template>
  <div class="mdev-bios-mask" data-bio-mask>
    <!-- Bios Content -->
    <div v-for="(mdevBio, index) in mdevBios"
      v-if=" index == desiredIndex"
      class="mdev-bios-content">
      <!-- Employee Info -->
      <div class="mdev-bios-info a-flyin-lnd a-flyin-lnd-right" v-in-viewport>
        <div class="u-uppercase u-light --meet">
          {{ $t('teampage.meet') }}
        </div>
        <!-- Employee Name -->
        <h1 class="u-uppercase mdev-bios-name">
          {{ mdevBio.employeeName }}
        </h1>
        <!-- Employee Title -->
        <div class="u-italic u-light mdev-bios-title">
          {{ mdevBio.employeeTitle }}
        </div>
        <!-- Employee description -->
        <p class="mdev-bio-intro">
          {{ mdevBio.employeeIntro }}
        </p>
        <p v-for="snippet in mdevBio.employeeStory"
          class="mdev-bio-paragraph">
          {{ snippet }}
        </p>
        <ul class="mdev-bio-list">
          <li>
            <span class="mdev-bio-key u-bold">
              {{ $t('teampage.origin') }}
            </span>
              {{ mdevBio.employeeOrigin }}
          </li>
          <li v-if="mdevBio.employeeQuote">
            <span class="mdev-bio-key u-bold">
              {{ $t('teampage.quote') }}
            </span>
              {{ mdevBio.employeeQuote }}
          </li>
          <li>
            <span class="mdev-bio-key u-bold">
              {{ $t('teampage.tricks') }}
            </span>
              {{ mdevBio.employeeTrick }}
          </li>
        </ul>
      </div>
      <!-- Employee Picture -->
      <div class="mdev-bios-picture a-blur-in-lnd" v-in-viewport>
        <!-- Social Links -->
        <social-links
          darkTheme="true"
          v-in-viewport
          class="a-flyin-lnd a-flyin-lnd-left --portrait-left"
          :linkContent="mdevBio.socialLinks">
        </social-links>
        <!-- Team Member Picture -->
        <div class="mdev-bios-image u-text-center">
          <img :src="loadImage(mdevBio.employeeImage)" :alt="mdevBio.employeeName"/>
        </div>
      </div>
    </div>
    <!-- Bottom Bios Nav -->
    <bios-navigation
      v-on:nextBio="traverse(1)"
      v-on:previousBio="traverse(-1)"
      :nextBioName="mdevBios[nextIndex].employeeName"></bios-navigation>
    <div class="mdev-bios-nav-bkg"></div>
  </div>
</template>

<script>
// Import
import SocialLinks    from '../shared/social-links.vue';
import BiosNavigation from './bios--navigation.vue';
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';

export default {
  name: "BiosView",
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'Our Team',
      complement: 'MDEV Digital - London, Ontario'
    },
    meta: [
      { property: 'og:title', content: 'Our Team | MDEV Digital - London, Ontario' },
      { name: 'twitter:title', content: 'Our Team | MDEV Digital - London, Ontario' }
    ]
  },

  props: [ 'teammember' ],

  data: function() {
    return {
      // Indexing for navigation
      // Desired index selects which employee to view
      // See v-if on mdev-bios-content
      desiredIndex: 0,
      nextIndex: 1,
      // Data imported from mdev-data.js
      mdevBios: MdevData.mdevEmployees
    };
  },

  methods: {
    traverse(direction) {
      let arrayLen = this.mdevBios.length - 1;
      // Are we going passed the end of the array?
      if (direction + this.desiredIndex > arrayLen) {
        // Reset to start
        this.desiredIndex = 0;
        this.nextIndex = 1;
      }
      // Are we going passed the start of the array?
      else if (direction + this.desiredIndex < 0) {
        // Reset to the end
        this.desiredIndex = arrayLen;
        this.nextIndex = 0;
      }
      else {
        // Move as desired
        this.desiredIndex += direction;
        // Check limits on NextIndex so it doesn't go passed.
        if ( this.nextIndex + direction > arrayLen ) {
          this.nextIndex = 0;
        }
        else if ( this.nextIndex + direction < 0 ) {
          this.nextIndex = arrayLen;
        }
        else {
          this.nextIndex += direction;
        }
      }
      // Update route to match current employee in view
      this.$router.push({
        path: '/team/' + this.mdevBios[this.desiredIndex].employeeRoute
      });
    }
  },

  created: function() {
    // Pull in all the bios
    let team = this.mdevBios;
    let member = this.teammember;
    // Find total number of employee records
    let teamLength = this.mdevBios.length -1;
    // Reserve for loop
    let i;

    //Match Route to array via prop.
    for ( i=0; i <= teamLength; i ++ ) {
      if (team[i].employeeRoute == member) {
        this.desiredIndex = i;
        // Increment nextIndex making sure to watch the bounds
        i + 1 > teamLength ? this.nextIndex = 0 : this.nextIndex = i + 1;
      }
    }
  },

  components: {
    'bios-navigation' : BiosNavigation,
    'social-links'    : SocialLinks
  }
};
</script>

<style lang="scss">

/*-------------------------------------*/
/* bios Component Styles
/--------------------------------------*/

.mdev-bios-mask {
  width: 100%;
  top: 0;
  bottom: 0;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media #{$portrait} {
    height: auto;
  }
}

.mdev-bios-content {
  width: 90%;
  max-width: 2260px;
  margin: 0 auto;
  z-index: 5;
  position: relative;
  height: 100vh;

  @media #{$portrait} {
    height: auto;
  }
}

.mdev-bios-info {
  position: absolute;
  right: 10%;
  top: 8%;
  width: 40%;

  @media #{$laptop-only} {
    right: 4%;
  }

  @media #{$tablet-lnd-only} {
    top: 18%;
    right: 3%;
  }

  @media #{$portrait} {
    top: 100px;
    width: 90%;
    margin: 0 auto;
    position: relative;
    left: 0;
    right: 0;
  }

  @media #{$phone-only} {
    top: 80px;
  }

  .mdev-bios-name {
    font-size: 3.9vw;
    margin-bottom: 10px;

    @media #{$portrait} {
      font-size: 6vw;
    }
  }

  .--meet {
    font-size: 1.5vw;

    @media #{$portrait} {
      font-size: 5vw;
    }
  }

  .mdev-bios-title {
    font-size: 1.25vw;

    @media #{$portrait} {
      font-size: 3vw;
    }
  }

  .mdev-bio-paragraph {
    padding: 10px 0;
    font-size: 1vw;

    @media #{$portrait} {
      font-size: inherit;
    }
  }

  .mdev-bio-intro {
    font-size: 1.25vw;
    padding: 20px 0;

    @media #{$portrait} {
      font-size: 3vw;
    }

    @media #{$phone-only} {
      font-size: 4vw;
    }
  }

  .mdev-bio-list {
    font-size: 1.05vw;
    margin-top: 20px;
    line-height: 120%;

    @media #{$portrait} {
      font-size: 2vw;
      margin-bottom: 40px;
    }

    @media #{$phone-only} {
      display: none;
    }
  }
}

.mdev-bios-picture {
  width: 55%;
  position: absolute;
  bottom: 0;
  left: 0;

  @media #{$laptop-only} {
    width: 65%;
  }

  @media #{$tablet-lnd-only} {
    width: 65%;
  }

  @media #{$portrait} {
    width: 100%;
    bottom: -50px;
    position: relative;
  }

  @media #{$phone-only} {
    margin-top: 100px;
    bottom: -10px;
  }

  .mdev-bios-image {
    position: relative;
    width: 90%;
    z-index: 5;

    @media #{$portrait} {
      width: 100%;
      margin-top: 150px;
    }

    &:before {
      @include pseudo();
      @include center(horizontal);
      width: 70%;
      border: 4px solid $color-brand-accent;
      left: 45%;
      border-bottom: 0;
      top: 100px;
      bottom: 0;
      z-index: -1;

      @media #{$portrait} {
        width: 80%;
        top: 20px;
        left: 50%;
      }
    }

    img {
      width: 70%;
      position: relative;
      bottom: -5px;
    }
  }

  .mdev-social-links {
    width: 10%;
    position: absolute;
    left: 0;
    bottom: 15%;
    flex-wrap: wrap;
    font-size: 1.4vw;
    z-index: 6;

    @media #{$phone-only} {
      font-size: 5vw;
      bottom: 30%;
    }

    a {
      width: 100%;
      text-align: center;
      margin: 5px 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
