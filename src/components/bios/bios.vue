<template>
  <div class="mdev-bios-mask">
    <!-- Bios Content -->
    <div v-for="(mdevBio, index) in mdevBios"
      v-if=" index == desiredIndex"
      class="mdev-bios-content flex flex-vert-end">
      <!-- Employee Picture -->
      <div class="mdev-bios-picture">
        <!-- Social Links -->
        <social-links
          darkTheme="true"
          v-in-viewport
          class="a-flyin a-flyin-left --portrait-left"
          :linkContent="mdevBios.socialLinks">
        </social-links>
        <!-- Team Member Picture -->
        <div class="mdev-bios-image">
          <img :src="loadImage(mdevBio.employeeImage)" :alt="mdevBio.employeeName"/>
        </div>
      </div>
      <!-- Employee Info -->
      <div class="mdev-bios-info">
        <span class="u-uppercase u-light">
          MEET
        </span>
        <!-- Employee Name -->
        <h1 class="u-uppercase">
          {{ mdevBio.employeeName }}
        </h1>
        <!-- Employee Title -->
        <span class="u-italic">
          {{ mdevBio.employeeTitle }}
        </span>
        <!-- Employee description -->
        <p v-for="snippet in mdevBio.employeeIntro">
          {{ snippet }}
        </p>
      </div>
    </div>
    <!-- Bottom Bios Nav -->
    <bios-navigation
      v-on:nextBio="traverse(1)"
      v-on:previousBio="traverse(-1)"
      :nextBioName="mdevBios[nextIndex].employeeName"></bios-navigation>
  </div>
</template>

<script>
// Import

import SocialLinks  from '../shared/social-links.vue';
import BiosNavigation from './bios--navigation.vue';

export default {
  name: "BiosView",

  props: [ 'teammember' ],

  data: function() {
    return {
      desiredIndex: 0,
      nextIndex: 1,
      mdevBios: [
        {
          employeeName: "Lucas Moreira",
          employeeTitle: "CEO, Founder",
          employeeIntro: [
            "A disruptive thinker and creative visionary, Becky is constantly digging deeper to find\
             innovative solutions to complex problems. Able to distill client goals into a cohesive \
             creative vision that she communicates to the team for execution.",
            "After years of leading creative and software projects, Becky has developed an uncanny \
            ability to navigate complex timing and requirements to ensure succesful project completeion",
            "Becky currently serves as the co-chair of the Junior Achievement Marketing Advisory \
            committee and as a LTUX Committee Member for the #ldnont chapter."
          ],
          employeeOrigin: "Sao Paulo - Brazil",
          employeeQuote: "Think like a man of action, act like a man of thought..",
          employeeTrick: "Drone Enthusiast / Loose Transistor / DevOps",
          employeeImage: "bios/MDEV_BIOS-becky.png",
          socialLinks: [
            {
              linkClass: 'fa-facebook-f',
              target: '_blank',
              accessibility: 'Like us on Facebook',
              linkUrl: 'https://www.facebook.com/MDEVDigital'
            },
            {
              linkClass: 'fa-instagram',
              target: '_blank',
              accessibility: 'Follow us on Instagram',
              linkUrl: 'https://www.instagram.com/mdev_digital/'
            },
            {
              linkClass: 'fa-linkedin',
              target: '_blank',
              accessibility: 'Follow us on LinkedIn',
              linkUrl: 'https://www.linkedin.com/company/mdev-digital/'
            }
          ]
        },
        {
          employeeName: "Becky Domenico",
          employeeTitle: "Creative Director, Founder",
          employeeIntro: [
            "A disruptive thinker and creative visionary, Becky is constantly digging deeper to find\
             innovative solutions to complex problems. Able to distill client goals into a cohesive \
             creative vision that she communicates to the team for execution.",
            "After years of leading creative and software projects, Becky has developed an uncanny \
            ability to navigate complex timing and requirements to ensure succesful project completeion",
            "Becky currently serves as the co-chair of the Junior Achievement Marketing Advisory \
            committee and as a LTUX Committee Member for the #ldnont chapter."
          ],
          employeeOrigin: "Timmins, ON",
          employeeQuote: "Fear is the mind killer.",
          employeeTrick: "Coffee Fanatic / InDesign Wizard / Agility",
          employeeImage: "bios/MDEV_BIOS-becky.png",
          socialLinks: [
            {
              linkClass: 'fa-facebook-f',
              target: '_blank',
              accessibility: 'Like us on Facebook',
              linkUrl: 'https://www.facebook.com/MDEVDigital'
            },
            {
              linkClass: 'fa-instagram',
              target: '_blank',
              accessibility: 'Follow us on Instagram',
              linkUrl: 'https://www.instagram.com/mdev_digital/'
            },
            {
              linkClass: 'fa-twitter',
              target: '_blank',
              accessibility: 'Follow us on Twitter',
              linkUrl: 'https://twitter.com/MDEVdigital'
            },
            {
              linkClass: 'fa-linkedin',
              target: '_blank',
              accessibility: 'Follow us on LinkedIn',
              linkUrl: 'https://www.linkedin.com/company/mdev-digital/'
            }
          ]
        },
        {
          employeeName: "Haly Hawkins",
          employeeTitle: "Graphic Designer",
          employeeIntro: [
            "A disruptive thinker and creative visionary, Becky is constantly digging deeper to find\
             innovative solutions to complex problems. Able to distill client goals into a cohesive \
             creative vision that she communicates to the team for execution.",
            "After years of leading creative and software projects, Becky has developed an uncanny \
            ability to navigate complex timing and requirements to ensure succesful project completeion",
            "Becky currently serves as the co-chair of the Junior Achievement Marketing Advisory \
            committee and as a LTUX Committee Member for the #ldnont chapter."
          ],
          employeeOrigin: "Sao Paulo - Brazil",
          employeeQuote: "Think like a man of action, act like a man of thought..",
          employeeTrick: "Drone Enthusiast / Loose Transistor / DevOps",
          employeeImage: "bios/MDEV_BIOS-becky.png",
          socialLinks: [
            {
              linkClass: 'fa-facebook-f',
              target: '_blank',
              accessibility: 'Like us on Facebook',
              linkUrl: 'https://www.facebook.com/MDEVDigital'
            },
            {
              linkClass: 'fa-instagram',
              target: '_blank',
              accessibility: 'Follow us on Instagram',
              linkUrl: 'https://www.instagram.com/mdev_digital/'
            },
            {
              linkClass: 'fa-linkedin',
              target: '_blank',
              accessibility: 'Follow us on LinkedIn',
              linkUrl: 'https://www.linkedin.com/company/mdev-digital/'
            }
          ]
        },
        {
          employeeName: "Richard Goodine",
          employeeTitle: "Full Stack Developer",
          employeeIntro: [
            "A disruptive thinker and creative visionary, Becky is constantly digging deeper to find\
             innovative solutions to complex problems. Able to distill client goals into a cohesive \
             creative vision that she communicates to the team for execution.",
            "After years of leading creative and software projects, Becky has developed an uncanny \
            ability to navigate complex timing and requirements to ensure succesful project completeion",
            "Becky currently serves as the co-chair of the Junior Achievement Marketing Advisory \
            committee and as a LTUX Committee Member for the #ldnont chapter."
          ],
          employeeOrigin: "Timmins, ON",
          employeeQuote: "Fear is the mind killer.",
          employeeTrick: "Coffee Fanatic / InDesign Wizard / Agility",
          employeeImage: "bios/MDEV_BIOS-becky.png",
          socialLinks: [
            {
              linkClass: 'fa-facebook-f',
              target: '_blank',
              accessibility: 'Like us on Facebook',
              linkUrl: 'https://www.facebook.com/MDEVDigital'
            },
            {
              linkClass: 'fa-instagram',
              target: '_blank',
              accessibility: 'Follow us on Instagram',
              linkUrl: 'https://www.instagram.com/mdev_digital/'
            },
            {
              linkClass: 'fa-twitter',
              target: '_blank',
              accessibility: 'Follow us on Twitter',
              linkUrl: 'https://twitter.com/MDEVdigital'
            },
            {
              linkClass: 'fa-linkedin',
              target: '_blank',
              accessibility: 'Follow us on LinkedIn',
              linkUrl: 'https://www.linkedin.com/company/mdev-digital/'
            }
          ]
        }
      ],
    };
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    },
    // Change Language METHOD
    change () {
      let current = this.$locale.current();
      if (current === 'en') {
        this.$locale.change('pt');
      } else {
        this.$locale.change('en');
      }
    },
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
        if ( this.nextIndex + direction == arrayLen ) {
          this.nextIndex = 0;
        }
        else if ( this.nextIndex + direction < 0 ) {
          this.nextIndex = arrayLen;
        }
        else {
          this.nextIndex += direction;
        }
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

.mdev-bios-mask {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

</style>
