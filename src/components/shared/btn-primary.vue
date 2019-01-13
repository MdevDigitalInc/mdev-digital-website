<template>
  <router-link
    v-in-viewport
    :title="BtnData.accessibility"
    :aria-label="BtnData.accessibility"
    class="mdev-btn"
    :class="BtnData.btnClass"
    :to="BtnData.btnRoute">
    <!-- Button Text -->
    <slot></slot>
  </router-link>
</template>



<script>
export default{
  name: 'PrimaryButton',

  props: ['BtnData']
};
</script>



<style lang="scss">

</style>
