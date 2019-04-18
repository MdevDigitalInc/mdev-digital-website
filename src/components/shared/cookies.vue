<template>
  <section class="mdev-cookies" :class="{'--active' : active }">
    <div class="mdev-main-wrapper flex flex-vert-center flex-hor-between u-c-white">
      <!-- Cookies Text Content -->
      <div class="mdev-cookies-content">
        <span class="--title u-bold u-uppercase">
          {{ $t('cookies.heading') }}
        </span>
        <p class="--text">
          {{ $t('cookies.text') }}
        </p>
      </div>
      <!-- Action -->
      <div class="mdev-cookies-action">
        <button
          v-on:click="acceptCookie"
          class="mdev-btn mdev-primary-btn"
          :class="{ 'fully-in-viewport' : active }">
          {{ $t('cookies.action') }}
        </button>
      </div>
    </div>
    <!-- Dismiss Button -->
    <div  v-on:click="dismissCookie" class="mdev-close-cookies u-c-white">
      <i class="fas fa-times"></i>
    </div>
  </section>
</template>

<script>
// Import Data From Flat File
import MdevData       from '../../mdev-data.js';

export default{
  name: 'CookiePopup',

  props: [ 'active' ],

  data: function(){
    return{
      // SEO
      seo: MdevData.siteSeo
    };
  },

  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.services.title,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.services.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.services.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.services.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.services.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.services.desc }
      ]
    };
  },

  methods: {
    dismissCookie() {
      // Emits event to parent to hide popup
      this.$emit('dismiss');
      // sets token to FALSE
      localStorage.setItem('acceptCookie', false);
    },

    acceptCookie() {
      // Emits event to parent to hid epopup
      this.$emit('dismiss');
      // Saves cookie acceptance
      localStorage.setItem('acceptCookie', true);
      // Sets expiry on acceptance
      localStorage.setItem('cookieExpiration', Date.now() + 15778800);
    }
  }
};
</script>

<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.mdev-cookies {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: $color-brand-primary;
  padding: 40px 0;
  z-index: 98;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, .2);
  opacity: 0;
  transition: all .5s;

  .mdev-cookies-content {
    width: 80%;

    .--title {
      font-size: 17px;
      letter-spacing: 1.6px;
    }

    .--text {
      font-size: 15px;
      letter-spacing: .45px;
    }
  }

  .mdev-close-cookies {
    position: absolute;
    padding: 10px;
    top: 0;
    cursor: pointer;
    right: 0;
    transition: all .5s;

    &:hover,
    &:focus,
    &:active {
      transform: scale(1.2);
      color: $black;
    }
  }

  &.--active {
    transition: all .5s;
    opacity: 1;
  }
}

/*--------------------------------------*/

</style>
