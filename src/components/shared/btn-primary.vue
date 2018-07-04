<template>
  <router-link
    title="BtnData.accessibility"
    aria-label="BtnData.accessibility"
    class="mdev-btn"
    :class="BtnData.btnClass"
    to="BtnData.btnRoute">
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

/*-------------------------------------*/
/* MAIN FOOTER Component Styles
/--------------------------------------*/

.mdev-nav-content {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  background: transparent;
  flex-wrap: nowrap;

  @media #{ $portrait } {
    flex-wrap: wrap;
  }
}

/*--------------------------------------*/

</style>
