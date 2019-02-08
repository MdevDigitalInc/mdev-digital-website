<template>
  <section class="mdev-prefooter --triangle-top">
    <div class="mdev-main-wrapper flex flex-vert-start flex-hor-between flex-wrap">
      <!-- Call To Action -->
      <div class="mdev-prefooter-cta u-c-white">
        <!-- Title -->
        <span class="h2 u-uppercase mdev-prefooter-title">
          {{ heading }}
        </span>
        <span class="h3 u-uppercase mdev-prefooter-subtitle">
          {{ subheading }}
        </span>

        <btn-primary :BtnData="BtnData" v-in-viewport>
          {{ $t('brandingpage.prefooter.action') }}
        </btn-primary>
      </div>
      <!-- Links -->
      <div class="mdev-prefooter-nav">

      </div>
    </div>
  </section>
</template>




<script>
import BtnPrimary         from './btn-primary.vue';

export default{
  name: 'preFooter',

  props: ['heading', 'subheading', 'BtnData', 'links' ],

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
}


/*--------------------------------------*/

</style>
