<template>
  <section class="mdev-service">
    <div class="mdev-service-wrapper flex flex-vert-center flext-hor-center">
      <!-- Media slot for image -->
      <div class="mdev-service-media">
        <slot name="mediaSlot"></slot>
      </div>
      <!-- Content slot for text -->
      <div class="mdev-service-content">
        <slot name="contentSlot"></slot>
      </div>
    </div>
    <!-- Optional decorations -->
    <div
      :v-if="serviceConfig.showDecoration"
      class="d-divider flex flex-nowrap flex-vert-center"
      :class="{'--flip' : serviceConfig.reverse}">
      <span class="--circle"></span>
      <span class="--bar"></span>
    </div>
  </section>
</template>




<script>
export default{
  name: 'ServicesTile',
  props: ['serviceConfig']
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* SERVCICES--APPDEV Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
