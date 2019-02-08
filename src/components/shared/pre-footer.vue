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
        <!-- Link - Looped -->
        <div class="mdev-prefooter-links"
          v-for="(link, index) in links"
          v-if="link.serviceFlag != serviceFlag">
          <!-- Column Heading -->
          <span class="--heading">
            {{ link.heading }}
          </span>
          <router-link to="item.linkRoute"
            v-for="(item, index) in link.list" title="item.a11y">
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
}


/*--------------------------------------*/

</style>
