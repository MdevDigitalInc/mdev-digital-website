<template>
  <section class="mdev-full-section --accent-bkg --triangle-top --form-padding">
    <div class="mdev-main-form">
      <!-- Split Component 60 / 40 Reversed -->
      <split-sixty
        animClassLeft="a-flyin a-flyin-right"
        animClassRight="a-flyin a-flyin-left" :reverse="true" :top="true">
        <!-- Right Split [reversed:true] -->
        <template slot="leftSlot">
          <base-form v-on:submitted="swapForm" v-if="!formSubmitted" data-form></base-form>
          <div class="mdev-acknowledge" v-if="formSubmitted" data-form-thankyou>
            Thank you for submitting
          </div>
        </template>

        <template slot="rightSlot">
          <div class="form-subtitle u-uppercase">
            {{ $t("contact.smallTitle") }}
          </div>
          <div class="form-title u-uppercase">
            {{ $t("contact.largeTitle") }}
          </div>
          <!-- Loads Social Links -->
          <social-links darkTheme="true" :linkContent="socialLinks"></social-links>
        </template>
      </split-sixty>
    </div>
  </section>
</template>


<script>
// Imports
import BaseForm from '../shared/base-form.vue';
import SplitSixty from '../modules/sixty-forty.vue';
import SocialLinks from '../shared/social-links.vue';

export default{
  name: 'ContactForm',
  data: function() {
    return{
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
      ],
      formSubmitted: false
    };
  },

  methods: {
    loadImage(path){
      return require('../../assets/images/' + path);
    },
    swapForm() {
      console.log('swapped');
      this.formSubmitted = true;
    }
  },

  components: {
    'base-form'     : BaseForm,
    'split-sixty'   : SplitSixty,
    'social-links'  : SocialLinks
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/
.--form-padding {
  padding: 250px 0 150px;
}

.form-title {
  font-size: 900%;
  font-weight: 900;
  letter-spacing: 2px;
}

.form-subtitle {
  font-size: 220%;
  font-weight: 300;
}


.mdev-main-form {
  width: 100%;
  padding: 0 10%;

  color: $color-brand-bkg;
  .mdev-social-links {
    font-size: 380%;
    margin: 2vw 0;

    @media #{$portrait} {
      margin: 30px 0;
      font-size: 4vw;
    }

    @media #{$phone-only} {
      margin: 20px 0;
    }

    a {
      display: block;
      margin: 0 4%;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  form {
    margin-left: 40px;
  }
}


/*--------------------------------------*/

</style>
