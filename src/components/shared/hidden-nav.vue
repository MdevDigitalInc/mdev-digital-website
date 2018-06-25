<template>
  <div class="mdev-nav-content flex flex-hor-start flex-vert-start flex-nowrap" data-nav-content>
    <!-- Left Sidebar -->
    <slot name="sidebar"></slot>
    <!-- Main Links -->
    <slot name="main"></slot>
  </div>
</template>



<script>
  export default{
    name: 'HiddenNav',
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
}

/*--------------------------------------*/

</style>
