<template>
  <section v-view="(e) => changeNavBrand(e, '--white-black')"
    class="mdev-prefooter --triangle-top">
    <div class="mdev-main-wrapper flex flex-vert-start flex-hor-between flex-wrap">
      <!-- Call To Action -->
      <div class="mdev-prefooter-cta u-c-white">
        <!-- Title -->
        <span class="u-uppercase mdev-prefooter-title">
          {{ heading }}
        </span>
        <span class="u-uppercase mdev-prefooter-subtitle u-light --space-top-xs">
          {{ subheading }}
        </span>

        <btn-primary :BtnData="BtnData" v-in-viewport>
          {{ $t('brandingpage.prefooter.action') }}
        </btn-primary>
      </div>
      <!-- Links -->
      <div class="mdev-prefooter-nav flex flex-wrap flex-hor-between flex-vert-start">
        <!-- Link - Looped -->
        <div class="mdev-prefooter-links u-c-white"
          v-for="(link, index) in links"
          v-if="link.serviceFlag != serviceFlag">
          <!-- Column Heading -->
          <span class="--heading u-uppercase u-bold">
            {{ link.heading }}
          </span>
          <router-link :to="item.linkRoute"
            class="mdev-footer-link u-uppercase"
            v-for="(item, index) in link.list" :title="item.a11y">
            {{ item.linkName }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>




<script>
import BtnPrimary         from './btn-primary.vue';

export default{
  name: 'preFooter',

  props: ['heading', 'subheading', 'BtnData', 'links', 'serviceFlag' ],

  components: {
    'btn-primary' : BtnPrimary
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* Pre Footer Component Styles
/--------------------------------------*/
.mdev-prefooter {
  background: $color-brand-primary;
  width: 100%;
  position: relative;
  padding: 180px 0 120px;

  .mdev-main-wrapper {
    max-width: 1900px;
    width: 85%;
  }

  .mdev-prefooter-title {
    font-size: 100px;
    display: block;
    font-weight: 700;
  }

  .mdev-prefooter-subtitle {
    display: block;
    font-size: 203%;
  }

  .mdev-prefooter-cta {
    width: 50%;
    padding-right: 14%;

    @media #{$portrait} {
      width: 100%;
      padding-right: 0;
      margin-bottom: 25px;
    }
  }

  .mdev-prefooter-nav {
    width: 50%;
    padding: 0;

    @media #{$portrait} {
      width: 100%;
    }
  }

  .mdev-prefooter-links {
    width: 45%;
    display: block;
    margin-bottom: 15px;

    @media #{$portrait} {
      width: 100%;
    }

    .--heading {
      display: block;
      width: 100%;
      font-size: 25px;
      letter-spacing: 1.3px;
      line-height: 1;
      margin-bottom: 5px;
    }

    .mdev-footer-link {
      width: 100%;
      display: block;
      border-bottom: 2px solid $white;
      line-height: 2.17;
      transition: all .3s;
      font-weight: 400;
      font-size: 18px;
      letter-spacing: .2px;

      &:hover,
      &:focus,
      &:active {
        color: $black;
        background: $color-brand-accent;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
}


/*--------------------------------------*/

</style>
