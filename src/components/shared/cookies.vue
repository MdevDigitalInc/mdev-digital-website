<template>
  <section class="mdev-cookies" :class="{'--active' : active }">
    <div class="mdev-main-wrapper flex-wrap flex flex-vert-center flex-hor-between u-c-white">
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
          :class="{ 'in-viewport' : active }">
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
  background: rgba(22, 177, 169, .95);
  padding: 40px 0;
  z-index: 98;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, .2);
  opacity: 0;
  transition: all .5s;

  @media #{$laptop-only} {
    padding: 25px 0;
  }

  @media #{$portrait} {
    padding: 30px 0;
    // Hacky override... srry!
    .flex-hor-between {
      justify-content: center;
    }
  }

  .mdev-cookies-content {
    width: 80%;

    @media #{$portrait} {
      width: 100%;
      margin-bottom: 20px;
    }

    @media #{$xl-up} {
      width: 60%;
    }

    .--title {
      display: inline-block;
      font-size: 17px;
      letter-spacing: 1.6px;
      margin-bottom: 10px;

      @media #{$portrait} {
        width: 100%;
        text-align: center;
      }
    }

    .--text {
      font-size: 15px;
      letter-spacing: .45px;
      line-height: 25px;

      @media #{$xl-up} {
        font-size: 17px;
      }
    }
  }

  .mdev-close-cookies {
    position: absolute;
    padding: 10px;
    top: 0;
    cursor: pointer;
    right: 0;
    transition: all .5s;

    @media #{$portrait} {
      padding: 15px;
    }

    @media #{$laptop-only} {
      padding: 20px;
    }

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

  .mdev-btn {
    line-height: inherit;
  }
}

/*--------------------------------------*/

</style>
