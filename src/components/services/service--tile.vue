<template>
  <section class="mdev-service">
    <div class="mdev-service-wrapper flex flex-vert-center flext-hor-center"
      :class="{ '--flip-order' : flip }">
      <!-- Media slot for image -->
      <div v-if="lastChild" class="mdev-service-media">
        <slot name="mediaSlot"></slot>
      </div>
      <!-- Content slot for text -->
      <div class="mdev-service-content" :class="{ '--last' : !lastChild }">
        <slot name="contentSlot"></slot>
      </div>
    </div>
    <!-- Optional decorations -->
    <div
      v-if="serviceConfig.showDecoration"
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
  props: ['serviceConfig', 'lastChild', 'flip']
  // serviceConfig contains instructions for decorative elements
  // lastChild will only flip true for the final service that has no image
  // flip will turn true every second instance
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* SERVCICES--APPDEV Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
